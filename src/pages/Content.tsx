import { useAppStore, type Post } from '@/stores/appStore'
import { useState } from 'react'
import { Plus, Trash2, Send, Heart, Eye, MessageCircle } from 'lucide-react'

const statusColors: Record<string, string> = { draft: '#94A3B8', scheduled: '#F59E0B', published: '#10B981' }
const platformColors: Record<string, string> = { Instagram: '#E1306C', TikTok: '#000000', YouTube: '#FF0000', Twitter: '#1DA1F2', LinkedIn: '#0077B5' }

export default function Content() {
  const { posts, addPost, deletePost, publishPost, updatePost } = useAppStore()
  const [filter, setFilter] = useState<string>('all')
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState({ platform: 'Instagram', content: '', status: 'draft' as Post['status'] })

  const filtered = filter === 'all' ? posts : posts.filter(p => p.status === filter)
  const fmt = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}K` : n.toString()

  const handleAdd = () => {
    if (!form.content.trim()) return
    addPost(form)
    setForm({ platform: 'Instagram', content: '', status: 'draft' })
    setAdding(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#F1F5F9]">Content</h1>
        <button onClick={() => setAdding(!adding)} className="h-9 px-4 rounded-lg bg-[#C084FC] text-white text-sm font-medium flex items-center gap-2"><Plus size={14} /> New Post</button>
      </div>
      {adding && (
        <div className="rounded-xl p-5 border border-[#C084FC]/20 bg-[#C084FC]/5">
          <div className="flex gap-3 mb-3">
            <select value={form.platform} onChange={e => setForm(p => ({ ...p, platform: e.target.value }))} className="h-9 px-3 rounded-lg border border-white/10 bg-white/5 text-sm text-[#F1F5F9] outline-none">
              {['Instagram', 'TikTok', 'YouTube', 'Twitter', 'LinkedIn'].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value as Post['status'] }))} className="h-9 px-3 rounded-lg border border-white/10 bg-white/5 text-sm text-[#F1F5F9] outline-none">
              <option value="draft">Draft</option><option value="scheduled">Scheduled</option>
            </select>
          </div>
          <textarea value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} placeholder="What's your post about?" className="w-full h-20 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-[#F1F5F9] outline-none resize-none placeholder-[#64748B]" />
          <div className="flex gap-2 mt-3">
            <button onClick={handleAdd} disabled={!form.content.trim()} className="h-9 px-4 rounded-lg bg-[#C084FC] text-white text-sm font-medium disabled:opacity-40">Save</button>
            <button onClick={() => setAdding(false)} className="h-9 px-4 rounded-lg border border-white/10 text-[#94A3B8] text-sm">Cancel</button>
          </div>
        </div>
      )}
      <div className="flex gap-2">
        {['all', 'draft', 'scheduled', 'published'].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize ${filter === s ? 'bg-[#C084FC] text-white' : 'bg-white/5 text-[#94A3B8]'}`}>{s} ({s === 'all' ? posts.length : posts.filter(p => p.status === s).length})</button>
        ))}
      </div>
      <div className="space-y-3">
        {filtered.map(p => (
          <div key={p.id} className="rounded-xl p-5 border border-white/10" style={{ background: '#13111C' }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ color: platformColors[p.platform] || '#94A3B8', background: `${platformColors[p.platform] || '#94A3B8'}20` }}>{p.platform}</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: statusColors[p.status], background: `${statusColors[p.status]}15` }}>{p.status}</span>
              </div>
              <div className="flex gap-2">
                {p.status !== 'published' && <button onClick={() => publishPost(p.id)} className="h-7 px-2.5 rounded-lg border border-[#10B981]/30 text-[#10B981] text-xs hover:bg-[#10B981]/10 flex items-center gap-1"><Send size={10} /> Publish</button>}
                <button onClick={() => deletePost(p.id)} className="p-1 rounded hover:bg-red-500/10"><Trash2 size={14} className="text-[#64748B]" /></button>
              </div>
            </div>
            <p className="text-sm text-[#CBD5E1] mb-3">{p.content}</p>
            {p.status === 'published' && (
              <div className="flex gap-4 text-xs text-[#94A3B8]">
                <span className="flex items-center gap-1"><Heart size={12} className="text-[#EF4444]" />{fmt(p.likes)}</span>
                <span className="flex items-center gap-1"><MessageCircle size={12} className="text-[#3B82F6]" />{fmt(p.comments)}</span>
                <span className="flex items-center gap-1"><Eye size={12} className="text-[#C084FC]" />{fmt(p.reach)}</span>
              </div>
            )}
            {p.publishedAt && <div className="text-xs text-[#64748B] mt-2">Published {p.publishedAt}</div>}
            {p.scheduledAt && <div className="text-xs text-[#F59E0B] mt-2">Scheduled for {p.scheduledAt}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
