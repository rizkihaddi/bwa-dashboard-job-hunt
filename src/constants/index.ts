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