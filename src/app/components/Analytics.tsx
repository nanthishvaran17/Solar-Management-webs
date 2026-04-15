import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Leaf, BarChart3, Download } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { monthlyData } from '../data/mockData';

const savingsBreakdown = [
  { name: 'Bill Reduction', value: 45000, color: '#f97316' },
  { name: 'Export Earnings', value: 18000, color: '#22c55e' },
  { name: 'Incentives', value: 12000, color: '#3b82f6' },
];

const environmentalImpact = [
  { month: 'Jan', trees: 12, co2: 95 },
  { month: 'Feb', trees: 15, co2: 118 },
  { month: 'Mar', trees: 18, co2: 142 },
  { month: 'Apr', trees: 21, co2: 165 },
  { month: 'May', trees: 19, co2: 150 },
  { month: 'Jun', trees: 17, co2: 134 },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Analytics</h1>
            <p className="text-gray-600">Comprehensive insights into your solar performance</p>
          </div>
          <Button className="gap-2">
            <Download className="size-4" />
            Export Report
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="monthly" className="space-y-6">
          <TabsList className="bg-white">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <MetricCard
                icon={<TrendingUp className="size-8 text-orange-500" />}
                title="Total Production"
                value="2,730 kWh"
                change="+12%"
                trend="up"
              />
              <MetricCard
                icon={<DollarSign className="size-8 text-green-500" />}
                title="Total Savings"
                value="₹21,840"
                change="+8%"
                trend="up"
              />
              <MetricCard
                icon={<Leaf className="size-8 text-emerald-500" />}
                title="Trees Saved"
                value="102"
                change="+15%"
                trend="up"
              />
              <MetricCard
                icon={<BarChart3 className="size-8 text-blue-500" />}
                title="CO₂ Reduced"
                value="804 kg"
                change="+10%"
                trend="up"
              />
            </div>

            {/* Production Trends */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-bold mb-6">Production & Consumption Trends</h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="production" fill="#f97316" name="Production (kWh)" />
                  <Bar dataKey="consumption" fill="#3b82f6" name="Consumption (kWh)" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Financial Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h2 className="text-2xl font-bold mb-6">Savings Breakdown</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={savingsBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {savingsBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-6 space-y-3">
                  {savingsBreakdown.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-4 rounded" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600">{item.name}</span>
                      </div>
                      <span className="font-bold">₹{item.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Environmental Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h2 className="text-2xl font-bold mb-6">Environmental Impact</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={environmentalImpact}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="trees" stroke="#22c55e" strokeWidth={3} name="Trees Saved" />
                    <Line type="monotone" dataKey="co2" stroke="#3b82f6" strokeWidth={3} name="CO₂ Reduced (kg)" />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>

            {/* ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-6">Return on Investment</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm opacity-90 mb-1">Initial Investment</div>
                  <div className="text-3xl font-bold">₹2,50,000</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Total Savings</div>
                  <div className="text-3xl font-bold">₹89,400</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Payback Period</div>
                  <div className="text-3xl font-bold">3.2 years</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">20-Year Projection</div>
                  <div className="text-3xl font-bold">₹18.5 L</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <p className="text-sm">
                  🎉 You're on track to recover your investment 2.8 years ahead of average!
                  Your system efficiency is 18% above similar installations in your area.
                </p>
              </div>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-4">System Efficiency</h3>
                  <div className="space-y-4">
                    <MetricBar label="Panel Efficiency" value={94} color="orange" />
                    <MetricBar label="Inverter Efficiency" value={97} color="blue" />
                    <MetricBar label="System Availability" value={99} color="green" />
                    <MetricBar label="Performance Ratio" value={88} color="purple" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Comparison with Area Average</h3>
                  <div className="space-y-4">
                    <ComparisonBar label="Production" you={4850} avg={4100} />
                    <ComparisonBar label="Efficiency" you={94} avg={82} />
                    <ComparisonBar label="Uptime" you={99} avg={96} />
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function MetricCard({ icon, title, value, change, trend }: { icon: React.ReactNode; title: string; value: string; change: string; trend: 'up' | 'down' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 border border-gray-200"
    >
      <div className="flex items-center justify-between mb-4">
        {icon}
        <span className={`text-sm font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-600 text-sm">{title}</div>
    </motion.div>
  );
}

function MetricBar({ label, value, color }: { label: string; value: number; color: string }) {
  const colors: Record<string, string> = {
    orange: '#f97316',
    blue: '#3b82f6',
    green: '#22c55e',
    purple: '#a855f7',
  };

  return (
    <div>
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-gray-700">{label}</span>
        <span className="font-bold">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: colors[color] }}
        />
      </div>
    </div>
  );
}

function ComparisonBar({ label, you, avg }: { label: string; you: number; avg: number }) {
  const maxValue = Math.max(you, avg);
  const youPercent = (you / maxValue) * 100;
  const avgPercent = (avg / maxValue) * 100;

  return (
    <div>
      <div className="text-sm text-gray-700 mb-2">{label}</div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs w-12 text-gray-600">You</span>
          <div className="flex-1 h-6 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${youPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-orange-500 flex items-center justify-end pr-2"
            >
              <span className="text-xs text-white font-bold">{you}</span>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs w-12 text-gray-600">Avg</span>
          <div className="flex-1 h-6 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${avgPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="h-full bg-gray-400 flex items-center justify-end pr-2"
            >
              <span className="text-xs text-white font-bold">{avg}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
