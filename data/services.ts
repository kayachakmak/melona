export interface ServiceItem {
  name: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export const services: ServiceCategory[] = [
  {
    category: "Cosmetic Dentistry",
    items: [
      { name: "Laser Teeth Whitening" },
      { name: "Composite Bonding" },
      { name: "E-max Veneers" },
      { name: "Smile Design" },
      { name: "Gum Aesthetics (Gingivectomy)" },
    ],
  },
  {
    category: "Crowns & Restorations",
    items: [
      { name: "E-max Crowns" },
      { name: "Zirconia Crowns" },
      { name: "Monolithic Zirconia" },
      { name: "Monolithic E-max" },
      { name: "Inlay/Onlay Restorations" },
    ],
  },
  {
    category: "Implants",
    items: [
      { name: "Dental Implants" },
      { name: "All-on-4" },
      { name: "All-on-6" },
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
