"use client"

import { jobFormSchema } from '@/lib/form-schema';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeftIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Form, FormField, FormItem, FormControl, FormDescription, FormMessage, FormLabel } from '@/components/ui/form';
import FieldInput from '@/components/organisms/FieldInput';
import { Input } from '@/components/ui/input';
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { JOBTYPES } from '@/constants';

const PostJobPage = () => {
    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills: []
        }
    });

    const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
        console.log(val);
    };

    return (
        <div>
            <div className='inline-flex items-center gap-2 cursor-pointer hover:text-primary'>
                <ArrowLeftIcon className='w-6 h-6' />
                <span className='text-xl font-semibold'>Post a Job</span>
            </div>

            <div className='my-5'>
                <div className='text-lg font-semibold'>Basic Information</div>
                <div className='text-gray-400'>
                    This information will be displayed publicly
                </div>
            </div>

            <Separator />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-6 pt-5'>
                    <FieldInput title='Job Title' subtitle='Job titles must be describe one position'>
                        <FormField
                            control={form.control}
                            name="roles"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            className='w-112.5'
                                            placeholder="e.g Software Engineer" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        At least 80 chacacters.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </FieldInput>

                    <FieldInput title='Type of Employement' subtitle='You can select multiple type of employement'>
                        <FormField
                            control={form.control}
                            name="jobType"
                            render={({ field }) =>
                                <FormItem className="space-y-3">
                                    <FormControl>
                                        <RadioGroup onValueChange={field.onChange} value={field.value} className='flex flex-col space-y-1'>
                                            {JOBTYPES.options.map((item: string, i: number) => (
                                                <FormItem key={item + i} className='flex items-center space-x-3 space-y-0'>
                                                    <FormControl>
                                                        <RadioGroupItem value={item} />
                                                    </FormControl>
                                                    <FormLabel className='font-normal'>
                                                        {item}
                                                    </FormLabel>
                                                </FormItem>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>}
                        />
                    </FieldInput>

                    <FieldInput title='Salary' subtitle='Please specify the estimated salary range for the role'>
                        <div className='w-112.5 flex flex-row justify-between items-center'>
                            <FormField
                                control={form.control}
                                name="salaryFrom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className='w-full'
                                                placeholder="$100" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <span className='text-center'>To</span>
                            <FormField
                                control={form.control}
                                name="salaryTo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className='w-full'
                                                placeholder="$1000" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </FieldInput>

                    <FieldInput title='Categories' subtitle='You can select job categories'>
                        <FormField
                            control={form.control}
                            name="categoryId"
                            rules={{ required: "Category is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Select Job Categories</FormLabel>

                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger className='w-112.5'>
                                                <SelectValue placeholder="Select Job Categories" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="admin">Admin</SelectItem>
                                            <SelectItem value="editor">Editor</SelectItem>
                                            <SelectItem value="viewer">Viewer</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                    </FieldInput>
                </form>
            </Form>
        </div>
    );
}; ``

export default PostJobPage;