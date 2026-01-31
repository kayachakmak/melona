export interface ServiceItem {
  name: string;
  caseStudySlug?: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export const services: ServiceCategory[] = [
  {
    category: "Cosmetic Dentistry",
    items: [
      { name: "Laser Teeth Whitening", caseStudySlug: "smile-rejuvenation" },
      { name: "Composite Bonding", caseStudySlug: "smile-rejuvenation" },
      { name: "E-max Veneers", caseStudySlug: "smile-rejuvenation" },
      { name: "Smile Design", caseStudySlug: "smile-rejuvenation" },
      { name: "Gum Aesthetics (Gingivectomy)" },
    ],
  },
  {
    category: "Crowns & Restorations",
    items: [
      { name: "E-max Crowns", caseStudySlug: "zirconia-rehabilitation" },
      { name: "Zirconia Crowns", caseStudySlug: "zirconia-rehabilitation" },
      { name: "Monolithic Zirconia", caseStudySlug: "zirconia-rehabilitation" },
      { name: "Monolithic E-max", caseStudySlug: "zirconia-rehabilitation" },
      { name: "Inlay/Onlay Restorations", caseStudySlug: "zirconia-rehabilitation" },
    ],
  },
  {
    category: "Implants",
    items: [
      { name: "Dental Implants", caseStudySlug: "implant-rehabilitation" },
      { name: "All-on-4", caseStudySlug: "implant-rehabilitation" },
      { name: "All-on-6", caseStudySlug: "implant-rehabilitation" },
    ],
  },
  {
    category: "General Dentistry",
    items: [
      { name: "Root Canal Treatment" },
      { name: "Composite Fillings" },
      { name: "Gum Disease Treatment" },
    ],
  },
  {
    category: "Additional Services",
    items: [
      { name: "Masseter Botox" },
    ],
  },
];
