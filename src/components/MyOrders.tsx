import React, { useState, useEffect } from 'react';
import { Package, MapPin, Clock, User, Phone, Zap, Calendar, ChevronRight, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Order {
  id: string;
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
  timestamp: number;
  status: 'pending' | 'in-transit' | 'delivered';
}

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = localStorage.getItem('sendsafe_orders');
    if (savedOrders) {
      const parsedOrders = JSON.parse(savedOrders);
      // Sort by timestamp, newest first
      const sortedOrders = parsedOrders.sort((a: Order, b: Order) => b.timestamp - a.timestamp);
      setOrders(sortedOrders);
    }
  }, []);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      const minutes = Math.floor(diffInHours * 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined 
      });
    }
  };

  const formatFullDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-transit':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  const getStatusIcon = (deliveryType: string) => {
    if (deliveryType === 'Instant Delivery') return Zap;
    if (deliveryType === 'Interstate Delivery') return Truck;
    return Clock;
  };

  const getPrice = (deliveryType: string) => {
    if (deliveryType === 'Instant Delivery') return 'NGN 6,500';
    if (deliveryType === 'Interstate Delivery') return 'NGN 12,500';
    return 'NGN 4,000';
  };

  if (selectedOrder) {
    return (
      <section className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-b from-black to-[#0a1a0a]">
        <div className="container mx-auto max-w-2xl">
          <button
            onClick={() => setSelectedOrder(null)}
            className="mb-6 text-[#00ff9d] hover:text-[#22c55e] transition-colors flex items-center gap-2"
          >
            ← Back to Orders
          </button>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Order Details</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(selectedOrder.status)}`}>
                {selectedOrder.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>

            <div className="space-y-6">
              {/* Order Info */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-[#00ff9d]" />
                  <div>
                    <div className="text-sm text-white/60">Order Date</div>
                    <div className="text-white font-medium">{formatFullDate(selectedOrder.timestamp)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5" />
                  <div>
                    <div className="text-sm text-white/60">Order ID</div>
                    <div className="text-white/80 font-mono text-sm">{selectedOrder.id}</div>
                  </div>
                </div>
              </div>

              {/* Delivery Type */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  {React.createElement(getStatusIcon(selectedOrder.deliveryType), {
                    className: 'w-5 h-5 text-[#00ff9d]'
                  })}
                  <div className="flex-1">
                    <div className="text-white font-semibold">{selectedOrder.deliveryType}</div>
                    <div className="text-sm text-white/60">{getPrice(selectedOrder.deliveryType)}</div>
                  </div>
                </div>
              </div>

              {/* Item Details */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-5 h-5 text-[#00ff9d]" />
                  <h3 className="text-white font-semibold">Item Details</h3>
                </div>
                <div className="space-y-2 ml-8">
                  <div>
                    <div className="text-sm text-white/60">Item Name</div>
                    <div className="text-white">{selectedOrder.itemName}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Description</div>
                    <div className="text-white/80">{selectedOrder.itemDescription}</div>
                  </div>
                </div>
              </div>

              {/* Addresses */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#00ff9d]" />
                  <h3 className="text-white font-semibold">Addresses</h3>
                </div>
                <div className="space-y-3 ml-8">
                  <div>
                    <div className="text-sm text-white/60">Pickup Address</div>
                    <div className="text-white">{selectedOrder.pickupAddress}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Drop-off Address</div>
                    <div className="text-white">{selectedOrder.dropOffAddress}</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <User className="w-5 h-5 text-[#00ff9d]" />
                  <h3 className="text-white font-semibold">Contact Information</h3>
                </div>
                <div className="space-y-3 ml-8">
                  <div>
                    <div className="text-sm text-white/60">Sender</div>
                    <div className="text-white">{selectedOrder.senderName}</div>
                    <div className="text-white/80 text-sm">{selectedOrder.senderPhone}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Receiver</div>
                    <div className="text-white">{selectedOrder.receiverName}</div>
                    <div className="text-white/80 text-sm">{selectedOrder.receiverPhone}</div>
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              {selectedOrder.specialInstructions && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-white/60 mb-2">Special Instructions</div>
                  <div className="text-white">{selectedOrder.specialInstructions}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 bg-gradient-to-b from-black to-[#0a1a0a]">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-12 h-12 text-white/40" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Orders Yet</h3>
            <p className="text-white/60 mb-6">You haven't placed any delivery orders yet.</p>
            <button
              onClick={() => navigate('/home')}
              className="bg-gradient-to-r from-[#00ff9d] to-[#22c55e] px-6 py-3 rounded-xl text-black font-semibold hover:shadow-lg hover:shadow-[#00ff9d]/25 transition-all duration-300"
            >
              Book Your First Delivery
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const StatusIcon = getStatusIcon(order.deliveryType);
              return (
                <div
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                        <StatusIcon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{order.itemName}</h3>
                        <p className="text-sm text-white/60">{order.deliveryType}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#00ff9d] transition-colors" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#00ff9d] mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="text-white/60">From:</div>
                        <div className="text-white/90 line-clamp-1">{order.pickupAddress}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#22c55e] mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="text-white/60">To:</div>
                        <div className="text-white/90 line-clamp-1">{order.dropOffAddress}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{formatDate(order.timestamp)}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                      {order.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyOrders;

