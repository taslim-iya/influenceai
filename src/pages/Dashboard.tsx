import { useAppStore } from '@/stores/appStore'
import { Link } from 'react-router-dom'
import { Heart, Eye, MessageCircle, Share2, ArrowUpRight, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  const { posts, mentions } = useAppStore()
  const published = posts.filter(p => p.status === 'published')
  const totalLikes = published.reduce((s, p) => s + p.likes, 0)
  const totalReach = published.reduce((s, p) => s + p.reach, 0)
  const totalComments = published.reduce((s, p) => s + p.comments, 0)
  const totalShares = published.reduce((s, p) => s + p.shares, 0)
  const engagementRate = totalReach > 0 ? ((totalLikes + totalComments + totalShares) / totalReach * 100).toFixed(1) : '0'
  const sentimentPositive = mentions.filter(m => m.sentiment === 'positive').length
  const sentimentNegative = mentions.filter(m => m.sentiment === 'negative').length

  const fmt = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}K` : n.toString()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Reach', value: fmt(totalReach), icon: Eye, color: '#C084FC' },
          { label: 'Engagement', value: `${engagementRate}%`, icon: TrendingUp, color: '#F472B6' },
          { label: 'Total Likes', value: fmt(totalLikes), icon: Heart, color: '#EF4444' },
          { label: 'Comments', value: fmt(totalComments), icon: MessageCircle, color: '#3B82F6' },
        ].map(s => (
          <div key={s.label} className="rounded-xl p-5 border border-white/10" style={{ background: '#13111C' }}>
            <s.icon size={20} style={{ color: s.color }} className="mb-2" />
            <div className="text-2xl font-bold text-[#F1F5F9]">{s.value}</div>
            <div className="text-xs text-[#94A3B8]">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl p-5 border border-white/10" style={{ background: '#13111C' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#F1F5F9]">Top Posts</h2>
            <Link to="/content" className="text-xs text-[#C084FC] flex items-center gap-1">View all <ArrowUpRight size={12} /></Link>
          </div>
          <div className="space-y-3">
            {published.sort((a, b) => b.reach - a.reach).slice(0, 4).map(p => (
              <div key={p.id} className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#F1F5F9] line-clamp-1">{p.content}</div>
                  <div className="text-xs text-[#64748B] mt-0.5">{p.platform} · {p.publishedAt}</div>
                </div>
                <div className="flex gap-3 text-xs text-[#94A3B8]">
                  <span className="flex items-center gap-1"><Heart size={10} className="text-[#EF4444]" />{fmt(p.likes)}</span>
                  <span className="flex items-center gap-1"><Eye size={10} className="text-[#C084FC]" />{fmt(p.reach)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-5 border border-white/10" style={{ background: '#13111C' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#F1F5F9]">Reputation</h2>
            <Link to="/reputation" className="text-xs text-[#C084FC] flex items-center gap-1">View all <ArrowUpRight size={12} /></Link>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1 p-3 rounded-lg bg-[#10B981]/10 text-center"><div className="text-xl font-bold text-[#10B981]">{sentimentPositive}</div><div className="text-xs text-[#94A3B8]">Positive</div></div>
            <div className="flex-1 p-3 rounded-lg bg-[#EF4444]/10 text-center"><div className="text-xl font-bold text-[#EF4444]">{sentimentNegative}</div><div className="text-xs text-[#94A3B8]">Negative</div></div>
            <div className="flex-1 p-3 rounded-lg bg-white/5 text-center"><div className="text-xl font-bold text-[#94A3B8]">{mentions.filter(m => !m.responded).length}</div><div className="text-xs text-[#94A3B8]">Unread</div></div>
          </div>
          <div className="space-y-2">
            {mentions.filter(m => !m.responded).slice(0, 3).map(m => (
              <div key={m.id} className="p-3 rounded-lg bg-white/5">
                <div className="text-sm text-[#F1F5F9] line-clamp-1">{m.content}</div>
                <div className="text-xs text-[#64748B] mt-0.5">{m.author} · {m.platform}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl p-5 border border-white/10" style={{ background: '#13111C' }}>
        <h2 className="text-lg font-semibold text-[#F1F5F9] mb-3">Content Calendar</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-white/5 text-center"><div className="text-xl font-bold text-[#C084FC]">{posts.filter(p => p.status === 'draft').length}</div><div className="text-xs text-[#94A3B8]">Drafts</div></div>
          <div className="p-3 rounded-lg bg-white/5 text-center"><div className="text-xl font-bold text-[#F59E0B]">{posts.filter(p => p.status === 'scheduled').length}</div><div className="text-xs text-[#94A3B8]">Scheduled</div></div>
          <div className="p-3 rounded-lg bg-white/5 text-center"><div className="text-xl font-bold text-[#10B981]">{published.length}</div><div className="text-xs text-[#94A3B8]">Published</div></div>
        </div>
      </div>
    </div>
  )
}
