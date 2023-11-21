import { Repo } from "../../github/models/repo.model";

export type Company = {
  name: string;
  homepage_url: string;
  logo: string;
};

export type Project = {
  name: string;
  description: string;
  homepage_url?: string;
  repo?: Repo;
  date_start: Date;
  date_end?: Date;
  company: Company;
};

export type Experience = {
  field: string;
  description: string;
  date_start: Date;
  date_end?: Date;
  company: Company;
  projects?: Project[];
};

export default Experience;
