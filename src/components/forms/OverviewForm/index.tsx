"use client"

import TitleForms from '@/components/atoms/TitleForm';
import CustomUpload from '@/components/organisms/CustomUpload';
import FieldInput from '@/components/organisms/FieldInput';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { overviewFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { LOCATION_OPTIONS, optionType } from '@/constants';

interface OverviewFormProps {

};

const OverviewForm: FC<OverviewFormProps> = ({ }) => {
    const form = useForm<z.infer<typeof overviewFormSchema>>({
        resolver: zodResolver(overviewFormSchema)
    });

    const onSubmit = (val: z.infer<typeof overviewFormSchema>) => {
        console.log(val);
    };

    return (
        <div>
            <div className='my-5'>
                <TitleForms
                    title='Basic Information'
                    subtitle='This company information that you can update anytime' />
            </div>

            <Separator className='mb-6' />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <FieldInput title='Company Logo' subtitle='This image will be shown publicly as company logo'>
                        <CustomUpload form={form} name="image" />
                    </FieldInput>

                    <FieldInput title='Company Details' subtitle='Introduce your company core info quickly to users by fill up company details.'>
                        <div className='space-y-5'>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className='w-112.5'
                                                placeholder="Toyota" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="website"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Website</FormLabel>
                                        <FormControl>
                                            <Input
                                                className='w-112.5'
                                                placeholder="https://" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>

                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className='w-112.5'>
                                                    <SelectValue placeholder="Select Locations" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                                                    <SelectItem key={item.id + i} value={item.id}>{item.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </FieldInput>
                </form>
            </Form>
        </div>
    );
};

export default OverviewForm;