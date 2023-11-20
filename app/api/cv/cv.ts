import { School, Business } from "./cv.model";

export const education: School[] = [
  {
    name: "Høyskolen Kristiania",
    degree: "Bachelor i Informatikk: Interaksjonsdesign",
    url: "https://www.kristiania.no/",
    date_start: new Date("2018-08-01"),
    date_end: new Date("2021-06-01"),
  },
];

export const experience: Business[] = [
  {
    name: "Fremtind Forsikring",
    description: "Forsikringsselskap eid av Sparebank1 og DNB",
    job_title: "UX Designer",
    job_description: "Design av digitale tjenester for bedriftsmarkedet.",
    url: "https://www.fremtind.no/",
    logo: "assets/fremtind-logo_black.svg",
    date_start: new Date("2023-04-11"),
  },
  {
    name: "NAV",
    description: "Arbeids- og velferdsdirektoratet",
    job_title: "UX Designer",
    job_description:
      "Design av ny søknad for dagpenger, samt arbeid med NAVs designsystem Aksel.",
    url: "https://www.aksel.nav.no/",
    logo: "assets/nav-logo.svg",
    date_start: new Date("2022-11-01"),
    date_end: new Date("2023-03-31"),
  },
  {
    name: "Vipps",
    description: "Norges største betalingsapp",
    job_title: "UX Designer",
    job_description: "Sommerjobb med fokus på veldedghet og donasjoner.",
    url: "https://www.vipps.no/",
    logo: "assets/vipps-logo.svg",
    date_start: new Date("2021-06-01"),
    date_end: new Date("2021-08-18"),
  },
];
