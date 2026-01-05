 Build a modern, elegant dental clinic website for "Melona Dent Clinic" replicating the design aesthetic of omp.dentist.

## IMPORTANT: First Steps
1. Check my existing project structure, dependencies, and configuration
2. Identify what's already set up (App Router vs Pages Router, existing styling, etc.)
3. Work within my existing setup—don't reinitialize the project
4. Install only the additional dependencies needed

## Additional Dependencies to Install (if not present)
- framer-motion (for animations)
- @shadcn/ui components (if not set up)
- Any missing dependencies based on current package.json

## Design System

### Visual Style
- **Aesthetic**: Clean, contemporary, welcoming, premium feel
- **Layout**: Generous white space, editorial-style typography, full-width sections
- **Photography style**: High-quality lifestyle dental imagery with warm, natural lighting

### Color Palette
- Primary background: Off-white/cream (#FAFAF8 or similar warm white)
- Text: Dark charcoal/near-black for headings
- Accent: Muted sage green or teal for buttons and highlights
- Footer: Dark navy/black background with white text

### Typography
- Headings: Elegant serif font (like Playfair Display or similar)
- Body: Clean sans-serif (like Inter or DM Sans)
- Large display text for hero sections
- Generous line-height for readability

## Pages to Build

### 1. HOME PAGE (/)
Single-page layout with smooth scroll navigation.

**Header/Navigation**
- Fixed/sticky minimal header on scroll
- "Melona Dent Clinic" logo/logotype on left
- Navigation links: About, Our Dentist, Services, Free Consultation, Practice, Contact
- Mobile: Hamburger menu with full-screen overlay
- Smooth scroll to sections for anchor links

**Hero Section**
- Large headline: "Melona Dent Clinic"
- Tagline: "Your trusted neighbourhood dental practice"
- Subheading about comprehensive, patient-focused care
- Prominent "BOOK FREE CONSULTATION" CTA button
- Full-width hero image

**About Section (#about)**
- Section title: "About the Practice"
- Two-column layout: text left, image right (stacked on mobile)
- Warm copy about clinic philosophy, modern equipment, patient comfort

**Our Dentist Section (#our-dentist)**
- Section title: "Our Dentist"
- Large professional photo of Dt. Melek
- Name: "Dt. Melek" with title "Principal Dentist"
- Detailed bio paragraph
- "Our Approach" subsection (prevention-focused, welcoming nervous patients, family-friendly)

**Services Section (#services)**
- Section title: "Services"
- Intro paragraph + "BOOK FREE CONSULTATION" CTA
- Collapsible accordion categories:
  1. Assessment Services
  2. Oral Hygiene
  3. Children's Dentistry
  4. Restorative Treatments
  5. Aesthetic Treatments
  6. Extractions
  7. Dental Appliances
- Each shows service name + price

**Free Consultation Section (#free-consultation)**
- Accent background color
- Section title: "Free Consultation"
- Compelling copy about the free consultation offer
- Large CTA button
- Optional: Simple contact form (name, email, phone, preferred date)

**Testimonials Section**
- 2-3 patient testimonials
- Alternating layout: quote + patient image
- Stylized quotation marks

**Contact Section (#contact) / Footer**
- Dark background (navy/charcoal)
- Three columns: Contact info | Address | Opening hours
- White logo + copyright

---

### 2. PRACTICE PAGE (/practice)

**Hero Section**
- Title: "Our Practice"
- Intro text about the clinic space
- Two hero images

**Photo Gallery**
- Grid layout (12-16 images)
- Lightbox on click
- Hover zoom effect

**Same footer**

---

## Interactions & Animations
- Smooth scroll for anchor links
- Fade-in on scroll (Framer Motion)
- Button hover effects
- Accordion animations for services
- Gallery image hover zoom
- Mobile menu slide-in
- Page transitions

## Mobile-First Requirements
- Design mobile FIRST, then scale up
- Touch-friendly targets (44px minimum)
- Hamburger navigation on mobile
- Single-column layouts on mobile
- Full-width images on mobile
- 16px minimum body text

## Components to Create
/components
/layout
Header.tsx
Footer.tsx
MobileMenu.tsx
/sections
Hero.tsx
AboutSection.tsx
DentistSection.tsx
ServicesSection.tsx
FreeConsultationSection.tsx
TestimonialsSection.tsx
/ui
Button.tsx
AccordionService.tsx
ServiceItem.tsx
TestimonialCard.tsx
PhotoGallery.tsx
LightboxModal.tsx

## Data Files
```typescript
// /data/services.ts
export const services = [
  {
    category: "Assessment Services",
    items: [
      { name: "Dental Examination", price: "..." },
    ]
  },
  // more categories
]

// /data/testimonials.ts
export const testimonials = [
  {
    quote: "...",
    name: "...",
    image: "/images/testimonial-1.jpg"
  },
]
```

## Placeholder Content

**Dt. Melek Bio:**
"Dt. Melek is the founder and principal dentist at Melona Dent Clinic. With years of experience in dentistry, she is passionate about providing personalized, gentle care to patients of all ages. Known for her calm, reassuring approach—especially with nervous patients and children—she believes prevention is the foundation of good oral health."

**Use placeholder images** from Unsplash or placeholder URLs for development.

## Implementation Order
1. Review existing project structure and dependencies
2. Install additional dependencies if needed
3. Set up fonts and update global styles
4. Build Header + Footer (mobile-first)
5. Build Home page sections in order
6. Build Practice page with gallery
7. Add Framer Motion animations
8. Test responsive behavior
9. Polish and optimize

Build mobile layout first for each component, then add md: and lg: breakpoints.