export type Business = {
  name: string;
  description: string;
  job_title: string;
  job_description: string;
  url: string;
  logo: string;
  date_start: Date;
  date_end?: Date;
};

export type School = {
  name: string;
  degree: string;
  url: string;
  date_start: Date;
  date_end?: Date;
};

export type Project = {
  name: string;
  description: string;
  url?: string;
  business: Business["name"];
  date_start: Date;
  date_end: Date;
};
