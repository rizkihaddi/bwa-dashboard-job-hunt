import * as z from "zod";

export const JOBTYPES = z.enum(["Full-Time", "Part-Time", "Remote", "Internship"], { message: "You need to select a job types" });

export type optionType = {
    id: string;
    label: string;
};

export const JOB_LISTINGS_COLUMNS: string[] = [
    "Roles",
    "Status",
    "Date Posted",
    "Due Date",
    "Job Type",
    "Applicants",
    "Needs"
];

export const JOB_APPLICANTS_COLUMNS: string[] = [
    "Name",
    "Applied Date"
];

export const JOB_APPLICANTS_DATA = [
    {
        "name": "Rizki Haddi Prayoga",
        "appliedDate": "12 Dec 2025"
    }
];

export const JOB_LISTINGS_DATA = [
    {
        roles: "Solution Engineer",
        status: "Live",
        datePosted: "12 Aug 2025",
        dueDate: "12 Sep 2025",
        jobType: "Full-Time",
        applicants: 1,
        needs: 12
    }
];

export const LOCATION_OPTIONS: optionType[] = [
  { id: "BRN", label: "BRUNEI" },
  { id: "KHM", label: "CAMBODIA" },
  { id: "IDN", label: "INDONESIA" },
  { id: "LAO", label: "LAOS" },
  { id: "MYS", label: "MALAYSIA" },
  { id: "MMR", label: "MYANMAR" },
  { id: "PHL", label: "PHILIPPINES" },
  { id: "SGP", label: "SINGAPORE" },
  { id: "THA", label: "THAILAND" },
  { id: "TLS", label: "TIMOR-LESTE" },
  { id: "VNM", label: "VIETNAM" }
];

export const EMPLOYEE_OPTIONS: optionType[] = [
  { id: "1-50", label: "1-50" },
  { id: "51-150", label: "51-150" },
  { id: "151-250", label: "151-250" },
  { id: "251-500", label: "251-500" },
  { id: "501-1000", label: "501-1000" },
  { id: "1000-above", label: "1000-above" }
];

export const INDUSTRIES_OPTIONS: optionType[] = [
  { id: "software", label: "Software" },
  { id: "saas", label: "SaaS" },
  { id: "it_services", label: "IT Services" },
  { id: "fintech", label: "Fintech" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "data_ai", label: "Data & AI" },
  { id: "cloud_infrastructure", label: "Cloud / Infrastructure" },
  { id: "cyber_security", label: "Cyber Security" },
  { id: "it_consulting", label: "IT Consulting" },
  { id: "other", label: "Other" }
];