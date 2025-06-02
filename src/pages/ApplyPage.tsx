import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    loanAmount: 5000,
    duration: '6 months',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
  
  // Format loan amount with commas
  const formatCurrency = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Loan Application
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Fill out the form below to apply for a loan. We'll review your application and get back to you within 24 hours.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="card p-8 md:p-12">
                <div className="space-y-10">
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
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field w-full"
                      placeholder="+1 (555) 123-4567"
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
                  
                  <div>
                    <label htmlFor="loanAmount" className="block text-lg font-medium text-gray-700 mb-2">
                      Loan Amount (${formatCurrency(formData.loanAmount)})
                    </label>
                    <input
                      type="range"
                      id="loanAmount"
                      name="loanAmount"
                      min="1000"
                      max="50000"
                      step="500"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-gray-500 mt-2">
                      <span>$1,000</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="duration" className="block text-lg font-medium text-gray-700 mb-2">
                      Loan Duration
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      className="input-field w-full"
                    >
                      <option value="1 month">1 month</option>
                      <option value="3 months">3 months</option>
                      <option value="6 months">6 months</option>
                      <option value="1 year">1 year</option>
                      <option value="2 years">2 years</option>
                      <option value="5 years">5 years</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-12">
                  <button type="submit" className="btn btn-primary btn-large w-full">
                    Submit Application
                  </button>
                </div>
              </form>
            ) : (
              <motion.div 
                className="card p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle size={64} className="text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Application Submitted!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Thank you for submitting your loan application. We've received your information and will review it shortly. You'll receive a confirmation email at {formData.email}.
                </p>
                <p className="text-lg font-medium text-gray-700 mb-6">
                  What happens next?
                </p>
                <ol className="text-left space-y-4 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <span>Our team will review your application within 24 hours.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <span>You'll receive an email with our decision and next steps.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <span>If approved, funds will be disbursed to your account quickly.</span>
                  </li>
                </ol>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Submit Another Application
                </button>
              </motion.div>
            )}
          </motion.div>
          
          {/* Summary Card */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="card bg-gradient-to-br from-primary-600 to-secondary-700 text-white p-8">
              <h3 className="text-2xl font-bold mb-6">Loan Summary</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-primary-100 mb-1">Amount Requested</p>
                  <p className="text-3xl font-bold">${formatCurrency(formData.loanAmount)}</p>
                </div>
                
                <div>
                  <p className="text-primary-100 mb-1">Duration</p>
                  <p className="text-xl font-medium">{formData.duration}</p>
                </div>
                
                <div>
                  <p className="text-primary-100 mb-1">Estimated Interest Rate</p>
                  <p className="text-xl font-medium">8.5% - 12.5%</p>
                  <p className="text-sm text-primary-200 mt-1">Final rate determined after review</p>
                </div>
                
                <div className="border-t border-primary-400 pt-6">
                  <p className="text-primary-100 mb-1">Estimated Monthly Payment</p>
                  <p className="text-3xl font-bold">
                    ${formData.duration === '1 month' ? formatCurrency(formData.loanAmount * 1.085) : formatCurrency(Math.round(formData.loanAmount / parseInt(formData.duration) * 1.085))}
                  </p>
                  <p className="text-sm text-primary-200 mt-1">Based on 8.5% APR</p>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent-300 mt-1 flex-shrink-0" size={20} />
                  <p className="text-primary-100">No application fees</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent-300 mt-1 flex-shrink-0" size={20} />
                  <p className="text-primary-100">No prepayment penalties</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-accent-300 mt-1 flex-shrink-0" size={20} />
                  <p className="text-primary-100">Quick disbursement</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 card p-6 bg-gray-50 border border-gray-100">
              <h4 className="text-lg font-semibold mb-4">Need Help?</h4>
              <p className="text-gray-600 mb-4">
                Our loan experts are available to assist you with your application.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <a href="tel:+15551234567" className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex-1 text-center">
                  Call Us
                </a>
                <a href="mailto:support@financeflo.com" className="btn btn-primary flex-1 text-center">
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;