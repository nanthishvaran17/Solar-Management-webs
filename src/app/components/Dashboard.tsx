import { motion } from 'motion/react';
import { Sun, Battery, Home, Grid, TrendingUp, Droplets, Wind, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Progress } from './ui/progress';
import { solarData, hourlyProduction, applianceConsumption, notifications, aiRecommendations } from '../data/mockData';

export default function Dashboard() {
  const productionPercentage = (solarData.currentOutput / solarData.capacity) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Live Dashboard</h1>
          <p className="text-gray-600">Live Solar Energy Monitoring</p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <UserProfileCard />
            <QuickStats />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            <LiveProductionMonitor />
            <EnergyFlowDiagram />
            <ProductionChart />
            <ApplianceConsumption />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <NotificationsPanel />
            <AIRecommendations />
            <WeatherCard />
            <BatteryStatus />
          </div>
        </div>
      </div>
    </div>
  );
}

function UserProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white"
    >
      <div className="size-16 rounded-full bg-white/20 flex items-center justify-center mb-4 text-2xl">
        VK
      </div>
      <h3 className="text-xl font-bold mb-1">Vijay Kumar</h3>
      <p className="text-white/80 text-sm mb-4">Premium Member</p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-white/80">System Capacity</span>
          <span className="font-bold">5.0 kW</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/80">Solar Coins</span>
          <span className="font-bold">2,450 🪙</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/80">Rank</span>
          <span className="font-bold">#47</span>
        </div>
      </div>
    </motion.div>
  );
}

function QuickStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-200"
    >
      <h3 className="font-bold mb-4">Quick Stats</h3>
      <div className="space-y-4">
        <StatItem icon="⚡" label="Today" value={`${solarData.todayTotal} kWh`} />
        <StatItem icon="📅" label="This Month" value={`${solarData.monthTotal} kWh`} />
        <StatItem icon="📊" label="This Year" value={`${solarData.yearTotal} kWh`} />
        <StatItem icon="💰" label="Total Savings" value="₹89,400" />
      </div>
    </motion.div>
  );
}

function StatItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <span className="text-gray-600">{label}</span>
      </div>
      <span className="font-bold">{value}</span>
    </div>
  );
}

function LiveProductionMonitor() {
  const productionPercentage = (solarData.currentOutput / solarData.capacity) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl p-8 border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <Sun className="size-8 text-orange-500" />
        <h2 className="text-2xl font-bold">Live Solar Production</h2>
      </div>

      <div className="flex items-center justify-center mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <Sun className="size-20 text-orange-400" />
        </motion.div>
      </div>

      <div className="text-center mb-6">
        <div className="text-6xl font-bold text-orange-600 mb-2">
          {solarData.currentOutput} <span className="text-3xl">kW</span>
        </div>
        <Progress value={productionPercentage} className="h-3 mb-2" />
        <p className="text-gray-600">{productionPercentage.toFixed(0)}% of capacity</p>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{solarData.todayTotal} kWh</div>
          <div className="text-sm text-gray-600">Today's Total</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">₹{solarData.moneySavedToday}</div>
          <div className="text-sm text-gray-600">Money Saved</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">{solarData.co2Reduced} kg</div>
          <div className="text-sm text-gray-600">CO₂ Reduced</div>
        </div>
      </div>
    </motion.div>
  );
}

function EnergyFlowDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-2xl p-8 border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-8">Energy Flow</h2>

      <div className="flex items-center justify-between">
        {/* Sun */}
        <FlowNode icon={<Sun className="size-10 text-yellow-500" />} label="Sun" value="5.2 kW" />

        <FlowArrow active />

        {/* Solar Panel */}
        <FlowNode icon={<div className="text-3xl">☀️</div>} label="Solar Panel" value="3.2 kW" />

        <div className="flex flex-col gap-4">
          <FlowArrow active direction="down" />
          <FlowArrow active direction="down" />
          <FlowArrow direction="down" />
        </div>

        {/* Distribution */}
        <div className="flex flex-col gap-6">
          <FlowNode icon={<Home className="size-8 text-blue-500" />} label="Home" value="1.8 kW" size="sm" />
          <FlowNode icon={<Battery className="size-8 text-green-500" />} label="Battery" value="1.2 kW" size="sm" />
          <FlowNode icon={<Grid className="size-8 text-purple-500" />} label="Grid" value="0.2 kW" size="sm" />
        </div>
      </div>
    </motion.div>
  );
}

