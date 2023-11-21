import { Education } from "./education.model";
import { Experience } from "./experience.model";
import Language from "./language.model";

export type CV = {
  experience: Experience[];
  education: Education[];
  languages: Language[];
};

export default CV;
