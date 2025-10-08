import React, { useState } from 'react';
import { MapPin, Package, User, Phone, Clock, Zap, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    pickupAddress: '',
    dropOffAddress: '',
    itemName: '',
    senderName: '',
    senderPhone: '',
    receiverName: '',
    receiverPhone: '',
    deliveryType: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDeliveryTypeSelect = (type: string) => {
    setFormData(prev => ({
      ...prev,
      deliveryType: type
    }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      // Validate step 1 fields
      const requiredFields = ['pickupAddress', 'dropOffAddress', 'itemName', 'senderName', 'senderPhone', 'receiverName', 'receiverPhone'];
      const isValid = requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '');
      
      if (isValid) {
        setCurrentStep(2);
      } else {
        alert('Please fill in all required fields');
      }
    }
  };

  const handleSubmit = () => {
    if (formData.deliveryType) {
      // Here you would typically send the data to your backend
      console.log('Delivery booking submitted:', formData);
      alert('Delivery booking submitted successfully!');
      // Reset form
      setFormData({
        pickupAddress: '',
        dropOffAddress: '',
        itemName: '',
        senderName: '',
        senderPhone: '',
        receiverName: '',
        receiverPhone: '',
        deliveryType: ''
      });
      setCurrentStep(1);
    } else {
      alert('Please select a delivery type');
    }
  };

  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center items-center relative">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff9d]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#22c55e]/20 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Book Your 
            <span className="block bg-gradient-to-r from-[#00ff9d] via-[#22c55e] to-[#16a34a] text-transparent bg-clip-text">
              Delivery
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Fast, reliable, and secure delivery services across Nigeria
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            {/* Progress indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? 'bg-[#00ff9d] text-black' : 'bg-white/20 text-white/60'
                }`}>
                  1
                </div>
                <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-[#00ff9d]' : 'bg-white/20'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-[#00ff9d] text-black' : 'bg-white/20 text-white/60'
                }`}>
                  2
                </div>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">Delivery Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pickup Address */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <MapPin className="w-5 h-5 text-[#00ff9d]" />
                      Pickup Address *
                    </label>
                    <textarea
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleInputChange}
                      placeholder="Enter pickup address..."
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none resize-none"
                      rows={3}
                      required
                    />
                  </div>

                  {/* Drop Off Address */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <MapPin className="w-5 h-5 text-[#22c55e]" />
                      Drop Off Address *
                    </label>
                    <textarea
                      name="dropOffAddress"
                      value={formData.dropOffAddress}
                      onChange={handleInputChange}
                      placeholder="Enter drop off address..."
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none resize-none"
                      rows={3}
                      required
                    />
                  </div>

                  {/* Item Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <Package className="w-5 h-5 text-[#16a34a]" />
                      Item Name *
                    </label>
                    <input
                      type="text"
                      name="itemName"
                      value={formData.itemName}
                      onChange={handleInputChange}
                      placeholder="What are you sending?"
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none"
                      required
                    />
                  </div>

                  {/* Sender Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <User className="w-5 h-5 text-[#00ff9d]" />
                      Sender Name *
                    </label>
                    <input
                      type="text"
                      name="senderName"
                      value={formData.senderName}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none"
                      required
                    />
                  </div>

                  {/* Sender Phone */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <Phone className="w-5 h-5 text-[#22c55e]" />
                      Sender Phone *
                    </label>
                    <input
                      type="tel"
                      name="senderPhone"
                      value={formData.senderPhone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none"
                      required
                    />
                  </div>

                  {/* Receiver Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <User className="w-5 h-5 text-[#16a34a]" />
                      Receiver Name *
                    </label>
                    <input
                      type="text"
                      name="receiverName"
                      value={formData.receiverName}
                      onChange={handleInputChange}
                      placeholder="Receiver's name"
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none"
                      required
                    />
                  </div>

                  {/* Receiver Phone */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <Phone className="w-5 h-5 text-[#00ff9d]" />
                      Receiver Phone *
                    </label>
                    <input
                      type="tel"
                      name="receiverPhone"
                      value={formData.receiverPhone}
                      onChange={handleInputChange}
                      placeholder="Receiver's phone number"
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-[#00ff9d] to-[#22c55e] px-8 py-3 rounded-full text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300 flex items-center gap-2"
                  >
                    Next Step
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">Choose Delivery Type</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Instant Delivery */}
                  <div 
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.deliveryType === 'instant' 
                        ? 'border-[#00ff9d] bg-[#00ff9d]/10' 
                        : 'border-white/20 bg-white/5 hover:border-[#00ff9d]/50'
                    }`}
                    onClick={() => handleDeliveryTypeSelect('instant')}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
                      <p className="text-white/80 mb-4">Get your package delivered within 1-2 hours</p>
                      <div className="text-2xl font-bold text-[#00ff9d]">NGN 3,500</div>
                      <div className="text-sm text-white/60">per delivery</div>
                    </div>
                  </div>

                  {/* Standard Delivery */}
                  <div 
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.deliveryType === 'standard' 
                        ? 'border-[#00ff9d] bg-[#00ff9d]/10' 
                        : 'border-white/20 bg-white/5 hover:border-[#00ff9d]/50'
                    }`}
                    onClick={() => handleDeliveryTypeSelect('standard')}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Standard Delivery</h3>
                      <p className="text-white/80 mb-4">Get your package delivered within 24 hours</p>
                      <div className="text-2xl font-bold text-[#22c55e]">NGN 2,800</div>
                      <div className="text-sm text-white/60">per delivery</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-6">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-8 py-3 rounded-full text-white font-medium border border-white/30 hover:border-[#22c55e] hover:text-[#22c55e] transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-[#00ff9d] to-[#22c55e] px-8 py-3 rounded-full text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300"
                  >
                    Book Delivery
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
