import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Package, User, Phone, Clock, Zap, ArrowLeft, MessageCircle, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DeliveryData {
  pickupAddress: string;
  dropOffAddress: string;
  itemName: string;
  itemDescription: string;
  senderName: string;
  senderPhone: string;
  receiverName: string;
  receiverPhone: string;
  deliveryType: string;
  specialInstructions: string;
}

const DeliverySummary: React.FC = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get delivery data from navigation state
  const deliveryData: DeliveryData = location.state?.deliveryData || {
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
  };

  const getDeliveryTypeInfo = (type: string) => {
    switch (type) {
      case 'instant':
        return {
          name: 'Instant Delivery',
          price: 'NGN 6,500',
          duration: '1-2 hours',
          icon: Zap,
          color: 'text-[#00ff9d]'
        };
      case 'standard':
        return {
          name: 'Standard Delivery',
          price: 'NGN 3,000',
          duration: '24 hours',
          icon: Clock,
          color: 'text-[#22c55e]'
        };
      default:
        return {
          name: 'Not Selected',
          price: 'N/A',
          duration: 'N/A',
          icon: Clock,
          color: 'text-gray-500'
        };
    }
  };

  const deliveryTypeInfo = getDeliveryTypeInfo(deliveryData.deliveryType);
  const DeliveryIcon = deliveryTypeInfo.icon;

  const generateWhatsAppMessage = () => {
    const message = `🚚 *SendSafe Delivery Booking Request*

📋 *Order Summary:*
• *Item:* ${deliveryData.itemName}
• *Description:* ${deliveryData.itemDescription}
• *Delivery Type:* ${deliveryTypeInfo.name} (${deliveryTypeInfo.price})
• *Duration:* ${deliveryTypeInfo.duration}

📍 *Addresses:*
• *Pickup:* ${deliveryData.pickupAddress}
• *Drop-off:* ${deliveryData.dropOffAddress}

👤 *Contact Information:*
• *Sender:* ${deliveryData.senderName} (${deliveryData.senderPhone})
• *Receiver:* ${deliveryData.receiverName} (${deliveryData.receiverPhone})

📝 *Special Instructions:* ${deliveryData.specialInstructions || 'None'}

Please assist me with this delivery booking and provide real-time tracking updates. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+2349154607762';
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <section className={`min-h-screen pt-20 pb-20 flex flex-col justify-center items-center relative ${
      isDarkMode ? 'bg-gradient-to-b from-black to-[#0a1a0a]' : 'bg-gradient-to-b from-gray-50 to-gray-100'
    }`}>
      {/* Animated background elements */}
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
        isDarkMode ? 'bg-[#00ff9d]/20' : 'bg-[#00ff9d]/10'
      }`}></div>
      <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse-slower ${
        isDarkMode ? 'bg-[#22c55e]/20' : 'bg-[#22c55e]/10'
      }`}></div>
      
      <div className="container mx-auto px-4 z-10 w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-black" />
          </div>
          <h1 className={`text-3xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Delivery Summary
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-white/80' : 'text-gray-600'
          }`}>
            Review your delivery details before confirmation
          </p>
        </div>

        <div className={`backdrop-blur-sm rounded-2xl p-6 border ${
          isDarkMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-white/80 border-gray-200 shadow-lg'
        }`}>
          
          {/* Delivery Type */}
          <div className={`p-4 rounded-xl mb-6 ${
            isDarkMode ? 'bg-white/10' : 'bg-gray-50'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                <DeliveryIcon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {deliveryTypeInfo.name}
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-white/80' : 'text-gray-600'
                }`}>
                  Estimated delivery: {deliveryTypeInfo.duration}
                </p>
              </div>
              <div className="ml-auto">
                <div className={`text-xl font-bold ${deliveryTypeInfo.color}`}>
                  {deliveryTypeInfo.price}
                </div>
              </div>
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-4 mb-6">
            <h3 className={`text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Item Details
            </h3>
            
            <div className="grid gap-4">
              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-[#00ff9d]" />
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Item Name</span>
                </div>
                <p className={`${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}>{deliveryData.itemName}</p>
              </div>

              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-[#22c55e]" />
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Description</span>
                </div>
                <p className={`${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}>{deliveryData.itemDescription}</p>
              </div>

              {deliveryData.specialInstructions && (
                <div className={`p-4 rounded-xl ${
                  isDarkMode ? 'bg-white/10' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-5 h-5 text-[#16a34a]" />
                    <span className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Special Instructions</span>
                  </div>
                  <p className={`${
                    isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>{deliveryData.specialInstructions}</p>
                </div>
              )}
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-4 mb-6">
            <h3 className={`text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Addresses
            </h3>
            
            <div className="grid gap-4">
              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#00ff9d]" />
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Pickup Address</span>
                </div>
                <p className={`${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}>{deliveryData.pickupAddress}</p>
              </div>

              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#22c55e]" />
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Drop-off Address</span>
                </div>
                <p className={`${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}>{deliveryData.dropOffAddress}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-6">
            <h3 className={`text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Information
            </h3>
            
            <div className="grid gap-4">
              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-5 h-5 text-[#00ff9d]" />
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Sender</span>
                </div>
                <p className={`${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}>{deliveryData.senderName}</p>
                <p className={`text-sm ${
                  isDarkMode ? 'text-white/60' : 'text-gray-500'
                }`}>{deliveryData.senderPhone}</p>
              </div>

              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-5 h-5 text-[#22c55e]" />
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Receiver</span>
                </div>
                <p className={`${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}>{deliveryData.receiverName}</p>
                <p className={`text-sm ${
                  isDarkMode ? 'text-white/60' : 'text-gray-500'
                }`}>{deliveryData.receiverPhone}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Assistant Note */}
          <div className={`p-4 rounded-xl mb-6 border ${
            isDarkMode 
              ? 'bg-blue-500/10 border-blue-500/20' 
              : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className={`font-medium mb-2 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  Personal Assistant Support
                </h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-blue-200/80' : 'text-blue-600'
                }`}>
                  You will be redirected to our WhatsApp personal assistant who will assist you with the booking process and provide real-time tracking updates throughout your delivery journey.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="flex-1 py-3 rounded-xl font-medium border transition-all duration-300 flex items-center justify-center gap-2 ${
                isDarkMode 
                  ? 'border-white/30 text-white hover:border-[#22c55e] hover:text-[#22c55e]' 
                  : 'border-gray-300 text-gray-700 hover:border-[#22c55e] hover:text-[#22c55e]'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Edit
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="flex-1 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] py-3 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Continue to WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySummary;
