import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-accent/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/30 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center bg-primary/10 text-primary border border-primary/20 px-6 py-3 rounded-full text-sm font-medium hover-lift hover-glow group">
              <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin" />
              🎓 Welcome to EduPlatform
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Learn Without
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient block"> Limits</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              Discover thousands of courses from expert instructors. Build skills, advance your career, and unlock your potential with our comprehensive learning platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Link to="/get-started-free">
                <Button size="lg" className="group hover-lift bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground animate-gradient">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300 group-hover-slide" />
                </Button>
              </Link>
              <Button size="lg" className="group hover-lift bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground animate-gradient">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center group hover-lift cursor-pointer">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center group hover-lift cursor-pointer">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">1,200+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center group hover-lift cursor-pointer">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="relative z-10 bg-card rounded-3xl shadow-2xl p-8 hover-lift group animate-pulse-glow">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Student learning"
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-accent text-primary-foreground p-4 rounded-2xl shadow-lg animate-float">
                <div className="text-sm font-semibold">LIVE</div>
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 bg-gradient-to-r from-accent to-primary text-primary-foreground p-6 rounded-2xl shadow-lg animate-float z-20" style={{animationDelay: '2s'}}>
              <div className="text-sm font-medium">Next Class</div>
              <div className="text-xs opacity-90">React Fundamentals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// </create_file>
