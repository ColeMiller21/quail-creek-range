import type { Metadata } from "next";
import { Target, Users, Shield, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Training | Quail Creek Range",
  description:
    "Professional firearms training at Quail Creek Range. 1 on 1 personal instruction, basic rifle/pistol/shotgun courses, tactical training, and LTC preparation.",
};

export default function TrainingPage() {
  const trainingTypes = [
    {
      icon: Users,
      title: "1 on 1 Personal Instruction",
      description:
        "Personalized training tailored to your specific needs and skill level",
    },
    {
      icon: Target,
      title: "Basic Rifle/Pistol/Shotgun",
      description:
        "Foundational courses covering safety, handling, and marksmanship",
    },
    {
      icon: Shield,
      title: "Tactical Training Courses",
      description:
        "Advanced techniques for defensive shooting and tactical scenarios",
    },
    {
      icon: Award,
      title: "LTC Preparation Course",
      description:
        "Complete preparation for your License to Carry certification",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#4a5d3f]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
            Professional Training
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-balance">
            Expert firearms instruction tailored to your skill level and goals
          </p>
        </div>
      </section>

      {/* Training Offerings Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Training Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {trainingTypes.map((training, index) => {
                const Icon = training.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground text-balance">
                        {training.title}
                      </h3>
                      <p className="text-muted-foreground text-balance">
                        {training.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-[#4a5d3f] to-[#3a4d2f] text-white rounded-lg p-10 shadow-lg">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-serif font-bold">
                  Ready to Start Training?
                </h2>
                <p className="text-white/90 text-lg">
                  Contact our professional instructor to schedule your
                  personalized training session
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <span className="text-xl font-medium">Amy M.</span>
                  <a
                    href="tel:972-655-6161"
                    className="text-xl font-semibold hover:text-accent transition-colors"
                  >
                    (972) 655-6161
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed">
                All training sessions are customized to meet your individual
                needs and skill level. Whether you're a beginner or looking to
                advance your skills, our professional instruction will help you
                achieve your goals safely and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
