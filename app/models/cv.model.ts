export type Experience = {
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  url: string;
};

export type Project = {
  title: string;
  company: Experience['company'];
  startDate: Date;
  endDate?: Date;
  url?: string;
  companyURL: Experience['url'];
};
