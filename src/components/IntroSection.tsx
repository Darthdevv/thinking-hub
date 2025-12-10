
import { CheckCircle } from "lucide-react";

export default function IntroSection() {
  const items = [
    {
      title: "Leadership & Personal Mastery",
      text: "We help leaders understand their natural gifts, clarify their vision, and develop the skills required for the work ahead.",
    },
    {
      title: "Organizational Effectiveness",
      text: "We teach practical frameworks to assess community needs, translate insights into meaningful offerings, and build healthy, resilient organizations that can deliver.",
    },
    {
      title: "Innovation & Collaboration",
      text: "We equip leaders with design tools that enable them to work creatively with clients, colleagues, and sector partners to imagine and build what's possible.",
    },
  ];

  return (
    <section className="relative w-full px-6 md:px-12 py-24 lg:py-32 overflow-hidden">
      {/* Background image with green overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-700/85" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-8">
            Introductory Sentence:
          </h2>

          <div className="space-y-8 text-white">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 text-white" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
            alt="person1"
            className="rounded-xl object-cover h-40 w-full md:h-56 lg:h-64"
          />
          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
            alt="person2"
            className="rounded-xl object-cover h-40 w-full md:h-56 lg:h-64"
          />
          <img
            src="https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg"
            alt="person3"
            className="rounded-xl object-cover h-40 w-full md:h-56 lg:h-64 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
