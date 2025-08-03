export const Stats = () => {
  const stats = [
    { number: "50,000+", label: "Active Students" },
    { number: "1,200+", label: "Online Courses" },
    { number: "150+", label: "Expert Instructors" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 relative overflow-hidden bg-beige">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white bg-opacity-70 rounded-xl shadow-md p-8 group hover:shadow-xl cursor-pointer animate-slide-up transition-shadow duration-500"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="relative">
                <div className="text-6xl lg:text-7xl font-extrabold mb-3 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500 rounded-xl"></div>
              </div>
              <div className="text-xl font-semibold opacity-90 group-hover:opacity-100 group-hover:text-indigo-700 transition-all duration-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
