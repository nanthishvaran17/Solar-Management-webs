import { motion } from 'motion/react';
import { ShoppingCart, TrendingUp, MapPin, Star, Zap, Users } from 'lucide-react';
import { Button } from './ui/button';
import { marketplaceListings } from '../data/mockData';

const communityProjects = [
  {
    title: 'Residential Complex Solar Farm',
    location: 'Anna Nagar, Chennai',
    capacity: '50 kW',
    investment: '₹50,000',
    expectedROI: '18% annually',
    participants: 45,
    slotsLeft: 5,
  },
  {
    title: 'School Rooftop Installation',
    location: 'Coimbatore',
    capacity: '30 kW',
    investment: '₹30,000',
    expectedROI: '16% annually',
    participants: 28,
    slotsLeft: 12,
  },
];

const equipmentListings = [
  {
    title: 'Used Solar Panel - 330W Mono',
    seller: 'Rajesh Kumar',
    price: '₹4,500',
    condition: 'Excellent',
    age: '2 years',
    rating: 4.8,
  },
  {
    title: 'Inverter - 5kW Hybrid',
    seller: 'Solar Depot',
    price: '₹45,000',
    condition: 'New',
    age: 'Brand New',
    rating: 5.0,
  },
  {
    title: 'Battery - 10kWh Lithium',
    seller: 'Power Solutions',
    price: '₹85,000',
    condition: 'Like New',
    age: '6 months',
    rating: 4.9,
  },
];

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Energy Marketplace</h1>
          <p className="text-gray-600">Buy, sell, and trade solar energy and equipment</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sell Your Excess Energy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-6">Sell Your Excess Energy</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-sm opacity-90 mb-2">Available to Sell Today</div>
                  <div className="text-5xl font-bold mb-1">5.2 kWh</div>
                  <div className="text-sm opacity-75">After your consumption</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-sm opacity-90 mb-2">Suggested Price</div>
                  <div className="text-5xl font-bold mb-1">₹6.50</div>
                  <div className="text-sm opacity-75">per kWh (market rate)</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Estimated Earnings</span>
                  <span className="text-3xl font-bold">₹33.80</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-green-400"
                  />
                </div>
                <p className="text-sm opacity-90">3 buyers interested in your area</p>
              </div>

              <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-white/90">
                List for Sale
              </Button>
            </motion.div>

            {/* Buy from Neighbors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Buy from Neighbors</h2>
                <Button variant="outline">View Map</Button>
              </div>

              <div className="space-y-4">
                {marketplaceListings.map((listing, i) => (
                  <SellerCard key={i} {...listing} />
                ))}
              </div>
            </motion.div>

            {/* Community Solar Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="size-8 text-blue-500" />
                <h2 className="text-2xl font-bold">Community Solar Projects</h2>
              </div>

              <div className="space-y-6">
                {communityProjects.map((project, i) => (
                  <ProjectCard key={i} {...project} />
                ))}
              </div>
            </motion.div>

            {/* Equipment Marketplace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Equipment Marketplace</h2>
                <Button>Sell Equipment</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {equipmentListings.map((listing, i) => (
                  <EquipmentCard key={i} {...listing} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Transaction History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="font-bold mb-4">Your Earnings</h3>
              <div className="space-y-4">
                <EarningsStat label="This Month" value="₹450" trend="+12%" />
                <EarningsStat label="Total Earned" value="₹2,340" trend="+8%" />
                <EarningsStat label="Energy Sold" value="360 kWh" trend="+15%" />
              </div>
            </motion.div>

            {/* Market Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="font-bold mb-4">Market Statistics</h3>
              <div className="space-y-4">
                <MarketStat label="Current Rate" value="₹6.50/kWh" />
                <MarketStat label="Active Sellers" value="234" />
                <MarketStat label="Active Buyers" value="567" />
                <MarketStat label="Today's Volume" value="2,340 kWh" />
              </div>
            </motion.div>

            {/* Blockchain Verification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="font-bold mb-4">🔐 Blockchain Verified</h3>
              <p className="text-sm opacity-90 mb-4">
                All transactions are secured and verified on the blockchain for complete transparency.
              </p>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-xs font-mono">
                Last TX: 0x7f8...a2c4
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SellerCard({ seller, location, price, available, rating }: typeof marketplaceListings[0]) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-4">
        <div className="size-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
          👤
        </div>
        <div>
          <div className="font-bold">{seller}</div>
          <div className="text-sm text-gray-600 flex items-center gap-1">
            <MapPin className="size-3" />
            {location}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold">{rating}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-orange-600">{price}</div>
        <div className="text-sm text-gray-600">{available} kWh available</div>
        <Button size="sm" className="mt-2">Buy Now</Button>
      </div>
    </div>
  );
}

function ProjectCard({ title, location, capacity, investment, expectedROI, participants, slotsLeft }: typeof communityProjects[0]) {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="text-sm text-gray-600 mb-4 flex items-center gap-1">
        <MapPin className="size-4" />
        {location}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs text-gray-600 mb-1">Capacity</div>
          <div className="font-bold">{capacity}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Min Investment</div>
          <div className="font-bold">{investment}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Expected ROI</div>
          <div className="font-bold text-green-600">{expectedROI}</div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Participants</div>
          <div className="font-bold">{participants}/{participants + slotsLeft}</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">{slotsLeft} slots remaining</span>
        <Button size="sm">Invest Now</Button>
      </div>
    </div>
  );
}

function EquipmentCard({ title, seller, price, condition, age, rating }: typeof equipmentListings[0]) {
  return (
    <div className="p-4 border border-gray-200 rounded-xl hover:border-orange-300 transition-colors">
      <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-4xl">
        ☀️
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="text-sm text-gray-600 mb-2">by {seller}</div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{condition}</span>
        <span className="text-xs text-gray-600">{age}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-orange-600">{price}</div>
        <div className="flex items-center gap-1">
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold">{rating}</span>
        </div>
      </div>
    </div>
  );
}

function EarningsStat({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="text-sm font-bold text-green-600">{trend}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

function MarketStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
