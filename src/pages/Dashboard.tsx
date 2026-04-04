import { Users, Heart, Eye, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Followers', value: '124.5K', icon: Users, color: '#C084FC', change: '+2.3K this week' },
  { label: 'Engagement', value: '5.8%', icon: Heart, color: '#EC4899', change: '+0.4% vs last week' },
  { label: 'Impressions', value: '892K', icon: Eye, color: '#3B82F6', change: '+15% this month' },
  { label: 'Growth Rate', value: '+1.9%', icon: TrendingUp, color: '#10B981', change: 'Weekly average' },
]

const scheduled = [
  { title: 'Morning routine reel', platform: '📸 Instagram', time: 'Today 9:00 AM', status: 'scheduled' },
  { title: 'Product review thread', platform: '🐦 X/Twitter', time: 'Today 2:00 PM', status: 'scheduled' },
  { title: 'Behind the scenes', platform: '🎵 TikTok', time: 'Tomorrow 11:00 AM', status: 'draft' },
  { title: 'Weekly tips carousel', platform: '📸 Instagram', time: 'Wed 10:00 AM', status: 'scheduled' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#FAFAFA]">Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="rounded-xl p-5 border border-white/5" style={{ background: '#111116' }}>
            <s.icon size={20} style={{ color: s.color }} className="mb-2" />
            <div className="text-2xl font-bold text-[#FAFAFA]">{s.value}</div>
            <div className="text-xs text-[#71717A]">{s.label}</div>
            <div className="text-xs mt-1" style={{ color: s.color }}>{s.change}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 border border-white/5" style={{ background: '#111116' }}>
        <h2 className="text-lg font-semibold text-[#FAFAFA] mb-4">Scheduled Content</h2>
        <div className="space-y-3">
          {scheduled.map(p => (
            <div key={p.title} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
              <div><div className="text-sm text-[#FAFAFA]">{p.title}</div><div className="text-xs text-[#71717A]">{p.platform} · {p.time}</div></div>
              <span className={`text-xs px-2 py-1 rounded-full ${p.status === 'scheduled' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-white/5 text-[#71717A]'}`}>{p.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
