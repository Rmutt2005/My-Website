import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Projects = () => {
  const projects = [
    {
      title: "IOT Project Auto Watering System",
      description:
        "This project is an IoT-based automatic plant watering system with Wi-Fi control. The system uses a soil moisture sensor to monitor soil conditions and automatically activates a water pump when the soil is dry. Users can also control and monitor the system remotely via Wi-Fi, making plant care more convenient and efficient.",
      image: "/Iot.png",
      tags: ["Arduino C++", "HTML", "CSS", "Javascript"],
      MoreUrl: "/public/IotProject.mp4",
      githubUrl:
        "https://github.com/Rmutt2005/arduino-project-auto-waterring-system",
    },
    {
      title: "Valentine Single Page Web",
      description:
        "This project is a Valentine-themed web application created to practice and improve React development skills. The website focuses on component-based design, state management, and interactive user interfaces. It demonstrates the use of React to build a responsive and engaging web experience while experimenting with UI logic and user interactions in a fun and creative theme.",
      image: "/valentine.JPG",
      tags: ["React", "TypeScript"],
      MoreUrl: "https://my-valentine-web.vercel.app/",
      githubUrl: "https://github.com/Rmutt2005/my-valentine-web",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Folder className="h-4 w-4" />
            My Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            with attention to detail, performance, and user experience.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.MoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
