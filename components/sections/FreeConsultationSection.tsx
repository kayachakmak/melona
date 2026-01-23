"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

const photoLabels = [
  "Front smile (teeth together)",
  "Upper teeth",
  "Lower teeth",
  "Right side bite",
  "Left side bite",
];

interface FormData {
  name: string;
  city: string;
  email: string;
  whatsapp: string;
  preferredContact: "email" | "whatsapp" | "";
  services: string[];
  xray: File | null;
  photos: (File | null)[];
  notes: string;
}

export default function FreeConsultationSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    city: "",
    email: "",
    whatsapp: "",
    preferredContact: "",
    services: [],
    xray: null,
    photos: [null, null, null, null, null],
    notes: "",
  });
  const [citySearch, setCitySearch] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const xrayInputRef = useRef<HTMLInputElement>(null);
  const photoInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
    if (errors.services) setErrors((prev) => ({ ...prev, services: "" }));
  };

  const handleXrayUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, xray: file }));
    if (errors.photos) setErrors((prev) => ({ ...prev, photos: "" }));
  };

  const handlePhotoUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => {
      const newPhotos = [...prev.photos];
      newPhotos[index] = file;
      return { ...prev, photos: newPhotos };
    });
    if (errors.photos) setErrors((prev) => ({ ...prev, photos: "" }));
  };

  const removePhoto = (index: number) => {
    setFormData((prev) => {
      const newPhotos = [...prev.photos];
      newPhotos[index] = null;
      return { ...prev, photos: newPhotos };
    });
  };

  const removeXray = () => {
    setFormData((prev) => ({ ...prev, xray: null }));
    if (xrayInputRef.current) xrayInputRef.current.value = "";
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name is required (min 2 characters)";
    }
    if (!formData.city) {
      newErrors.city = "Please select your city";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.whatsapp) {
      newErrors.whatsapp = "WhatsApp number is required";
    }
    if (!formData.preferredContact) {
      newErrors.preferredContact = "Please select a contact method";
    }
    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    // Photo validation: required if no x-ray
    if (!formData.xray) {
      const hasAllPhotos = formData.photos.every((p) => p !== null);
      if (!hasAllPhotos) {
        newErrors.photos = "All 5 photos are required (or upload an X-ray)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="assesment" className="py-24 lg:py-32 bg-[#f5f0d5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="font-serif text-4xl font-light tracking-tight text-[#3D4A32] sm:text-5xl">
              Free Assessment and Consultation
            </h2>
            <p className="mt-6 text-lg text-[#3D4A32]/70">
              Not sure where to start? Send us your photos and receive a personalized treatment plan with pricing and estimated duration of stay—all within 1 hour. No obligation, no pressure—just honest advice to help you achieve your best smile.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="#3D4A32" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#3D4A32]">Comprehensive oral health assessment</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="#3D4A32" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#3D4A32]">Personalized treatment recommendations</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="#3D4A32" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#3D4A32]">Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="#3D4A32" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#3D4A32]">Accommodation and transportation</span>
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3D4A32]/10 mb-4">
                    <svg className="h-8 w-8" fill="none" stroke="#3D4A32" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#3D4A32]">Thank You!</h3>
                  <p className="mt-2 text-[#3D4A32]/70">
                    We&apos;ve received your request and will be in touch within 1 hour. 
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3D4A32] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-[#3D4A32]/20'} bg-white px-4 py-3 text-[#3D4A32] placeholder:text-[#3D4A32]/40 focus:border-[#3D4A32] focus:outline-none focus:ring-2 focus:ring-[#3D4A32]/20 transition-all`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  {/* City */}
                  <div className="relative">
                    <label htmlFor="city" className="block text-sm font-medium text-[#3D4A32] mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={citySearch || formData.city}
                      onChange={(e) => {
                        setCitySearch(e.target.value);
                        setShowCityDropdown(true);
                        if (formData.city) setFormData((prev) => ({ ...prev, city: "" }));
                      }}
                      onFocus={() => setShowCityDropdown(true)}
                      className={`w-full rounded-lg border ${errors.city ? 'border-red-500' : 'border-[#3D4A32]/20'} bg-white px-4 py-3 text-[#3D4A32] placeholder:text-[#3D4A32]/40 focus:border-[#3D4A32] focus:outline-none focus:ring-2 focus:ring-[#3D4A32]/20 transition-all`}
                      placeholder="Select your city"
                    />
                    {showCityDropdown && filteredCities.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-[#3D4A32]/20 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                        {filteredCities.map((city) => (
                          <button
                            key={city}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, city }));
                              setCitySearch("");
                              setShowCityDropdown(false);
                              if (errors.city) setErrors((prev) => ({ ...prev, city: "" }));
                            }}
                            className="w-full px-4 py-2 text-left text-[#3D4A32] hover:bg-[#3D4A32]/5 transition-colors"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3D4A32] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-[#3D4A32]/20'} bg-white px-4 py-3 text-[#3D4A32] placeholder:text-[#3D4A32]/40 focus:border-[#3D4A32] focus:outline-none focus:ring-2 focus:ring-[#3D4A32]/20 transition-all`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-[#3D4A32] mb-2">
                      WhatsApp Number *
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="GB"
                      value={formData.whatsapp}
                      onChange={(value) => {
                        setFormData((prev) => ({ ...prev, whatsapp: value || "" }));
                        if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: "" }));
                      }}
                      className={`phone-input w-full rounded-lg border ${errors.whatsapp ? 'border-red-500' : 'border-[#3D4A32]/20'} bg-white px-4 py-3 text-[#3D4A32] focus:border-[#3D4A32] focus:outline-none focus:ring-2 focus:ring-[#3D4A32]/20 transition-all`}
                    />
                    {errors.whatsapp && <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>}
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-medium text-[#3D4A32] mb-3">
                      Preferred Contact Method *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, preferredContact: e.target.value as "email" }));
                            if (errors.preferredContact) setErrors((prev) => ({ ...prev, preferredContact: "" }));
                          }}
                          className="w-4 h-4 text-[#3D4A32] border-[#3D4A32]/30 focus:ring-[#3D4A32]"
                        />
                        <span className="text-[#3D4A32]">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === "whatsapp"}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, preferredContact: e.target.value as "whatsapp" }));
                            if (errors.preferredContact) setErrors((prev) => ({ ...prev, preferredContact: "" }));
                          }}
                          className="w-4 h-4 text-[#3D4A32] border-[#3D4A32]/30 focus:ring-[#3D4A32]"
                        />
                        <span className="text-[#3D4A32]">WhatsApp</span>
                      </label>
                    </div>
                    {errors.preferredContact && <p className="mt-1 text-sm text-red-500">{errors.preferredContact}</p>}
                  </div>

                  {/* Services Interested In */}
                  <div>
                    <label className="block text-sm font-medium text-[#3D4A32] mb-3">
                      Services Interested In *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.flatMap((category) => category.items).map((item) => (
                        <label key={item.name} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(item.name)}
                            onChange={() => handleServiceToggle(item.name)}
                            className="w-4 h-4 rounded text-[#3D4A32] border-[#3D4A32]/30 focus:ring-[#3D4A32]"
                          />
                          <span className="text-sm text-[#3D4A32]">{item.name}</span>
                        </label>
                      ))}
                    </div>
                    {errors.services && <p className="mt-1 text-sm text-red-500">{errors.services}</p>}
                  </div>

                  {/* X-Ray Upload */}
                  <div>
                    <label className="block text-sm font-medium text-[#3D4A32] mb-2">
                      Upload X-Ray (Optional)
                    </label>
                    <p className="text-xs text-[#3D4A32]/60 mb-2">
                      If you upload an X-ray, photo upload becomes optional
                    </p>
                    {formData.xray ? (
                      <div className="flex items-center gap-3 p-3 bg-[#3D4A32]/5 rounded-lg">
                        <svg className="h-5 w-5 text-[#3D4A32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="flex-1 text-sm text-[#3D4A32] truncate">{formData.xray.name}</span>
                        <button
                          type="button"
                          onClick={removeXray}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => xrayInputRef.current?.click()}
                        className="w-full p-4 border-2 border-dashed border-[#3D4A32]/20 rounded-lg hover:border-[#3D4A32]/40 transition-colors"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <svg className="h-8 w-8 text-[#3D4A32]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="text-sm text-[#3D4A32]/60">Click to upload X-ray</span>
                        </div>
                      </button>
                    )}
                    <input
                      ref={xrayInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleXrayUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Photo Upload Section */}
                  <div>
                    <label className="block text-sm font-medium text-[#3D4A32] mb-2">
                      Photo Upload {formData.xray ? "(Optional)" : "*"}
                    </label>
                    <p className="text-xs text-[#3D4A32]/60 mb-3">
                      {formData.xray
                        ? "Optional: You can still add photos for a more accurate assessment"
                        : "Please upload all 5 photos for accurate assessment"}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {photoLabels.map((label, index) => (
                        <div key={index} className="relative">
                          {formData.photos[index] ? (
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-[#3D4A32]/5">
                              <img
                                src={URL.createObjectURL(formData.photos[index]!)}
                                alt={label}
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removePhoto(index)}
                                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                              >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center truncate">
                                {label}
                              </div>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => photoInputRefs.current[index]?.click()}
                              className="w-full aspect-square border-2 border-dashed border-[#3D4A32]/20 rounded-lg hover:border-[#3D4A32]/40 transition-colors flex flex-col items-center justify-center p-2"
                            >
                              <svg className="h-6 w-6 text-[#3D4A32]/40 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-xs text-[#3D4A32]/60 text-center leading-tight">{label}</span>
                            </button>
                          )}
                          <input
                            ref={(el) => { photoInputRefs.current[index] = el; }}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handlePhotoUpload(index, e)}
                            className="hidden"
                          />
                        </div>
                      ))}
                    </div>
                    {errors.photos && <p className="mt-2 text-sm text-red-500">{errors.photos}</p>}
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-[#3D4A32] mb-2">
                      Anything We Should Know? (Optional)
                    </label>
                    <p className="text-xs text-[#3D4A32]/60 mb-2">
                      e.g., existing dental work, specific concerns, or previous treatments
                    </p>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                      rows={4}
                      className="w-full rounded-lg border border-[#3D4A32]/20 bg-white px-4 py-3 text-[#3D4A32] placeholder:text-[#3D4A32]/40 focus:border-[#3D4A32] focus:outline-none focus:ring-2 focus:ring-[#3D4A32]/20 transition-all resize-none"
                      placeholder="I currently have implants that may need replacing, I've had previous dental work done abroad, I have a dental phobia, etc."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#3D4A32] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[#3D4A32]/90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Get Free Assessment"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom styles for phone input */}
      <style jsx global>{`
        .phone-input .PhoneInputInput {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          color: #3D4A32;
        }
        .phone-input .PhoneInputCountry {
          margin-right: 0.5rem;
        }
        .phone-input .PhoneInputCountrySelect {
          color: #3D4A32;
        }
      `}</style>
    </section>
  );
}
