"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#3D4A32] text-white min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen flex flex-col pb-0">
      {/* Top Section - Info */}
      <div className="px-6 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-2">
            <a href="mailto:melonadent@gmail.com" className="block text-sm hover:opacity-70 transition-opacity">
              melonadent@gmail.com
            </a>
            <a href="tel:+905401234567" className="block text-sm hover:opacity-70 transition-opacity">
              +90 540 490 24 25
            </a>
            <a href="https://instagram.com/melonadentclinic" target="_blank" rel="noopener noreferrer" className="block text-sm hover:opacity-70 underline transition-opacity">
              Instagram
            </a>
          </div>

          {/* Address */}
          <div className="space-y-1">
            <p className="text-sm">Melona Dent Clinic</p>
            <p className="text-sm">Sarı Konak, Şirinyalı, Lara Cd. No: 171/B</p>
            <p className="text-sm">07160 Muratpaşa/Antalya, Türkiye</p>
            <a
              href="https://maps.google.com/?q=Melona+Dent+Clinic,+123+Dental+Street,+Antalya,+Turkey"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:opacity-70 transition-opacity underline mt-2"
            >
              Get Directions
            </a>
          </div>

          {/* Opening Hours */}
          <div className="space-y-1">
            <div className="flex gap-6 text-sm items-center whitespace-nowrap">
              <span className="w-16">Mon-Fri</span>
              <span>10-19.30</span>
            </div>
            <div className="flex gap-6 text-sm items-center whitespace-nowrap">
              <span className="w-16">Sat</span>
              <span>10-14</span>
            </div>
            <div className="flex gap-6 text-sm items-center whitespace-nowrap">
              <span className="w-16">Sun</span>
              <span>Closed</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm lg:text-right">
            <p>&copy; Melona Dent Clinic {currentYear}</p>
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="px-2 lg:px-4 pt-8 sm:pt-12 lg:pt-16 pb-0 text-center flex-1 flex flex-col justify-end">
        <Link href="/" className="block w-full m-0 p-0 font-serif text-[clamp(2.5rem,18vw,30rem)] leading-[0.85] tracking-tight font-extralight whitespace-nowrap">
          <span className="block">Melona Dent</span>
          <span className="block whitespace-normal text-center mt-[-0.1em]">Clinic</span>
        </Link>
      </div>
    </footer>
  );
}
