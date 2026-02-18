import Layout from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "TypeScript",
    "Tailwind CSS",
    "Git",
    "Arduino C++",
  ];
  const education = [
    {
      degree: "Computer Engineering",
      school: "Rajamangala University of Technology Thanyaburi",
      year: "2026",
    },
    {
      degree: "Science–Mathematics Program",
      school: "Banna Nayok Pittayakorn School",
      year: "2022",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <Avatar className="w-48 h-48 border-10 border-primary/20 rounded-full overflow-hidden">
                <AvatarImage src="avartar.jpg" />
                <AvatarFallback className="text-4xl">YN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-orange-500">Me</span>
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>Patthum thani, Thailand</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I am a fourth-year university student seeking practical
                experience and real-world knowledge in web development. I am
                eager to enhance my understanding of both front-end and back-end
                development through hands-on projects. I am highly motivated to
                learn and adapt, and I am open to working in flexible
                environments, including work-from-home or on-site settings, to
                gain professional experience and improve my skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">{edu.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
