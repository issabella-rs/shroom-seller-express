
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-doorstep-yellow/50">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-doorstep-green">Get In Touch</span>
          <h2 className="heading-lg mt-4 text-doorstep-darkgreen">Questions? Contact Us</h2>
          <p className="body-md text-muted-foreground mt-4">
            Our team is ready to answer any questions you might have about our products, shipping, or ordering process.
          </p>
          
          <div className="mt-8 p-8 bg-white/80 backdrop-blur-md border border-doorstep-green/20 rounded-xl shadow-lg">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen"
              ></textarea>
              <button className="w-full px-4 py-3 bg-doorstep-green text-white rounded-md hover:bg-doorstep-darkgreen transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
