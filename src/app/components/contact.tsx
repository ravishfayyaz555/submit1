const Contact: React.FC = () => {
    return (
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-natureGreen">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Reach out to us for any inquiries or feedback.
          </p>
  
          <form
            action="#"
            method="POST"
            className="mt-8 space-y-6 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-700 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue"
              />
            </div>
  
            <div>
              <label
                htmlFor="email"
                className="block text-lg text-gray-700 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue"
              />
            </div>
  
            <div>
              <label
                htmlFor="message"
                className="block text-lg text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full py-3 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  