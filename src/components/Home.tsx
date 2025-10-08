import React, { useState } from 'react';
import { MapPin, Package, User, Phone, Clock, Zap, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickupAddress: '',
    dropOffAddress: '',
    itemName: '',
    itemDescription: '',
    senderName: '',
    senderPhone: '',
    receiverName: '',
    receiverPhone: '',
    deliveryType: '',
    specialInstructions: ''
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

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.pickupAddress.trim() !== '' && formData.dropOffAddress.trim() !== '';
      case 2:
        return formData.itemName.trim() !== '' && formData.itemDescription.trim() !== '';
      case 3:
        return formData.senderName.trim() !== '' && formData.senderPhone.trim() !== '' && 
               formData.receiverName.trim() !== '' && formData.receiverPhone.trim() !== '';
      case 4:
        return formData.deliveryType !== '';
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    // Navigate to summary page with form data
    navigate('/delivery-summary', { 
      state: { 
        deliveryData: formData 
      } 
    });
  };

  const steps = [
    { number: 1, title: 'Addresses', icon: MapPin },
    { number: 2, title: 'Item Details', icon: Package },
    { number: 3, title: 'Contact Info', icon: User },
    { number: 4, title: 'Delivery Type', icon: Zap }
  ];

  return (
    <section className="min-h-screen pt-20 pb-20 flex flex-col justify-center items-center relative bg-gradient-to-b from-black to-[#0a1a0a]">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff9d]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#22c55e]/20 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="container mx-auto px-4 z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#00ff9d] via-[#22c55e] to-[#16a34a] text-transparent bg-clip-text">
              Book Your Delivery
            </span>
          </h1>
          <p className="text-lg text-white/80">
            Fast, reliable, and secure delivery services
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          {/* Progress indicator */}
          <div className="flex justify-between mb-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex flex-col items-center flex-1 relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 z-10 ${
                    isCompleted 
                      ? 'bg-[#00ff9d] text-black' 
                      : isActive 
                        ? 'bg-[#00ff9d] text-black' 
                        : 'bg-white/20 text-white/60'
                  }`}>
                    {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs font-medium ${
                    isActive 
                      ? 'text-[#00ff9d]' 
                      : 'text-white/60'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step 1: Addresses */}
          {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-center mb-6 text-white">Pickup & Drop-off Addresses</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <MapPin className="w-5 h-5 text-pink-500" />
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

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium">
                      <MapPin className="w-5 h-5 text-green-500" />
                      Drop-off Address *
                    </label>
                    <textarea
                      name="dropOffAddress"
                      value={formData.dropOffAddress}
                      onChange={handleInputChange}
                      placeholder="Enter drop-off address..."
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none resize-none"
                      rows={3}
                      required
                    />
                  </div>
                </div>

              <button
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-[#00ff9d] to-[#22c55e] py-3 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Next Step
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 2: Item Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-center mb-6">Item Details</h2>
              
              <div className="space-y-4">
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

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white font-medium">
                    <Package className="w-5 h-5 text-[#00ff9d]" />
                    Item Description *
                  </label>
                  <textarea
                    name="itemDescription"
                    value={formData.itemDescription}
                    onChange={handleInputChange}
                    placeholder="Describe the item..."
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none resize-none"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white font-medium">
                    <Package className="w-5 h-5 text-[#22c55e]" />
                    Special Instructions
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Any special handling instructions..."
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#00ff9d] focus:outline-none resize-none"
                    rows={2}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 rounded-xl text-white font-medium border border-white/30 hover:border-[#22c55e] hover:text-[#22c55e] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] py-3 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-center mb-6">Contact Information</h2>
              
              <div className="space-y-4">
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

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 rounded-xl text-white font-medium border border-white/30 hover:border-[#22c55e] hover:text-[#22c55e] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] py-3 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Delivery Type */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-center mb-6">Choose Delivery Type</h2>
              
              <div className="space-y-4">
                {/* Instant Delivery */}
                <div 
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.deliveryType === 'Instant Delivery' 
                      ? 'border-[#00ff9d] bg-[#00ff9d]/10' 
                      : 'border-white/20 bg-white/5 hover:border-[#00ff9d]/50'
                  }`}
                  onClick={() => handleDeliveryTypeSelect('Instant Delivery')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 text-white">Instant Delivery</h3>
                      <p className="text-sm mb-2 text-white/80">Get your package delivered within 1-2 hours</p>
                      <div className="text-xl font-bold text-[#00ff9d]">NGN 6,500</div>
                    </div>
                  </div>
                </div>

                {/* Standard Delivery */}
                <div 
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.deliveryType === 'Standard Delivery' 
                      ? 'border-[#00ff9d] bg-[#00ff9d]/10' 
                      : 'border-white/20 bg-white/5 hover:border-[#00ff9d]/50'
                  }`}
                  onClick={() => handleDeliveryTypeSelect('Standard Delivery')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 text-white">Standard Delivery</h3>
                      <p className="text-sm mb-2 text-white/80">Get your package delivered within 24 hours</p>
                      <div className="text-xl font-bold text-[#22c55e]">NGN 3,000</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 rounded-xl text-white font-medium border border-white/30 hover:border-[#22c55e] hover:text-[#22c55e] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] py-3 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300"
                >
                  Book Delivery
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;