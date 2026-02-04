import Image from "next/image";

const steps = [
  {
    number: 1,
    label: "Front Smile",
    image: "/images/teeth/Frontsmile.jpg",
    alt: "Front smile photo example",
    instructions:
      "Bite naturally. Smile directly at the camera. Try to show as many teeth as possible.",
  },
  {
    number: 2,
    label: "Right Side Bite",
    image: "/images/teeth/rightsidebite.jpg",
    alt: "Right side bite photo example",
    instructions:
      "Bite naturally. Make sure you have pulled the cheek and lips from the back teeth on the right side.",
  },
  {
    number: 3,
    label: "Left Side Bite",
    image: "/images/teeth/leftsidebite.jpg",
    alt: "Left side bite photo example",
    instructions:
      "Bite naturally. Make sure you have pulled the cheek and lips from the back teeth on the left side.",
  },
  {
    number: 4,
    label: "Upper Teeth",
    image: "/images/teeth/upper.jpg",
    alt: "Upper teeth photo example",
    instructions:
      "Chin down towards chest. Open your mouth wide and make sure all your teeth are visible.",
  },
  {
    number: 5,
    label: "Lower Teeth",
    image: "/images/teeth/lower.jpg",
    alt: "Lower teeth photo example",
    instructions:
      "Open wide and raise your chin as much as possible. Make sure all your teeth are visible.",
  },
];

export default function PhotoGuideSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#efebf0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-[#3D4A32] lg:text-5xl text-center mb-3 sm:mb-4">
          How to Take Your Photos
        </h2>
        <p className="text-center text-[#3D4A32]/70 max-w-xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          Follow these 5 simple steps so we can give you the most accurate
          assessment possible.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Photo */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                />
              </div>

              {/* Step number with lines */}
              <div className="flex items-center gap-2 mt-4 mb-1 text-[#3D4A32]">
                <span className="w-6 h-px bg-[#3D4A32]/40" />
                <span className="font-serif text-lg font-light">{step.number}</span>
                <span className="w-6 h-px bg-[#3D4A32]/40" />
              </div>

              {/* Label */}
              <span className="text-sm font-medium text-[#3D4A32] mb-2">
                {step.label}
              </span>

              {/* Instructions */}
              <p className="text-sm text-[#3D4A32]/70 leading-relaxed">
                {step.instructions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
