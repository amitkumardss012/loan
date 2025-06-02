import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your server
    // For demo purposes, we'll just set isSubmitted to true
    setIsSubmitted(true);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>
        
        <div className="container-custom mx-auto z-10 text-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We'd love to hear from you. Whether you have a question or need support, our team is here to help.
          </motion.p>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Phone className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Phone Support</h3>
              <p className="text-gray-700 mb-4">Our support team is available Monday through Friday, 9am to 6pm ET.</p>
              <a href="tel:+15551234567" className="text-xl font-semibold text-primary-600">+1 (555) 123-4567</a>
            </motion.div>
            
            <motion.div 
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Support</h3>
              <p className="text-gray-700 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
              <a href="mailto:support@financeflo.com" className="text-xl font-semibold text-primary-600">support@financeflo.com</a>
            </motion.div>
            
            <motion.div 
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Office Location</h3>
              <p className="text-gray-700 mb-4">Visit our headquarters in the heart of Silicon Valley.</p>
              <p className="text-xl font-semibold text-primary-600">123 Finance Street, CA 94025</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-700">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>
            
            {!isSubmitted ? (
              <motion.form 
                onSubmit={handleSubmit}
                className="card p-8 md:p-12 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="input-field w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field w-full"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field w-full"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-10">
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field w-full resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button type="submit" className="btn btn-primary btn-large w-full md:w-auto px-12">
                    Send Message
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                className="card p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <Check size={64} className="text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Message Sent!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Thank you for reaching out! We've received your message and will get back to you at {formData.email} as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[500px] relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50759.211850419126!2d-122.12464255325876!3d37.4040685038562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa4808590af4d%3A0x8f4d49f24e649074!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1634785466883!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="FinanceFlo Office Location"
        ></iframe>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">How quickly can I get approved for a loan?</h3>
              <p className="text-gray-700">
                Most applications are reviewed within 24 hours. Once approved, funds can be disbursed as quickly as the same day, depending on your bank.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">What documents do I need to apply?</h3>
              <p className="text-gray-700">
                You'll need a valid ID, proof of income (like pay stubs or tax returns), and bank account information. Additional documents may be requested based on your specific situation.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Are there any prepayment penalties?</h3>
              <p className="text-gray-700">
                No, FinanceFlo never charges prepayment penalties. You're free to pay off your loan early without any additional fees.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">What credit score do I need to qualify?</h3>
              <p className="text-gray-700">
                We consider multiple factors beyond just credit scores. While a good score helps, we also look at income, employment history, and other financial indicators for a holistic evaluation.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Don't see your question here? Contact our support team for assistance.
            </p>
            <a href="mailto:support@financeflo.com" className="btn btn-primary">
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;