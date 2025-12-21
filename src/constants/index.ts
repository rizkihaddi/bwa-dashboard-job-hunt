import * as z from "zod";

export const JOBTYPES = z.enum(["Full-Time", "Part-Time", "Remote", "Internship"], { message: "You need to select a job types" });