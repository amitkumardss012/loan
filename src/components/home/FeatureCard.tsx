import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div 
      className="card card-hover p-10 h-full flex flex-col"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 rounded-2xl bg-primary-50 w-fit mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 text-lg flex-grow">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;