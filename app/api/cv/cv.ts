import CV from "./models/cv.model";
import { Education } from "./models/education.model";
import { Experience } from "./models/experience.model";
import { Language } from "./models/language.model";

export const education: Education[] = [
  {
    school: {
      name: "Høyskolen Kristiania",
      homepage_url: "https://www.kristiania.no/",
    },
    degree: "Bachelor",
    field: "Informatikk med spesialisering innen interaksjonsdesign",
    date_start: new Date("2018-08-01"),
    date_end: new Date("2021-06-01"),
  },
];

export const experience: Experience[] = [
  {
    field: "UX Design",
    description: "Design av forsikringsportal for bedriftskunder",
    date_start: new Date("2023-04-11"),
    company: {
      name: "Fremtind Forsikring",
      homepage_url: "https://www.fremtind.no/",
      logo: "https://www.fremtind.no/Content/images/fremtind-logo.svg",
    },
  },
  {
    field: "UX Design",
    description: "",
    date_start: new Date("2021-11-01"),
    date_end: new Date("2023-03-31"),
    company: {
      name: "NAV",
      homepage_url: "https://www.nav.no/",
      logo: "https://www.nav.no/portal-front/navigasjon/ikoner/logo-nav.svg",
    },
    projects: [
      {
        name: "Aksel",
        description: "Designsystemet til NAV",
        homepage_url: "https://aksel.nav.no/",
        date_start: new Date("2022-08-01"),
        date_end: new Date("2023-03-31"),
        company: {
          name: "NAV",
          homepage_url: "https://www.nav.no/",
          logo: "https://www.nav.no/portal-front/navigasjon/ikoner/logo-nav.svg",
        },
      },
      {
        name: "Ny dagpengesøknad",
        description: "Design av ny dagpengesøknad",
        date_start: new Date("2021-11-01"),
        date_end: new Date("2022-07-31"),
        company: {
          name: "NAV",
          homepage_url: "https://www.nav.no/",
          logo: "https://www.nav.no/portal-front/navigasjon/ikoner/logo-nav.svg",
        },
      },
    ],
  },
];

export const languages: Language[] = [
  {
    name: "Norsk",
    level: "Morsmål",
  },
  {
    name: "Engelsk",
    level: "Flytende",
  },
];

export const cv: CV = {
  education,
  experience,
  languages,
};

export default cv;
