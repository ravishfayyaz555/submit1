import Image from "next/image";

const About: React.FC = () => {
    return (
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-natureGreen">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to Nature Beauty, a platform dedicated to celebrating the incredible beauty of nature. Our mission is to inspire and help you reconnect with the world around you.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <Image
                src="/images/nature.jpg"
                alt="Nature"
                width={500}  // Adjust width as needed
                height={300} // Adjust height as needed
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center text-center items-center md:items-start">
              <h3 className="text-2xl font-semibold text-natureGreen">
                Our Mission
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                At Nature Beauty, we aim to bring the serene beauty of nature to your fingertips. From vibrant forests to tranquil lakes, we believe in the therapeutic power of the natural world and strive to share it with the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;
