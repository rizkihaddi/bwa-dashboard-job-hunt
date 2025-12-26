import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";
import { useRef } from "react";


interface Props {
    updateBenefits: (item: any) => void;
};


export default function DialogAddBenefits({ updateBenefits }: Props) {
    const benefitRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const handleSaveBenefit = () => {
        const benefit = benefitRef.current?.value;
        const description = descriptionRef.current?.value;

        if (!benefit) {
            return;
        }

        updateBenefits({
            benefit,
            description
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="button" variant="outline">
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Benefit
                </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle>Add Benefit</DialogTitle>
                    <DialogDescription>
                        Make a new benefit, cliks save when your done
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-8 mb-5">
                    <div className="space-y-1.5">
                        <Label htmlFor="benefit">Benefit</Label>
                        <Input
                            id="benefit"
                            placeholder="fill your benefit..."
                            ref={benefitRef}
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="fill your description..."
                            ref={descriptionRef}
                        />
                    </div>
                </div>
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    <DialogClose>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                    <Button type="button" onClick={handleSaveBenefit}>
                        Save
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
};