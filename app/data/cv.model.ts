type Experience = {
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  url: string;
};

type Project = {
  title: string;
  company: Experience["company"];
  startDate: Date;
  endDate?: Date;
  url?: string;
  companyURL: Experience["url"];
};
