import { GraduationCap, Award, Users, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const courses = [
  {
    icon: Award,
    title: "License to Carry (LTC)",
    instructor: "Certified Instructors",
    duration: "4-6 hours",
    description: "Texas LTC certification course including classroom instruction and range qualification.",
  },
  {
    icon: GraduationCap,
    title: "NRA Basic Pistol",
    instructor: "NRA Certified",
    duration: "8 hours",
    description: "Comprehensive introduction to pistol shooting, safety, and marksmanship fundamentals.",
  },
  {
    icon: Users,
    title: "Holster Draw Class",
    instructor: "Amy - Lead Instructor",
    duration: "2 hours",
    description: "Learn safe and efficient drawing techniques from concealment. Prerequisites apply.",
  },
  {
    icon: BookOpen,
    title: "Pistol Cleaning & Maintenance",
    instructor: "Expert Gunsmiths",
    duration: "2 hours",
    description: "Hands-on instruction for proper firearm cleaning, maintenance, and troubleshooting.",
  },
]

const specialties = [
  "Low Light Shooting Conditions",
  "Shooting While Moving",
  "NRA Concealed Carry Course",
  "Private Instruction Available",
]

export default function TrainingSection() {
  return (
    <section id="training" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">Professional Training</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert instruction for beginners to advanced shooters. All courses emphasize safety and practical skills.
          </p>
        </div>

        {/* Featured Courses */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{course.title}</h3>
                  <div className="text-sm text-muted-foreground mb-3">
                    <div>{course.instructor}</div>
                    <div>{course.duration}</div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Specialties */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif font-semibold text-2xl text-foreground text-center mb-6">
            Additional Training Options
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor Highlight */}
        <div className="max-w-4xl mx-auto mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/30 relative">
              <Image
                src="/amy-instructor.png"
                alt="Amy - Lead Instructor at Quail Creek Range"
                width={192}
                height={192}
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif font-bold text-3xl text-foreground mb-3">Meet Amy - Lead Instructor</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NRA Certified Instructor with over 15 years of experience. Specializing in beginner instruction and
                women's shooting courses. Patient, knowledgeable, and dedicated to your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
