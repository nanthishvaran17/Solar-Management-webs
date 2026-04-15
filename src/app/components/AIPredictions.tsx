import { motion } from 'motion/react';
import { Cloud, Zap, Wrench, DollarSign, MessageSquare, Mic } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from './ui/button';
import { weatherForecast } from '../data/mockData';
import { useState } from 'react';

const smartSchedule = [
  { appliance: 'Washing Machine', icon: '🧺', optimalTime: '11:00 AM - 2:00 PM', savings: '₹15/cycle' },
  { appliance: 'Dishwasher', icon: '🍽️', optimalTime: '12:00 PM - 3:00 PM', savings: '₹8/cycle' },
  { appliance: 'EV Charging', icon: '🚗', optimalTime: '10:00 AM - 4:00 PM', savings: '₹45/charge' },
  { appliance: 'Geyser', icon: '💧', optimalTime: '1:00 PM - 3:00 PM', savings: '₹12/hour' },
  { appliance: 'Pool Pump', icon: '🏊', optimalTime: '11:30 AM - 2:30 PM', savings: '₹20/day' },
];

const maintenanceAlerts = [
  {
    type: 'Panel Cleaning',
    priority: 'high',
    dueIn: '3 days',
    impact: '+15% production',
    reason: 'Dust accumulation detected by AI',
  },
  {
    type: 'Inverter Check',
    priority: 'medium',
    dueIn: '12 days',
    impact: 'Prevent failures',
    reason: 'Scheduled maintenance',
  },
  {
    type: 'Battery Health',
    priority: 'low',
    dueIn: '45 days',
    impact: 'Optimize lifespan',
    reason: 'Cycle count approaching threshold',
  },
];

export default function AIPredictions() {
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! What would you like to know about your solar system?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue };
    setChatMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: inputValue.includes('today')
          ? 'Today you have produced 18.5 kWh. That\'s 2.3 kWh more than yesterday! 👍'
          : inputValue.includes('weather')
          ? 'Clear weather today. Peak production expected at 1:30 PM.'
          : 'I\'m ready to help with your question. Please be more specific.',
      };
      setChatMessages((prev) => [...prev, botResponse]);
    }, 800);

    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AI Predictions</h1>
          <p className="text-gray-600">Smart forecasts and recommendations</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weather & Energy Forecast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="size-8 text-blue-500" />
                <h2 className="text-2xl font-bold">7-Day Forecast</h2>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-6">
                {weatherForecast.map((day, i) => (
                  <WeatherDay key={i} {...day} />
                ))}
              </div>

              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weatherForecast}>
                  <XAxis dataKey="day" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Bar dataKey="production" fill="#f97316" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Smart Scheduling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="size-8 text-orange-500" />
                <h2 className="text-2xl font-bold">Smart Scheduling Assistant</h2>
              </div>

              <div className="space-y-4">
                {smartSchedule.map((item, i) => (
                  <ScheduleItem key={i} {...item} />
                ))}
              </div>
            </motion.div>

            {/* Maintenance Predictor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="size-8 text-purple-500" />
                <h2 className="text-2xl font-bold">Maintenance Predictions</h2>
              </div>

              <div className="space-y-4">
                {maintenanceAlerts.map((alert, i) => (
                  <MaintenanceAlert key={i} {...alert} />
                ))}
              </div>
            </motion.div>

            {/* Bill Forecast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="size-8" />
                <h2 className="text-2xl font-bold">Next Month Forecast</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm opacity-90 mb-1">Estimated Bill</div>
                  <div className="text-4xl font-bold">₹420</div>
                  <div className="text-sm opacity-75 mt-1">↓ 68% from last month</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Projected Savings</div>
                  <div className="text-4xl font-bold">₹4,180</div>
                  <div className="text-sm opacity-75 mt-1">Based on weather forecast</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Grid Dependency</div>
                  <div className="text-4xl font-bold">18%</div>
                  <div className="text-sm opacity-75 mt-1">↓ 5% improvement</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <p className="text-sm">
                  💡 AI Tip: Upgrading battery to 15kWh would reduce grid dependency to 8% and save an additional ₹850/month
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Solar AI Chatbot */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col"
              style={{ height: '600px' }}
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <MessageSquare className="size-8" />
                  <div>
                    <h3 className="text-xl font-bold">Solar AI</h3>
                    <p className="text-sm opacity-90">Your Solar Assistant</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((msg, i) => (
                  <ChatMessage key={i} type={msg.type} text={msg.text} />
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your question here..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button onClick={handleSendMessage} className="px-6">
                    Send
                  </Button>
                </div>
                <Button variant="outline" className="w-full gap-2">
                  <Mic className="size-4" />
                  Voice Input
                </Button>
              </div>
            </motion.div>

            {/* Quick Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="font-bold mb-4">Quick Questions</h3>
              <div className="space-y-2">
                <QuickQuestion text="How many units today?" />
                <QuickQuestion text="How is the weather?" />
                <QuickQuestion text="When to clean the panel?" />
                <QuickQuestion text="What is battery status?" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeatherDay({ day, temp, icon, production }: typeof weatherForecast[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="text-center p-3 bg-gray-50 rounded-xl"
    >
      <div className="text-xs text-gray-600 mb-1">{day}</div>
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-sm font-bold mb-1">{temp}°C</div>
      <div className="text-xs text-orange-600 font-bold">{production}kWh</div>
    </motion.div>
  );
}

function ScheduleItem({ appliance, icon, optimalTime, savings }: typeof smartSchedule[0]) {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <div>
          <div className="font-bold">{appliance}</div>
          <div className="text-sm text-gray-600">{optimalTime}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-green-600 font-bold">{savings}</div>
        <Button size="sm" className="mt-1">Schedule</Button>
      </div>
    </div>
  );
}

function MaintenanceAlert({ type, priority, dueIn, impact, reason }: typeof maintenanceAlerts[0]) {
  const priorityColors = {
    high: 'border-red-300 bg-red-50',
    medium: 'border-yellow-300 bg-yellow-50',
    low: 'border-blue-300 bg-blue-50',
  };

  const priorityIcons = {
    high: '🔴',
    medium: '🟡',
    low: '🔵',
  };

  return (
    <div className={`p-4 rounded-xl border ${priorityColors[priority]}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span>{priorityIcons[priority]}</span>
          <h4 className="font-bold">{type}</h4>
        </div>
        <span className="text-sm font-bold text-gray-600">Due in {dueIn}</span>
      </div>
      <div className="text-sm text-gray-700 mb-2">{reason}</div>
      <div className="text-sm font-bold text-green-600">{impact}</div>
    </div>
  );
}

function ChatMessage({ type, text }: { type: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl ${
          type === 'user'
            ? 'bg-orange-500 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-900 rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}

function QuickQuestion({ text }: { text: string }) {
  return (
    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors">
      {text}
    </button>
  );
}
