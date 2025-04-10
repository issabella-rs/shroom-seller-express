
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-4 border rounded-md bg-doorstep-yellow/10 hover:bg-doorstep-yellow/20 transition-colors">
                <h3 className="font-medium text-doorstep-darkgreen mb-2">Payment Options</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center justify-between">
                    <span className="text-sm font-medium">PayPal:</span>
                    <span className="text-doorstep-green text-sm">DLKNEWZ@gmail.com</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm font-medium">Cash App:</span>
                    <span className="text-doorstep-green text-sm">$Muragg</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-md bg-doorstep-yellow/10 hover:bg-doorstep-yellow/20 transition-colors">
                <h3 className="font-medium text-doorstep-darkgreen mb-2">Social Media</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center justify-between">
                    <span className="text-sm font-medium">X/Twitter:</span>
                    <div className="flex flex-col gap-1">
                      <a href="https://x.com/bekindtypaway?s=11" target="_blank" rel="noopener noreferrer" className="text-doorstep-green text-sm underline hover:text-doorstep-darkgreen transition-colors">@bekindtypaway</a>
                      <a href="https://x.com/285rey?s=11" target="_blank" rel="noopener noreferrer" className="text-doorstep-green text-sm underline hover:text-doorstep-darkgreen transition-colors">@DoorSteppin</a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm font-medium">Telegram:</span>
                    <span className="text-doorstep-green text-sm">zhaintheplug</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen focus:ring-2 focus:ring-doorstep-green/50 focus:border-doorstep-green/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen focus:ring-2 focus:ring-doorstep-green/50 focus:border-doorstep-green/50 transition-all"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-doorstep-green/30 bg-white/80 text-doorstep-darkgreen focus:ring-2 focus:ring-doorstep-green/50 focus:border-doorstep-green/50 transition-all"
              ></textarea>
              <button className="w-full px-4 py-3 bg-doorstep-green text-white rounded-md hover:bg-doorstep-darkgreen transition-colors transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-doorstep-darkgreen focus:ring-offset-2">
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
