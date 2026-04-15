import { motion } from 'motion/react';
import { Sun, Zap, TrendingUp, Users, Award, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { stats } from '../data/mockData';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-300">
        {/* Animated Sun Rays */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-96 bg-white origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-50%)`,
              }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="inline-block mb-8"
          >
            <Sun className="size-24 text-white drop-shadow-2xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Solar Power
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-bold text-white mb-6"
          >
            SolarShakti Pro
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl text-white/90 mb-12"
          >
            Manage Your Solar Power Intelligently
          </motion.p>

          {/* Live Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <CounterCard value="18.5" unit="kWh" label="Today's Energy" />
            <CounterCard value="₹148" unit="" label="Money Saved" />
            <CounterCard value="2.3" unit="Trees" label="Trees Saved" />
            <CounterCard value="15.2" unit="kg" label="CO₂ Reduced" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 text-lg px-8 py-6">
              Start Monitoring
              <ChevronRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="size-10 rounded-full border-2 border-white/50 flex items-center justify-center">
            <ChevronRight className="rotate-90 text-white/50" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
          >
            Smart Solar Management
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="size-12 text-orange-500" />}
              title="Live Monitoring"
              description="Live production meter with weather-based predictions and battery status"
            />
            <FeatureCard
              icon={<TrendingUp className="size-12 text-orange-500" />}
              title="AI-Driven Predictions"
              description="7-day energy forecast with optimal device usage timing"
            />
            <FeatureCard
              icon={<Users className="size-12 text-orange-500" />}
              title="Community Trading"
              description="Peer-to-peer energy market and neighborhood challenges"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard label="Total Users" value={stats.totalUsers} />
            <StatCard label="Energy Saved" value={stats.energySaved} />
            <StatCard label="Money Saved" value={stats.moneySaved} />
            <StatCard label="CO₂ Reduced" value={stats.co2Reduced} />
          </div>
        </div>
      </section>
    </div>
  );
}

function CounterCard({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
      <div className="text-4xl font-bold text-white mb-1">
        {value} <span className="text-2xl">{unit}</span>
      </div>
      <div className="text-white/80">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl font-bold text-orange-600 mb-2">{value}</div>
      <div className="text-xl text-gray-600">{label}</div>
    </motion.div>
  );
}
