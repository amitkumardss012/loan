import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
}

const ProcessStep = ({ number, title, description, imageUrl, isReversed = false }: ProcessStepProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div 
        className={`order-2 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
        />
      </motion.div>
      
      <motion.div 
        className={`order-1 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-6 mb-6">
          <div className="bg-primary-600 text-white text-4xl font-bold h-20 w-20 rounded-full flex items-center justify-center">
            {number}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        </div>
        
        <p className="text-xl text-gray-300 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default ProcessStep;