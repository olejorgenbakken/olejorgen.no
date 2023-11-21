export type School = {
  name: string;
  homepage_url: string;
};

export type Education = {
  date_start: Date;
  date_end?: Date;
  field: string;
  degree: string;
  school: School;
};

export default Education;
