import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Bowie",
    role: "Software Developer",
    image: "bowie.jpg",
    content: "The courses here completely transformed my career. I went from a complete beginner to landing my dream job as a software developer.",
    rating: 5
  },
  {
    name: "Jagdish singh",
    role: "UX Designer",
    image: "image.jpg",
    content: "Amazing instructors and practical projects. I learned more in 3 months than I did in years of self-study.",
    rating: 5
  },
  {
    name: "Pink Floyd",
    role: "Data Scientist",
    image: "pinkfloyd.jpg",
    content: "The quality of education here is unmatched. The community support and mentorship made all the difference.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-16 left-16 w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-16 right-16 w-52 h-52 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our successful graduates
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover-lift group border border-border/50 animate-slide-up relative overflow-hidden"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-primary" />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-primary text-primary group-hover:scale-110 transition-transform" 
                    style={{transitionDelay: `${i * 0.1}s`}}
                  />
                ))}
              </div>
              
              <p className="text-card-foreground mb-8 leading-relaxed group-hover:text-foreground transition-colors relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-2 border-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
