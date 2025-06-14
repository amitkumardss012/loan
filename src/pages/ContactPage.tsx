import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { axiosInstance } from '../api/apiClient';
import { EnquiryType, EnquiryValidator } from '../validator/enquiry';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const { register, handleSubmit, formState: { errors }, reset } = useForm<EnquiryType>({
    resolver: zodResolver(EnquiryValidator) as Resolver<EnquiryType>,
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: EnquiryType) => {
    setIsLoading(true); // Start loading
    try {
      const response = await axiosInstance.post('/enquiry/create', data);
      toast.success(response.data.message || 'Enquiry created successfully');
      setIsSubmitted(true);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to submit enquiry');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>
        
        <div className="container-custom mx-auto z-10 text-center px-4 sm:px-6">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We'd love to hear from you. Whether you have a question or need support, our team is here to help.
          </motion.p>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container-custom mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div 
              className="card p-6 sm:p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-100 p-3 sm:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="text-primary-600 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Phone Support</h3>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Our support team is available Monday through Friday, 9am to 6pm ET.
              </p>
              <a href="tel:+15551234567" className="text-lg sm:text-xl font-semibold text-primary-600">
                +1 (555) 123-4567
              </a>
            </motion.div>
            
            <motion.div 
              className="card p-6 sm:p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="bg-primary-100 p-3 sm:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Mail className="text-primary-600 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Email Support</h3>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:support@financeflo.com" className="text-lg sm:text-xl font-semibold text-primary-600">
                support@financeflo.com
              </a>
            </motion.div>
            
            <motion.div 
              className="card p-6 sm:p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-primary-100 p-3 sm:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="text-primary-600 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Office Location</h3>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Visit our headquarters in the heart of Silicon Valley.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-primary-600">
                123 Finance Street, CA 94025
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-12 sm:py-20">
        <div className="container-custom mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Send Us a Message</h2>
              <p className="text-lg sm:text-xl text-gray-700">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>
            
            {!isSubmitted ? (
              <motion.form 
                onSubmit={handleSubmit(onSubmit)}
                className="card p-6 sm:p-8 md:p-12 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <div>
                    <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      {...register('name')}
                      className={`input-field w-full text-sm sm:text-base ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`input-field w-full text-sm sm:text-base ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className={`input-field w-full text-sm sm:text-base ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="1234567890"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      {...register('subject')}
                      className={`input-field w-full text-sm sm:text-base ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-8 sm:mb-10">
                  <label htmlFor="message" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    className={`input-field w-full resize-none text-sm sm:text-base ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large w-full sm:w-auto px-8 sm:px-12 flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                className="card p-8 sm:p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="bg-green-100 p-3 sm:p-4 rounded-full">
                    <Check size={48} className="sm:w-[64px] sm:h-[64px] text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Message Sent!</h2>
                <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
                  Thank you for reaching out! We've received your message and will get back to you soon.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    reset();
                  }} 
                  className="btn btn-primary text-sm sm:text-base"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[400px] sm:h-[500px] relative overflow-hidden">
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
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container-custom mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="card p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">How quickly can I get approved for a loan?</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Most applications are reviewed within 24 hours. Once approved, funds can be disbursed as quickly as the same day, depending on your bank.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">What documents do I need to apply?</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                You'll need a valid ID, proof of income (like pay stubs or tax returns), and bank account information. Additional documents may be requested based on your specific situation.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Are there any prepayment penalties?</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                No, FinanceFlo never charges prepayment penalties. You're free to pay off your loan early without any additional fees.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">What credit score do I need to qualify?</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                We consider multiple factors beyond just credit scores. While a good score helps, we also look at income, employment history, and other financial indicators for a holistic evaluation.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Don't see your question here? Contact our support team for assistance.
            </p>
            <a href="mailto:support@financeflo.com" className="btn btn-primary text-sm sm:text-base">
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;