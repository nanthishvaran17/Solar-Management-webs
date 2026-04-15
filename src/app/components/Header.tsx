import { Sun, Menu, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/analytics', label: 'Analytics' },
  { path: '/predictions', label: 'AI Predictions' },
  { path: '/marketplace', label: 'Marketplace' },
  { path: '/community', label: 'Community' },
];

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/90">
      <div className="max-w-[1800px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sun className="size-8 text-orange-500" />
            </motion.div>
            <div>
              <div className="text-xl font-bold">Solar Power</div>
              <div className="text-xs text-gray-600">SolarShakti Pro</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className={location.pathname === item.path ? 'bg-orange-500 hover:bg-orange-600' : ''}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="size-5" />
              <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <nav className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      location.pathname === item.path
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
