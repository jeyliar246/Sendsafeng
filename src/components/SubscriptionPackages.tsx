import React from 'react';
import { Check, X } from 'lucide-react';

const SubscriptionPackages: React.FC = () => {
  const packages = [
    {
      name: 'STARTER',
      deliveries: '50 Deliveries/month',
      price: 'N 140,000/month',
      features: {
        included: ['Dedicated Rider', 'Fast Delivery', 'Priority Request', 'Turn over'],
        excluded: ['Product marketing', 'Social media ads', 'Email Ads', 'Whatsapp ads']
      },
      featured: false
    },
    {
      name: 'GROWTH',
      deliveries: '100 Deliveries/month',
      price: 'N 280,000/month',
      features: {
        included: ['Dedicated Rider', 'Fast Delivery', 'Priority Request', 'Turn over'],
        excluded: ['Product marketing', 'Social media ads', 'Email Ads', 'Whatsapp ads']
      },
      featured: true
    },
    {
      name: 'BUSINESS',
      deliveries: '300 Deliveries/month',
      price: 'N 840,000/month',
      features: {
        included: ['Dedicated Rider', 'Fast Delivery', 'Priority Request', 'Turn over'],
        excluded: ['Product marketing', 'Social media ads', 'Email Ads', 'Whatsapp ads']
      },
      featured: false
    },
    {
      name: 'ENTERPRISE',
      deliveries: '1000 Deliveries/month',
      price: 'N 2,600,000/month',
      features: {
        included: ['Dedicated Rider', 'Fast Delivery', 'Priority Request', 'Turn over', 'Product marketing', 'Social media ads', 'Email Ads', 'Whatsapp ads'],
        excluded: []
      },
      featured: false
    }
  ];

  return (
    <section className="min-h-screen pt-20 pb-20 bg-gradient-to-b from-black to-[#0a1a0a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
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
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                pkg.featured 
                  ? 'border-[#00ff9d] border-2 shadow-[0_0_20px_rgba(0,255,157,0.3)]' 
                  : 'border-white/20'
              }`}
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

              {/* CTA Button */}
              <div className="mt-6">
                <button className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-gradient-to-r from-[#00ff9d] to-[#22c55e] text-black hover:shadow-[0_0_15px_rgba(0,255,157,0.5)]'
                    : 'bg-white/10 text-white border border-white/20 hover:border-[#00ff9d]/50 hover:text-[#00ff9d]'
                }`}>
                  {pkg.featured ? 'Most Popular' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="text-white text-xl font-medium">SendSafe Africa</div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPackages;
