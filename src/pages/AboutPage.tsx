import { motion } from 'framer-motion';
import { Check, Users, Shield, TrendingUp, Award, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>
        
        <div className="container-custom mx-auto z-10 text-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who We Are
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A team of financial experts dedicated to transforming the loan experience
          </motion.p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-xl text-gray-700 mb-6">
                Founded in 2020, FinanceFlo emerged from a simple observation: the traditional loan process was broken. Paperwork was excessive, waiting times were long, and transparency was lacking.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Our founders, with decades of experience in finance and technology, set out to create a lending platform that would revolutionize how people access financial resources.
              </p>
              <p className="text-xl text-gray-700">
                Today, FinanceFlo serves thousands of customers across the nation, providing fast, transparent, and customer-centric loan solutions that empower rather than constrain.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-100 rounded-full z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FinanceFlo team" 
                className="rounded-3xl shadow-xl z-10 relative w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're driven by a clear purpose and a bold vision for the future of financial services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="card p-10 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-primary-600">Our Mission</h3>
              <p className="text-xl text-gray-700 flex-grow">
                To democratize access to financial resources through technology, transparency, and customer-centered service, enabling individuals and businesses to achieve their goals without the traditional barriers of the lending industry.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Make loans accessible to everyone</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Eliminate unnecessary paperwork and delays</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Provide fair, transparent terms</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="card p-10 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-secondary-600">Our Vision</h3>
              <p className="text-xl text-gray-700 flex-grow">
                To create a world where financial services are truly inclusive, where technology and human expertise combine to provide personalized solutions that empower individuals and businesses to thrive.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="text-secondary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Become the leading digital loan provider</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-secondary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Expand our services to reach underserved communities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-secondary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Continuously innovate and improve the loan experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer First</h3>
              <p className="text-gray-700">
                Every decision we make starts with our customers. We're committed to understanding their needs and exceeding their expectations.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-700">
                We operate with the highest ethical standards. Transparency, honesty, and fairness are non-negotiable in all our interactions.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-700">
                We continuously push the boundaries of what's possible in financial services, leveraging technology to create better experiences.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, from the quality of our technology to the level of our customer service.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Efficiency</h3>
              <p className="text-gray-700">
                We value your time and work diligently to make the loan process as quick and streamlined as possible without compromising quality.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-primary-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inclusivity</h3>
              <p className="text-gray-700">
                We believe financial services should be accessible to all. We're committed to creating products that serve diverse needs and backgrounds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From a small startup to a leading fintech company, here's how we've grown.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24 relative">
              <TimelineItem 
                year="2020"
                title="Foundation"
                description="FinanceFlo was founded with a mission to revolutionize the loan industry through technology and customer-centric approaches."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2021"
                title="First 1,000 Customers"
                description="We reached our first milestone of 1,000 satisfied customers and expanded our team to meet growing demand."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2022"
                title="Product Expansion"
                description="Introduced new loan products and enhanced our platform with advanced features like instant approvals and personalized rates."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2023"
                title="National Recognition"
                description="Received industry awards for innovation and customer satisfaction, establishing FinanceFlo as a leading fintech company."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2024"
                title="Going Global"
                description="Expanded our services internationally and launched new financial education initiatives to empower customers worldwide."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2025"
                title="The Future"
                description="Continuing to innovate and expand, with a focus on creating more inclusive financial products and leveraging cutting-edge technology."
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Financial Revolution</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Experience the difference of a loan provider that puts you first. Apply today and take the first step toward your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/apply" className="btn bg-white text-primary-700 hover:bg-gray-100 btn-large">
              Apply Now
            </a>
            <a href="/contact" className="btn border-2 border-white text-white hover:bg-white/10 btn-large">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Timeline Item Component
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}

const TimelineItem = ({ year, title, description, isLeft }: TimelineItemProps) => {
  return (
    <motion.div 
      className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''}`}
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-1/2"></div>
      
      <div className="z-10 flex items-center justify-center">
        <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
          {year}
        </div>
      </div>
      
      <div className="w-1/2 p-6">
        <div className="card p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;