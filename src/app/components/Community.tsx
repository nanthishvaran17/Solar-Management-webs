import { motion } from 'motion/react';
import { Trophy, Star, Award, Target, Users, MessageSquare, Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { leaderboard, achievements } from '../data/mockData';

const challenges = [
  {
    title: 'Zero Grid Week',
    description: 'Run entirely on solar for 7 consecutive days',
    progress: 45,
    reward: '500 🪙',
    participants: 234,
    endsIn: '12 days',
  },
  {
    title: 'Peak Production Day',
    description: 'Achieve maximum solar output in a single day',
    progress: 78,
    reward: '200 🪙',
    participants: 567,
    endsIn: '5 days',
  },
  {
    title: 'Energy Saver Month',
    description: 'Reduce consumption by 20% this month',
    progress: 62,
    reward: '350 🪙',
    participants: 189,
    endsIn: '18 days',
  },
];

const discussions = [
  { title: 'Best inverter for 5kW system?', author: 'Rajesh K', replies: 23, views: 456, time: '2h ago' },
  { title: 'Panel cleaning tips for monsoon', author: 'Priya M', replies: 15, views: 289, time: '5h ago' },
  { title: 'Battery upgrade worth it?', author: 'Kumar S', replies: 31, views: 678, time: '1d ago' },
  { title: 'Subsidy application help needed', author: 'Lakshmi R', replies: 18, views: 345, time: '2d ago' },
];

const events = [
  { title: 'Solar Installation Workshop', date: 'Apr 18, 2026', location: 'Chennai', attendees: 45 },
  { title: 'Maintenance Best Practices', date: 'Apr 22, 2026', location: 'Online', attendees: 128 },
  { title: 'Community Meetup', date: 'Apr 28, 2026', location: 'Coimbatore', attendees: 67 },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Community</h1>
          <p className="text-gray-600">Connect, compete, and grow together</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="size-8 text-yellow-500" />
                <h2 className="text-2xl font-bold">Top Solar Champions</h2>
              </div>

              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <LeaderboardItem key={user.rank} {...user} />
                ))}
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-lg">Your Rank: #47</div>
                    <div className="text-sm text-gray-600">Keep pushing to reach top 25!</div>
                  </div>
                  <Award className="size-12 text-orange-500" />
                </div>
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="size-8 text-orange-500" />
                <h2 className="text-2xl font-bold">Active Challenges</h2>
              </div>

              <div className="space-y-4">
                {challenges.map((challenge, i) => (
                  <ChallengeCard key={i} {...challenge} />
                ))}
              </div>
            </motion.div>

            {/* Discussion Forum */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <MessageSquare className="size-8 text-blue-500" />
                  <h2 className="text-2xl font-bold">Discussions</h2>
                </div>
                <Button>New Topic</Button>
              </div>

              <div className="space-y-3">
                {discussions.map((topic, i) => (
                  <DiscussionItem key={i} {...topic} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Award className="size-6" />
                Your Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl text-center ${
                      achievement.unlocked ? 'bg-white/20' : 'bg-white/5 opacity-50'
                    }`}
                  >
                    <div className="text-3xl mb-1">{achievement.icon}</div>
                    <div className="text-xs">{achievement.title}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-white/10 rounded-lg text-sm">
                <div className="flex justify-between">
                  <span>Solar Coins</span>
                  <span className="font-bold">2,450 🪙</span>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="size-5" />
                <h3 className="font-bold">Upcoming Events</h3>
              </div>
              <div className="space-y-3">
                {events.map((event, i) => (
                  <EventCard key={i} {...event} />
                ))}
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="size-5" />
                <h3 className="font-bold">Community Stats</h3>
              </div>
              <div className="space-y-4">
                <StatItem label="Total Members" value="50,234" />
                <StatItem label="Active Today" value="3,456" />
                <StatItem label="Total Energy" value="1M kWh" />
                <StatItem label="Trees Saved" value="125,000" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderboardItem({ rank, name, location, production, rating }: typeof leaderboard[0]) {
  const medals = ['🥇', '🥈', '🥉'];
  const medal = rank <= 3 ? medals[rank - 1] : `#${rank}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: rank * 0.1 }}
      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold w-12 text-center">{medal}</div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-600">{location}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-orange-600">{production} kWh</div>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ChallengeCard({ title, description, progress, reward, participants, endsIn }: typeof challenges[0]) {
  return (
    <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="text-2xl font-bold text-orange-600">{reward}</div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="font-bold">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>{participants} participants</span>
        <span>Ends in {endsIn}</span>
      </div>
    </div>
  );
}

function DiscussionItem({ title, author, replies, views, time }: typeof discussions[0]) {
  return (
    <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
      <h4 className="font-bold mb-2">{title}</h4>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>by {author}</span>
        <span>💬 {replies}</span>
        <span>👁️ {views}</span>
        <span className="ml-auto">{time}</span>
      </div>
    </div>
  );
}

function EventCard({ title, date, location, attendees }: typeof events[0]) {
  return (
    <div className="p-4 bg-gray-50 rounded-xl">
      <h4 className="font-bold mb-2">{title}</h4>
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="size-4" />
          {date}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="size-4" />
          {location}
        </div>
        <div className="flex items-center gap-2">
          <Users className="size-4" />
          {attendees} attending
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
