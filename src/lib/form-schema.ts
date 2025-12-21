import { JOBTYPES } from "@/constants";
import { z } from "zod"

export const jobFormSchema = z.object({
    roles: z.string("Job Title is required").min(3, "Job Title must be at least 3 characters"),
    jobType: JOBTYPES,
    salaryFrom: z.string("Salary From is Required"),
    salaryTo: z.string("Salary To is Required"),
    categoryId: z.string("You need to select category"),
    requiredSkills: z.string().array().nonempty("Required Skill must be at least 1 skill"),
    jobDescription: z.string("Job Description is required").min(10, "Too short!"),
    responsibility: z.string("Responsibility is required").min(10, "Too short!"),
    whoYouAre: z.string("Who You Are is required").min(10, "Too short!"),
    niceToHaves: z.string("Nice to Have is required").min(10, "Too short!"),
    benefits: z.object({
        benefit: z.string(),
        description: z.string(),
    }).array().nonempty("Benefits at least 1 benefit")
});