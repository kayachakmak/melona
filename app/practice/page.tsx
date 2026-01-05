import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PhotoGallery from "@/components/ui/PhotoGallery";

export const metadata: Metadata = {
  title: "Our Practice | Melona Dent Clinic",
  description:
    "Take a virtual tour of Melona Dent Clinic. See our modern facilities, comfortable treatment rooms, and welcoming environment.",
};

const galleryImages = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=800&auto=format&fit=crop",
];

export default function PracticePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Our Practice
              </h1>
              <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
                Welcome to Melona Dent Clinic. Our modern, purpose-built facility
                is designed with your comfort in mind. From our welcoming
                reception area to our state-of-the-art treatment rooms, every
                detail has been carefully considered to provide you with the
                best possible dental experience.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PhotoGallery images={galleryImages} />
          </div>
        </section>
      </main>
    </>
  );
}