function FlowNode({ icon, label, value, size = 'md' }: { icon: React.ReactNode; label: string; value: string; size?: 'sm' | 'md' }) {
  return (
    <div className={`text-center ${size === 'sm' ? 'scale-90' : ''}`}>
      <div className="bg-gray-50 rounded-xl p-4 mb-2 border-2 border-gray-200">
        {icon}
      </div>
      <div className="font-bold text-sm">{label}</div>
      <div className="text-xs text-gray-600">{value}</div>
    </div>
  );
}

function FlowArrow({ active = false, direction = 'right' }: { active?: boolean; direction?: 'right' | 'down' }) {
  return (
    <div className={`relative ${direction === 'right' ? 'w-16' : 'h-16'}`}>
      <motion.div
        className={`${active ? 'bg-orange-400' : 'bg-gray-300'} ${direction === 'right' ? 'h-1 w-full' : 'w-1 h-full mx-auto'}`}
        animate={active ? { opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      {active && (
        <motion.div
          className={`absolute ${direction === 'right' ? 'top-1/2 -translate-y-1/2' : 'left-1/2 -translate-x-1/2'} size-2 rounded-full bg-orange-500`}
          animate={direction === 'right' ? { x: [0, 60, 0] } : { y: [0, 60, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </div>
  );
}

function ProductionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl p-8 border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-6">24 Hour Production</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={hourlyProduction}>
          <defs>
            <linearGradient id="productionGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="hour" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip />
          <Area type="monotone" dataKey="production" stroke="#f97316" strokeWidth={3} fill="url(#productionGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

function ApplianceConsumption() {
  const maxConsumption = Math.max(...applianceConsumption.map(a => a.consumption));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-2xl p-8 border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-6">Appliance Usage Today</h2>
      <div className="space-y-4">
        {applianceConsumption.map((appliance, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-2xl">{appliance.icon}</span>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{appliance.name}</span>
                <span className="text-gray-600">{appliance.consumption} kWh</span>
              </div>
              <Progress value={(appliance.consumption / maxConsumption) * 100} className="h-2" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between text-lg font-bold">
          <span>Total Consumption</span>
          <span>{applianceConsumption.reduce((sum, a) => sum + a.consumption, 0).toFixed(1)} kWh</span>
        </div>
      </div>
    </motion.div>
  );
}

function NotificationsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white rounded-2xl p-6 border border-gray-200"
    >
      <h3 className="font-bold mb-4 flex items-center gap-2">
        <AlertCircle className="size-5" />
        Alerts & Notifications
      </h3>
      <div className="space-y-3">
        {notifications.map((notif, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-lg text-sm">
            <div className="flex items-start gap-2">
              <span>{notif.icon}</span>
              <span className="text-gray-700">{notif.message}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function AIRecommendations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white"
    >
      <h3 className="font-bold mb-4 flex items-center gap-2">
        <TrendingUp className="size-5" />
        AI Recommendations
      </h3>
      <div className="space-y-3">
        {aiRecommendations.map((rec, i) => (
          <div key={i} className="p-3 bg-white/10 backdrop-blur rounded-lg text-sm">
            💡 {rec}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function WeatherCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white rounded-2xl p-6 border border-gray-200"
    >
      <h3 className="font-bold mb-4">Current Weather</h3>
      <div className="text-center">
        <div className="text-6xl mb-2">☀️</div>
        <div className="text-4xl font-bold mb-1">28°C</div>
        <div className="text-gray-600 mb-4">Clear Sky</div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Droplets className="size-4 text-blue-500" />
            <span>45% Humidity</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="size-4 text-gray-500" />
            <span>12 km/h</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BatteryStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="bg-white rounded-2xl p-6 border border-gray-200"
    >
      <h3 className="font-bold mb-4 flex items-center gap-2">
        <Battery className="size-5" />
        Battery Status
      </h3>
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <svg className="size-32" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22c55e"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 40}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - solarData.batterySOC / 100) }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl font-bold">{solarData.batterySOC}%</div>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Capacity</span>
            <span className="font-bold">{solarData.batteryCapacity} kWh</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Backup Time</span>
            <span className="font-bold">{solarData.backupTime} hours</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status</span>
            <span className="font-bold text-green-600">Charging</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
