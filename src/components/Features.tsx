import React, { useRef, useEffect } from 'react';
import { Lock, UserCheck, Zap, DollarSign, Package, MapPin, Truck, Globe, Gift, Heart, Users, Star } from 'lucide-react';
import { useAnimation } from '../context/AnimationContext';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const { animate } = useAnimation();
  const featuresRef = useRef(null);
  
  useEffect(() => {
    if (featuresRef.current && animate) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            featuresRef.current.classList.add('animate-fade-in');
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(featuresRef.current);
      return () => observer.disconnect();
    }
  }, [animate]);

  const features = [
    {
      icon: <Lock className="w-10 h-10 text-[#00ff9d]" />,
      title: "Privacy Protection",
      description: "Keep your address private and secure. No need to share your location with strangers."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-[#22c55e]" />,
      title: "Username Delivery",
      description: "Send packages to usernames instead of physical addresses. Simple and secure."
    },
    {
      icon: <Gift className="w-10 h-10 text-[#16a34a]" />,
      title: "Digital Gifts",
      description: "Send love and appreciation with digital gifts. Make every delivery special."
    },
    {
      icon: <Users className="w-10 h-10 text-[#00ff9d]" />,
      title: "Community Hub",
      description: "Connect with others, share moments, and spread joy through our vibrant community."
    },
    {
      icon: <Heart className="w-10 h-10 text-[#22c55e]" />,
      title: "Express Care",
      description: "Show you care with personalized digital messages and virtual gifts."
    },
    {
      icon: <Star className="w-10 h-10 text-[#16a34a]" />,
      title: "Special Moments",
      description: "Create memorable experiences with custom digital celebrations."
    },
    {
      icon: <Truck className="w-10 h-10 text-[#00ff9d]" />,
      title: "Bulk Interstate Delivery",
      description: "Efficient bulk delivery services across state lines with competitive pricing."
    },
    {
      icon: <Globe className="w-10 h-10 text-[#22c55e]" />,
      title: "International Shipping",
      description: "Send packages worldwide with our global network and customs expertise."
    },
    {
      icon: <Package className="w-10 h-10 text-[#16a34a]" />,
      title: "Same Day Delivery",
      description: "Express same-day delivery service for urgent packages and time-sensitive items."
    },
    {
      icon: <MapPin className="w-10 h-10 text-[#00ff9d]" />,
      title: "Truck Booking",
      description: "Book dedicated trucks for large shipments and specialized cargo requirements."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#22c55e]" />,
      title: "Vendor Fulfillment",
      description: "Streamlined vendor management and fulfillment services for businesses."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#16a34a]" />,
      title: "Import & Export",
      description: "Complete import and export services with customs clearance and documentation."
    }
  ];

  return (
    <section 
      ref={featuresRef}
      id="features"
      className="py-20 relative opacity-0 transition-opacity duration-1000"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-[#22c55e]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-[#00ff9d]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            More Than Just Delivery
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] mx-auto"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
            SendSafe transforms how you connect and share with others. From secure deliveries to digital gifts, we're building a community that celebrates every moment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;