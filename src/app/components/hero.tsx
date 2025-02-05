const Hero: React.FC = () => {
    return (
      <section className="relative h-screen">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/nature-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold">Explore Nature&apos;s Beauty</h1>
            <p className="mt-4 text-lg">Find peace and inspiration in the wonders of nature.</p>
            <button className="mt-6 px-8 py-3 bg-sky-700 text-white rounded-lg hover:bg-sky-800">
              Discover More
            </button>
          </div>
        </div>
      </section>
    );
};
  
export default Hero;
