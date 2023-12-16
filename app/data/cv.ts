export const experience: Experience[] = [
  {
    company: "Fremtind Forsikring AS",
    position: "Interaksjonsdesigner",
    description: "Description 1",
    startDate: new Date("2023-04-11"),
    url: "https://www.fremtind.no",
  },
  {
    company: "NAV",
    position: "Produktdesigner",
    description: "Description 2",
    startDate: new Date("2021-11-01"),
    endDate: new Date("2023-03-31"),
    url: "https://www.nav.no",
  },
];

export const projects: Project[] = [
  {
    title: "Kundeportal for bedriftskunder",
    company: experience[0].company,
    startDate: new Date("2023-04-11"),
    companyURL: "https://www.fremtind.no",
  },
  {
    title: "Aksel designsystem",
    company: experience[1].company,
    startDate: new Date("2022-08-01"),
    endDate: new Date("2023-03-31"),
    url: "https://www.aksel.nav.no",
    companyURL: "https://www.nav.no",
  },
  {
    title: "Ny søknad for dagpenger",
    company: experience[1].company,
    startDate: new Date("2021-12-01"),
    endDate: new Date("2022-07-31"),
    companyURL: "https://www.nav.no",
  },
];
