import { Plus } from 'lucide-react'

const posts = [
  { title: 'Morning routine reel', platform: '📸', type: 'Reel', date: 'Mon 9 AM', engagement: '4.2K', status: 'scheduled', color: '#10B981' },
  { title: 'Product review thread', platform: '🐦', type: 'Thread', date: 'Mon 2 PM', engagement: '—', status: 'scheduled', color: '#10B981' },
  { title: 'Behind the scenes', platform: '🎵', type: 'Video', date: 'Tue 11 AM', engagement: '—', status: 'draft', color: '#71717A' },
  { title: 'Weekly tips carousel', platform: '📸', type: 'Carousel', date: 'Wed 10 AM', engagement: '—', status: 'scheduled', color: '#10B981' },
  { title: 'Q&A Stories', platform: '📸', type: 'Stories', date: 'Thu 6 PM', engagement: '—', status: 'idea', color: '#C084FC' },
  { title: 'Trending sound remix', platform: '🎵', type: 'Video', date: 'Fri 12 PM', engagement: '—', status: 'idea', color: '#C084FC' },
]

export default function Content() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#FAFAFA]">Content Planner</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #EC4899, #8B5CF6)' }}><Plus size={16} /> Create Post</button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(p => (
          <div key={p.title} className="rounded-xl p-5 border border-white/5" style={{ background: '#111116' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{p.platform}</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ background: `${p.color}15`, color: p.color }}>{p.status}</span>
            </div>
            <h3 className="font-semibold text-[#FAFAFA] text-sm mb-1">{p.title}</h3>
            <div className="text-xs text-[#71717A]">{p.type} · {p.date}</div>
            {p.engagement !== '—' && <div className="text-xs text-[#EC4899] mt-2">Est. reach: {p.engagement}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
