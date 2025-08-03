import { Button } from "@/components/ui/button";
import { Star, Clock, Users, TrendingUp, ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    rating: 4.9,
    students: 15420,
    duration: "40 hours",
    price: "$99",
    level: "Beginner"
  },
  {
    title: "Advanced React & Node.js",
    instructor: "Mike Chen",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
    rating: 4.8,
    students: 8930,
    duration: "32 hours",
    price: "$149",
    level: "Advanced"
  },
  {
    title: "UI/UX Design Masterclass",
    instructor: "Emily Davis",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=250&fit=crop",
    rating: 4.9,
    students: 12100,
    duration: "25 hours",
    price: "$79",
    level: "Intermediate"
  }
];

export const Courses = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Popular Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our most loved courses taught by industry experts
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-card rounded-3xl shadow-lg overflow-hidden hover-lift group border border-border/50 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover-glow">
                  {course.level}
                </div>
                <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover-lift">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                  by {course.instructor}
                </p>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {course.price}
                  </span>
                  <Link to="/get-started-free">
                  <Button className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground hover-lift">
                    Enroll Now
                    <div className="ml-2 w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Button
            variant="outline"
            size="lg"
            className="hover-lift border-4 border-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 px-10 font-semibold text-lg text-black bg-purple-400"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};
