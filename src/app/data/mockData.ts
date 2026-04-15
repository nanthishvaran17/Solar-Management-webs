// Mock data for solar management system

export const solarData = {
  currentOutput: 3.2,
  capacity: 5.0,
  todayTotal: 18.5,
  monthTotal: 420,
  yearTotal: 4850,
  moneySavedToday: 148,
  treesSaved: 2.3,
  co2Reduced: 15.2,
  batterySOC: 75,
  batteryCapacity: 10,
  backupTime: 4.5,
};

export const hourlyProduction = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  production: i >= 6 && i <= 18
    ? Math.sin((i - 6) / 12 * Math.PI) * 4.5 + Math.random() * 0.5
    : 0,
  consumption: 0.8 + Math.random() * 1.5,
}));

export const applianceConsumption = [
  { name: 'AC', consumption: 8.2, icon: '❄️' },
  { name: 'Lights', consumption: 2.1, icon: '💡' },
  { name: 'Fan', consumption: 1.8, icon: '🌀' },
  { name: 'Kitchen', consumption: 3.2, icon: '🍳' },
  { name: 'Electronics', consumption: 2.0, icon: '🖥️' },
  { name: 'Geyser', consumption: 4.5, icon: '💧' },
];

export const weatherForecast = [
  { day: 'MON', temp: 28, icon: '☀️', production: 25 },
  { day: 'TUE', temp: 26, icon: '⛅', production: 18 },
  { day: 'WED', temp: 24, icon: '🌧️', production: 8 },
  { day: 'THU', temp: 29, icon: '☀️', production: 26 },
  { day: 'FRI', temp: 30, icon: '☀️', production: 28 },
  { day: 'SAT', temp: 27, icon: '⛅', production: 20 },
  { day: 'SUN', temp: 28, icon: '☀️', production: 24 },
];

export const notifications = [
  { type: 'warning', message: 'Maintenance due in 5 days', icon: '⚠️' },
  { type: 'info', message: 'Peak production expected tomorrow', icon: '☀️' },
  { type: 'success', message: 'Achievement unlocked: 1000 kWh milestone', icon: '🎉' },
  { type: 'tip', message: 'Run washing machine between 11 AM - 2 PM', icon: '💡' },
];

export const leaderboard = [
  { rank: 1, name: 'Rajesh Kumar', location: 'Chennai', production: 850, rating: 5 },
  { rank: 2, name: 'Priya Devi', location: 'Coimbatore', production: 720, rating: 4 },
  { rank: 3, name: 'Murugan S', location: 'Madurai', production: 680, rating: 4 },
  { rank: 4, name: 'Lakshmi R', location: 'Trichy', production: 650, rating: 4 },
  { rank: 5, name: 'Kumar P', location: 'Salem', production: 620, rating: 3 },
];

export const achievements = [
  { title: 'First kWh', icon: '⚡', unlocked: true },
  { title: '100 kWh Club', icon: '💯', unlocked: true },
  { title: '1000 kWh Milestone', icon: '🏆', unlocked: true },
  { title: 'Zero Grid Week', icon: '🌟', unlocked: false },
  { title: 'Solar Champion', icon: '👑', unlocked: false },
];

export const monthlyData = [
  { month: 'Jan', production: 380, consumption: 420, savings: 3040 },
  { month: 'Feb', production: 420, consumption: 390, savings: 3360 },
  { month: 'Mar', production: 480, consumption: 410, savings: 3840 },
  { month: 'Apr', production: 510, consumption: 450, savings: 4080 },
  { month: 'May', production: 490, consumption: 480, savings: 3920 },
  { month: 'Jun', production: 450, consumption: 460, savings: 3600 },
];

export const stats = {
  totalUsers: '50,000+',
  energySaved: '1 Million kWh',
  moneySaved: '₹5 Crores+',
  co2Reduced: '500 Tonnes',
};

export const aiRecommendations = [
  "Shift AC usage to 12-3 PM to save ₹50",
  "Clean panels tomorrow for 15% boost",
  "Upgrade battery for better night coverage",
  "Peak production expected at 1:30 PM today",
];

export const marketplaceListings = [
  { seller: 'Raj M', location: '2.3 km', price: 6.5, available: 5.2, rating: 4.8 },
  { seller: 'Priya K', location: '3.1 km', price: 6.2, available: 3.8, rating: 4.9 },
  { seller: 'Kumar S', location: '4.5 km', price: 6.8, available: 4.5, rating: 4.7 },
];

export const userProfile = {
  name: 'Vijay Kumar',
  email: 'vijay@example.com',
  systemCapacity: 5.0,
  installationDate: '2023-03-15',
  tier: 'Premium',
  solarCoins: 2450,
  rank: 47,
};
