import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Package, User } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      icon: Home,
      label: 'Home',
      active: location.pathname === '/'
    },
    {
      path: '/about',
      icon: Info,
      label: 'About',
      active: location.pathname === '/about'
    },
    {
      path: '/subscriptions',
      icon: Package,
      label: 'Plans',
      active: location.pathname === '/subscriptions'
    },
    {
      path: '/profile',
      icon: User,
      label: 'Profile',
      active: location.pathname === '/profile'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
                item.active
                  ? 'text-[#00ff9d] bg-[#00ff9d]/10'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
