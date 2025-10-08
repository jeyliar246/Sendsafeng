import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Package, User, Phone, Clock, Zap, ArrowLeft, MessageCircle, CheckCircle } from 'lucide-react';

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

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = '+2349154607762';
    
    // Create a comprehensive message with all delivery details
    const message = `🚚 SendSafe Delivery Booking Request

📋 Order Summary:
• Item: ${deliveryData.itemName}
• Description: ${deliveryData.itemDescription}
• Delivery Type: ${deliveryData.deliveryType} (${deliveryData.deliveryType === 'Instant Delivery' ? 'NGN 6,500' : 'NGN 3,500'})
• Duration: ${deliveryData.deliveryType === 'Instant Delivery' ? '1-2 hours' : '24 hours'}

📍 Addresses:
• Pickup: ${deliveryData.pickupAddress}
• Drop-off: ${deliveryData.dropOffAddress}

👤 Contact Information:
• Sender: ${deliveryData.senderName} (${deliveryData.senderPhone})
• Receiver: ${deliveryData.receiverName} (${deliveryData.receiverPhone})

📝 Special Instructions: ${deliveryData.specialInstructions || 'None'}

Please assist me with this delivery booking and provide real-time tracking updates. Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <section className="min-h-screen pt-20 pb-20 flex flex-col justify-center items-center relative bg-gradient-to-b from-black to-[#0a1a0a]">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff9d]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#22c55e]/20 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="container mx-auto px-4 z-10 w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-white">
            Delivery Summary
          </h1>
          <p className="text-lg text-white/80">
            Review your delivery details before confirmation
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          
          {/* Delivery Type */}
          <div className="p-4 rounded-xl mb-6 bg-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {deliveryData.deliveryType}
                </h3>
                <p className="text-sm text-white/80">
                  {deliveryData.deliveryType === 'Instant Delivery' ? '1-2 hours' : '24 hours'} • {deliveryData.deliveryType === 'Instant Delivery' ? 'NGN 6,500' : 'NGN 3,500'}
                </p>
              </div>
            </div>
          </div>

          {/* Item Details */}
          <div className="p-4 rounded-xl mb-6 bg-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Item Details
                </h3>
                <p className="text-sm text-white/80">
                  Package information
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-white/20 bg-white/5">
                <div className="text-sm text-white/60 mb-1">Item Name</div>
                <div className="font-medium text-white">{deliveryData.itemName}</div>
              </div>
              <div className="p-3 rounded-lg border border-white/20 bg-white/5">
                <div className="text-sm text-white/60 mb-1">Description</div>
                <div className="font-medium text-white">{deliveryData.itemDescription}</div>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="p-4 rounded-xl mb-6 bg-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Addresses
                </h3>
                <p className="text-sm text-white/80">
                  Pickup and delivery locations
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-white/20 bg-white/5">
                <div className="text-sm text-white/60 mb-1">Pickup Address</div>
                <div className="font-medium text-white">{deliveryData.pickupAddress}</div>
              </div>
              <div className="p-3 rounded-lg border border-white/20 bg-white/5">
                <div className="text-sm text-white/60 mb-1">Drop-off Address</div>
                <div className="font-medium text-white">{deliveryData.dropOffAddress}</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-4 rounded-xl mb-6 bg-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Contact Information
                </h3>
                <p className="text-sm text-white/80">
                  Sender and receiver details
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-white/20 bg-white/5">
                <div className="text-sm text-white/60 mb-1">Sender</div>
                <div className="font-medium text-white">{deliveryData.senderName}</div>
                <div className="text-sm text-white/60">{deliveryData.senderPhone}</div>
              </div>
              <div className="p-3 rounded-lg border border-white/20 bg-white/5">
                <div className="text-sm text-white/60 mb-1">Receiver</div>
                <div className="font-medium text-white">{deliveryData.receiverName}</div>
                <div className="text-sm text-white/60">{deliveryData.receiverPhone}</div>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          {deliveryData.specialInstructions && (
            <div className="p-4 rounded-xl mb-6 bg-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Special Instructions
                  </h3>
                  <p className="text-sm text-white/80">
                    Additional delivery notes
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-lg border border-white/20 bg-white/5">
                <div className="font-medium text-white">{deliveryData.specialInstructions}</div>
              </div>
            </div>
          )}

          {/* WhatsApp Note */}
          <div className="p-4 rounded-xl mb-6 bg-blue-500/10 border border-blue-500/20">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-300 mb-1">
                  WhatsApp Assistant
                </h4>
                <p className="text-sm text-blue-200/80">
                  You will be redirected to your personal assistant on WhatsApp who will assist you with the booking progress and provide real-time tracking updates.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBack}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white hover:border-[#22c55e] hover:text-[#22c55e] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Edit
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00ff9d] to-[#22c55e] text-black font-semibold hover:shadow-lg hover:shadow-[#00ff9d]/25 transition-all duration-300"
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