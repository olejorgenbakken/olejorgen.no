import { Email } from "./email.model";
import { Name } from "./name.model";
import { PhoneNumber } from "./phone.model";
import { Social } from "./social.model";

export type About = {
  name: Name;
  email?: Email;
  phone?: PhoneNumber;
  socials?: Social[];
};
