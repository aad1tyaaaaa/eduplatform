import { BookOpen, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with real-world experience in their fields."
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Join a vibrant community of learners and collaborate on projects together."
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn recognized certificates that boost your career prospects."
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access courses 24/7 and learn on your schedule, anywhere, anytime."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift hover-glow transition-all duration-500 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-glow">
                <feature.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
