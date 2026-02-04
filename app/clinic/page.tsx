import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import PhotoGallery from "@/components/ui/PhotoGallery";

export const metadata: Metadata = {
  title: "Our Practice | Melona Dent Clinic",
  description:
    "Take a virtual tour of Melona Dent Clinic. See our modern facilities, comfortable treatment rooms, and welcoming environment.",
};


const galleryImages = [
  '/images/practice/dikeysecilmis.jpg',
  '/images/practice/klinik2arka.jpg',
  '/images/practice/klinik2on.jpg',
  '/images/practice/yatayxray.jpg',
  '/images/practice/team.jpg',
  '/images/practice/yataytedavi.jpg',
  '/images/practice/yatayklinik1.jpg',
];

export default function PracticePage() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF9F6]">
        {/* Hero Section — text + 2 images */}
        <section className="pt-2 pb-4 lg:pb-8">
          <div className="mx-auto max-w-9xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {/* Left column: text + landscape image */}
              <div className="flex flex-col gap-2">
                <div className="pb-6 lg:pb-30">
                  <h1 className="font-serif text-3xl font-extralight tracking-tight text-[#3D4A32] sm:text-4xl lg:text-5xl">
                    Our Practice
                  </h1>
                  <p className="mt-5 max-w-lg text-base text-[#3D4A32]/70 leading-relaxed lg:text-lg">
                    Welcome to Melona Dent Clinic. Our modern, purpose-built
                    facility is designed with your comfort in mind. From our
                    welcoming reception area to our state-of-the-art treatment
                    rooms, every detail has been carefully considered to provide
                    you with the best possible dental experience.
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src='/images/practice/yatayicerisi.jpg'
                    alt="Melona Dent Clinic interior"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right column: tall portrait image */}
              <div className="relative aspect-[3/4] lg:aspect-auto overflow-hidden">
                <Image
                  src='/images/practice/dikmelek.jpg'
                  alt="Melona Dent Clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-9xl px-4 sm:px-6">
            <PhotoGallery images={galleryImages} />
          </div>
        </section>
      </main>
    </>
  );
}
