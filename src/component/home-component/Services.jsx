import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import serviceWeb from '../../assets/web_service.jpg';
import ecommerceWeb from '../../assets/ecom_web.jpg';
import responsiveWeb from '../../assets/responsive_web.jpg';
import customWeb from '../../assets/custom_web.jpg';
import student from '../../assets/08.jpg';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    img: customWeb,
    heading: 'Custom Web Development',
    icons: <FaArrowRight />,
    description:
      'We develop fully responsive, high-performance websites using React, Angular, Node.js, Django, and PHP.',
    moreInfo:
      'We build from scratch or enhance existing projects, focusing on performance, scalability, and modern UI/UX principles.',
  },
  {
    img: ecommerceWeb,
    heading: 'E-Commerce Development',
    icons: <FaArrowRight />,
    description:
      'We build custom e-commerce platforms or integrate with Shopify, WooCommerce, and Magento.',
    moreInfo:
      'Our solutions are optimized for conversions, seamless checkout, and responsive design for all devices.',
  },
  {
    img: responsiveWeb,
    heading: 'Responsive & Mobile-First Design',
    icons: <FaArrowRight />,
    description:
      'We ensure your website looks perfect across desktops, tablets, and smartphones.',
    moreInfo:
      'Mobile-first design principles, fast loading, and intuitive navigation to improve user engagement.',
  },
  {
    img: serviceWeb,
    heading: 'Ongoing Maintenance & Support',
    icons: <FaArrowRight />,
    description:
      'We provide performance optimization, security patches, feature updates, and bug fixes.',
    moreInfo:
      'Continuous monitoring and support to ensure your website runs smoothly and remains secure.',
  },
  {
    img: student,
    heading: 'We provide student project',
    icons: <FaArrowRight />,
    description:
      'Assistance with academic web projects, assignments, and mini-projects.',
    moreInfo:
      'Guidance in coding, project design, deployment, and tailored solutions for student success.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16">

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={service.img}
              alt={service.heading}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.heading}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>

              {/* Show More Button */}
              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 flex items-center text-blue-600 font-semibold hover:underline"
              >
                {expandedIndex === index ? 'Show Less' : 'Show More'}
                <motion.span
                  animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  {service.icons}
                </motion.span>
              </button>

              {/* Animated Extra Info */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden mt-2 text-gray-700 text-sm"
                  >
                    {service.moreInfo}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
