import React, { useState } from 'react';
import { Check, X, ArrowRight, CreditCard, Calendar, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SubscriptionSelection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate monthly prices based on NGN 3,000 per delivery
  const packages = [
    {
      name: 'STARTER',
      deliveries: '50 Deliveries/month',
      price: 'N 150,000/month', // 50 * 3,000
      features: {
        included: ['Dedicated Rider', 'Fast Delivery', 'Priority Request', 'Turn over'],
        excluded: ['Product marketing', 'Social media ads', 'Email Ads', 'Whatsapp ads']
      },
      featured: false
    },
    {
      name: 'GROWTH',
      deliveries: '100 Deliveries/month',
      price: 'N 300,000/month', // 100 * 3,000
      features: {
        included: ['Dedicated Rider', 'Fast Delivery', 'Priority Request', 'Turn over'],
        excluded: ['Product marketing', 'Social media ads', 'Email Ads', 'Whatsapp ads']
      },
      featured: true
    },
    {
      name: 'BUSINESS',
      deliveries: '300 Deliveries/month',
      price: 'N 900,000/month', // 300 * 3,000
      features: {
        included: ['Dedicated Rider', 'Fast Delivery', 'Priority Request', 'Turn over'],
        excluded: ['Product marketing', 'Social media ads', 'Email Ads', 'Whatsapp ads']
      },
      featured: false
    },
    {
      name: 'ENTERPRISE',
      deliveries: '1000 Deliveries/month',
      price: 'N 3,000,000/month', // 1000 * 3,000
      features: {
        included: ['Dedicated Rider', 'Fast Delivery', 'Priority Request', 'Turn over', 'Product marketing', 'Social media ads', 'Email Ads', 'Whatsapp ads'],
        excluded: []
      },
      featured: false
    }
  ];

  const selectedPackage = packages.find(pkg => pkg.name === selectedPlan);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleNext = () => {
    if (selectedPlan) {
      setCurrentStep(2);
    } else {
      alert('Please select a subscription plan');
    }
  };

  const handlePayment = () => {
    alert('Payment processing would be implemented here');
    // Reset selection
    setSelectedPlan('');
    setCurrentStep(1);
  };

  return (
    <section className="min-h-screen pt-20 pb-20 bg-gradient-to-b from-black to-[#0a1a0a]">
      <div className="container mx-auto px-4">
        {currentStep === 1 && (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                SAME-CITY DELIVERY SUBSCRIPTION PLAN
              </h1>
              <div className="text-xl md:text-2xl text-white mb-2">
                AT <span className="line-through text-white/60">NGN3500</span>{' '}
                <span className="text-[#00ff9d] font-bold">NGN2800</span> PER DELIVERY
              </div>
            </div>

            {/* Packages Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
                    pkg.featured 
                      ? 'border-[#00ff9d] border-2 shadow-[0_0_20px_rgba(0,255,157,0.3)]' 
                      : 'border-white/20'
                  } ${
                    selectedPlan === pkg.name ? 'ring-2 ring-[#00ff9d] ring-opacity-50' : ''
                  }`}
                  onClick={() => handlePlanSelect(pkg.name)}
                >
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <div className="bg-[#00ff9d] text-black px-4 py-2 rounded-lg font-bold text-lg mb-4">
                      {pkg.name}
                    </div>
                    <div className="text-white text-sm mb-2">{pkg.deliveries}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {/* Included Features */}
                    {pkg.features.included.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#00ff9d] flex-shrink-0" />
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Excluded Features */}
                    {pkg.features.excluded.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-white/60 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    <div className="text-white text-sm mb-1">Monthly Price</div>
                    <div className="text-2xl font-bold text-white">
                      <span className="text-4xl">N</span> {pkg.price.split('N ')[1]}
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedPlan === pkg.name && (
                    <div className="mt-4 text-center">
                      <div className="inline-flex items-center gap-2 bg-[#00ff9d] text-black px-4 py-2 rounded-lg font-medium">
                        <Check className="w-4 h-4" />
                        Selected
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Continue Button */}
            <div className="text-center mt-12">
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-[#00ff9d] to-[#22c55e] px-8 py-3 rounded-full text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Continue to Payment
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-16">
              <div className="text-white text-xl font-medium">SendSafe Africa</div>
            </div>
          </>
        )}

        {currentStep === 2 && selectedPackage && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-center mb-8 text-white">Complete Your Subscription</h2>
              
              {/* Selected Plan Summary */}
              <div className="bg-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedPackage.name} Plan</h3>
                    <p className="text-white/80">{selectedPackage.deliveries}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#00ff9d]">
                      <span className="text-3xl">N</span> {selectedPackage.price.split('N ')[1]}
                    </div>
                    <div className="text-sm text-white/60">per month</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-white">Included Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedPackage.features.included.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#00ff9d]" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Choose Payment Method</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl cursor-pointer hover:bg-white/20 transition-all duration-300">
                    <CreditCard className="w-6 h-6 text-[#00ff9d]" />
                    <div className="flex-1">
                      <div className="font-medium text-white">Credit/Debit Card</div>
                      <div className="text-sm text-white/60">Pay with Visa, Mastercard, or Verve</div>
                    </div>
                    <div className="w-4 h-4 border-2 border-[#00ff9d] rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl cursor-pointer hover:bg-white/20 transition-all duration-300">
                    <Calendar className="w-6 h-6 text-[#22c55e]" />
                    <div className="flex-1">
                      <div className="font-medium text-white">Bank Transfer</div>
                      <div className="text-sm text-white/60">Direct bank transfer</div>
                    </div>
                    <div className="w-4 h-4 border-2 border-white/30 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl cursor-pointer hover:bg-white/20 transition-all duration-300">
                    <Users className="w-6 h-6 text-[#16a34a]" />
                    <div className="flex-1">
                      <div className="font-medium text-white">Corporate Account</div>
                      <div className="text-sm text-white/60">For business accounts</div>
                    </div>
                    <div className="w-4 h-4 border-2 border-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 py-3 rounded-xl text-white font-medium border border-white/30 hover:border-[#22c55e] hover:text-[#22c55e] transition-all duration-300"
                >
                  Back to Plans
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-1 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] py-3 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300"
                >
                  Complete Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscriptionSelection;
