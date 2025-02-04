const Testimonials: React.FC = () => {
    const testimonials = [
      {
        name: "Sarah Parker",
        feedback: "Exploring nature through this platform was a life-changing experience. Highly recommended!",
        image: "/images/img.png",
      },
      {
        name: "James Taylor",
        feedback: "A beautifully crafted website that brings nature closer to us. I feel so inspired!",
        image: "/images/6.png",
      },
      {
        name: "Emily Johnson",
        feedback: "The serene images and videos remind me to take time to connect with nature.",
        image: "/images/7.png",
      },
    ];
  
    return (
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-natureGreen">What People Say</h2>
          <p className="mt-4 text-gray-600">
            Hear from our happy visitors who experienced the beauty of nature through us.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-skyBlue">{testimonial.name}</h3>
                <p className="mt-2 text-gray-600 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  