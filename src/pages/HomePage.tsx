import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, CheckCircle, TrendingUp, Shield, Clock, CreditCard, PieChart, Users, Home, Car, GraduationCap, Briefcase, Heart, Building } from 'lucide-react';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialSlider from '../components/home/TestimonialSlider';
import ProcessStep from '../components/home/ProcessStep';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>

        {/* Content */}
        <div className="container-custom mx-auto z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Finance Reimagined.
            <br />
            <span className="text-accent-400">Loans. Instantly. Effortlessly.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the future of financial services with our innovative loan platform. Fast approvals, competitive rates, and a seamless experience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/apply" className="btn btn-accent btn-large w-full sm:w-auto">
              Apply Now
            </Link>
            <Link to="/emi-calculator" className="btn bg-white text-gray-800 hover:bg-gray-100 btn-large w-full sm:w-auto">
              Calculate EMI
            </Link>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="text-white" />
          </motion.div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-100 rounded-full z-0"></div>
              <img
                src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Financial freedom"
                className="rounded-3xl shadow-xl z-10 relative"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Mission</h2>
              <p className="text-xl text-gray-700 mb-8">
                At FinanceFlo, we're revolutionizing the way people access financial resources. We believe that getting a loan should be a transparent, stress-free experience that empowers rather than constrains.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Trusted by thousands of satisfied customers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Fast and streamlined application process</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Secure and confidential handling of your information</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Transparent terms with no hidden fees</p>
                </div>
              </div>

              <div className="mt-10">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Features for Your Financial Journey</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the unparalleled benefits and features that make FinanceFlo the preferred choice for all your loan needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-primary-600" />}
              title="Quick Approval"
              description="Get your loan approved in as little as 24 hours with our streamlined application process."
            />
            <FeatureCard
              icon={<TrendingUp className="w-10 h-10 text-primary-600" />}
              title="Competitive Rates"
              description="Enjoy some of the most competitive interest rates in the market, saving you money over time."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-primary-600" />}
              title="Secure Process"
              description="Your data is protected with bank-grade security protocols and encryption technology."
            />
            <FeatureCard
              icon={<CreditCard className="w-10 h-10 text-primary-600" />}
              title="Flexible Repayment"
              description="Choose from multiple repayment options that suit your financial situation and goals."
            />
            <FeatureCard
              icon={<PieChart className="w-10 h-10 text-primary-600" />}
              title="Financial Insights"
              description="Access detailed analytics and insights to better understand and manage your loan."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-primary-600" />}
              title="Dedicated Support"
              description="Our customer support team is available to assist you throughout your loan journey."
            />
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Loan Offerings</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our wide range of loan products tailored to meet your unique financial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Home className="w-10 h-10 text-primary-600" />}
              title="Home Loan"
              description="Realize your dream of homeownership with our flexible home loans offering competitive rates and long repayment terms."
            >
              <Link to="/apply?type=home" className="btn btn-primary mt-4 w-full text-center">
                Apply for Home Loan
              </Link>
            </FeatureCard>
            <FeatureCard
              icon={<Car className="w-10 h-10 text-primary-600" />}
              title="Car Loan"
              description="Drive your dream car with our affordable car loans, featuring quick approvals and customizable repayment plans."
            >
              <Link to="/apply?type=car" className="btn btn-primary mt-4 w-full text-center">
                Apply for Car Loan
              </Link>
            </FeatureCard>
            <FeatureCard
              icon={<GraduationCap className="w-10 h-10 text-primary-600" />}
              title="Education Loan"
              description="Invest in your future with our education loans, designed to support your academic journey with low interest rates."
            >
              <Link to="/apply?type=education" className="btn btn-primary mt-4 w-full text-center">
                Apply for Education Loan
              </Link>
            </FeatureCard>
            <FeatureCard
              icon={<Briefcase className="w-10 h-10 text-primary-600" />}
              title="Personal Loan"
              description="Meet your personal financial goals with our unsecured personal loans, offering flexibility and quick disbursal."
            >
              <Link to="/apply?type=personal" className="btn btn-primary mt-4 w-full text-center">
                Apply for Personal Loan
              </Link>
            </FeatureCard>
            <FeatureCard
              icon={<Heart className="w-10 h-10 text-primary-600" />}
              title="Medical Loan"
              description="Cover medical expenses with our medical loans, ensuring you get the care you need without financial stress."
            >
              <Link to="/apply?type=medical" className="btn btn-primary mt-4 w-full text-center">
                Apply for Medical Loan
              </Link>
            </FeatureCard>
            <FeatureCard
              icon={<Building className="w-10 h-10 text-primary-600" />}
              title="Business Loan"
              description="Grow your business with our tailored business loans, providing the capital you need to expand and succeed."
            >
              <Link to="/apply?type=business" className="btn btn-primary mt-4 w-full text-center">
                Apply for Business Loan
              </Link>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our simple three-step process gets you from application to disbursement quickly and effortlessly.
            </p>
          </div>

          <div className="space-y-32">
            <ProcessStep
              number="01"
              title="Apply Online"
              description="Fill out our simple application form with your details. The process takes less than 5 minutes to complete."
              imageUrl="https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              isReversed={false}
            />

            <ProcessStep
              number="02"
              title="Quick Review"
              description="Our system processes your application instantly. For most applicants, approval comes within hours, not days."
              imageUrl="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              isReversed={true}
            />

            <ProcessStep
              number="03"
              title="Get Funded"
              description="Once approved, the funds are transferred directly to your bank account. It's that simple."
              imageUrl="https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              isReversed={false}
            />
          </div>

          <div className="text-center mt-20">
            <Link to="/apply" className="btn btn-accent btn-large">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our satisfied customers who have transformed their financial situations with FinanceFlo.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default HomePage;