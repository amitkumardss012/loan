import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Calendar, Percent } from 'lucide-react';

const EmiCalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(60); // in months

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [chartData, setChartData] = useState<Array<{ name: string, value: number }>>([]);

  // Calculate EMI using simple interest formula
  useEffect(() => {
    const p = loanAmount;
    const r = interestRate; // Annual interest rate
    const t = loanTerm; // Convert months to years for simple interest

    // Simple interest formula: Total Interest = P * R * T / 100
    const totalInterestValue = (p * r * t) / 100;
    const totalPaymentValue = p + totalInterestValue;
    const emiValue = totalPaymentValue / loanTerm; // Monthly EMI

    setEmi(isNaN(emiValue) ? 0 : emiValue);
    setTotalInterest(isNaN(totalInterestValue) ? 0 : totalInterestValue);
    setTotalPayment(isNaN(totalPaymentValue) ? 0 : totalPaymentValue);

    setChartData([
      { name: 'Principal', value: p },
      { name: 'Interest', value: isNaN(totalInterestValue) ? 0 : totalInterestValue }
    ]);
  }, [loanAmount, interestRate, loanTerm]);

  // Format currency in INR with full decimal precision
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2, // Ensure at least two decimal places
    }).format(value);
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
            EMI Calculator
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Plan your loan with our interactive EMI calculator. Adjust the parameters to see how they affect your monthly payments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Calculator Inputs */}
          <motion.div
            className="lg:col-span-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-8">Loan Parameters</h2>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="loanAmount" className="block text-lg font-medium text-gray-700">
                      Loan Amount
                    </label>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                      <span className="text-gray-500 mr-1">₹</span>
                      <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-24 bg-transparent focus:outline-none text-right"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    id="loanAmount"
                    min="10000"
                    max="10000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-gray-500 mt-1 text-sm">
                    <span>₹10,000</span>
                    <span>₹1,00,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="interestRate" className="block text-lg font-medium text-gray-700">
                      Interest Rate
                    </label>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                      <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-16 bg-transparent focus:outline-none text-right"
                        step="0.1"
                      />
                      <Percent size={16} className="text-gray-500 ml-1" />
                    </div>
                  </div>
                  <input
                    type="range"
                    id="interestRate"
                    min="1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-gray-500 mt-1 text-sm">
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="loanTerm" className="block text-lg font-medium text-gray-700">
                      Loan Term (Months)
                    </label>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                      <input
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-16 bg-transparent focus:outline-none text-right"
                        min="1"
                        max="360"
                      />
                      <Calendar size={16} className="text-gray-500 ml-1" />
                    </div>
                  </div>
                  <input
                    type="range"
                    id="loanTerm"
                    min="1"
                    max="360"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-gray-500 mt-1 text-sm">
                    <span>1 Month</span>
                    <span>360 Months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 card p-6">
              <h3 className="text-xl font-semibold mb-4">Need Assistance?</h3>
              <p className="text-gray-600 mb-4">
                Our financial advisors can help you understand your loan options and choose the best one for your needs.
              </p>
              <button className="btn btn-primary w-full">Schedule a Consultation</button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            className="lg:col-span-2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* EMI Result */}
            <div className="card bg-gradient-to-r from-primary-600 to-secondary-700 text-white p-8">
              <h3 className="text-xl font-semibold mb-6">Your Monthly Payment</h3>
              <div className="text-5xl md:text-6xl font-bold mb-4">{formatCurrency(emi)}</div>
              <p className="text-primary-200">Based on your loan parameters</p>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Total Principal</h3>
                <div className="text-3xl font-bold text-gray-800">{formatCurrency(loanAmount)}</div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Total Interest</h3>
                <div className="text-3xl font-bold text-gray-800">{formatCurrency(totalInterest)}</div>
              </div>

              <div className="card p-6 md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Total Amount Payable</h3>
                <div className="text-3xl font-bold text-gray-800">{formatCurrency(totalPayment)}</div>
                <p className="text-gray-600 mt-2">Principal + Interest</p>
              </div>
            </div>

            {/* Chart */}
            <div className="card p-6 mt-6">
              <h3 className="text-xl font-semibold mb-6">Principal vs. Interest</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} layout="vertical">
                    <XAxis type="number" tickFormatter={(value) => formatCurrency(value)} />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip
                      formatter={(value: number) => formatCurrency(value)}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                      {chartData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#2563eb' : '#7c3aed'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-8 mt-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-2"></div>
                  <span>Principal</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-secondary-600 rounded-full mr-2"></div>
                  <span>Interest</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="card p-8 mt-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to apply for your loan?</h3>
              <p className="mb-6">
                Now that you understand your potential monthly payments, take the next step toward financial freedom.
              </p>
              <div className="flex justify-center">
                <a href="/apply" className="btn bg-white text-accent-600 hover:bg-gray-100 btn-large">
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculatorPage;