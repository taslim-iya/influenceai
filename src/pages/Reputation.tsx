import { useAppStore } from '@/stores/appStore'
import { useState } from 'react'
import { CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'

const sentimentColors: Record<string, string> = { positive: '#10B981', neutral: '#94A3B8', negative: '#EF4444' }

export default function Reputation() {
  const { mentions, respondToMention } = useAppStore()
  const [filter, setFilter] = useState<string>('all')

  const filtered = filter === 'all' ? mentions : mentions.filter(m => m.sentiment === filter)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Reputation Monitor</h1>
      <div className="grid grid-cols-3 gap-4">
        {['positive', 'neutral', 'negative'].map(s => (
          <div key={s} className="rounded-xl p-4 border border-white/10 text-center" style={{ background: '#13111C' }}>
            <div className="text-2xl font-bold" style={{ color: sentimentColors[s] }}>{mentions.filter(m => m.sentiment === s).length}</div>
            <div className="text-xs text-[#94A3B8] capitalize">{s}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {['all', 'positive', 'neutral', 'negative'].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize ${filter === s ? 'bg-[#C084FC] text-white' : 'bg-white/5 text-[#94A3B8]'}`}>{s}</button>
        ))}
      </div>
      <div className="space-y-3">
        {filtered.map(m => (
          <div key={m.id} className="rounded-xl p-5 border border-white/10 flex items-start gap-4" style={{ background: '#13111C' }}>
            <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: sentimentColors[m.sentiment] }} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-[#F1F5F9]">{m.author}</span>
                <span className="text-xs text-[#64748B]">{m.platform} · {m.date}</span>
              </div>
              <p className="text-sm text-[#CBD5E1] mb-2">{m.content}</p>
              <div className="flex items-center gap-3">
                <span className="text-xs capitalize px-2 py-0.5 rounded-full" style={{ color: sentimentColors[m.sentiment], background: `${sentimentColors[m.sentiment]}15` }}>{m.sentiment}</span>
                {m.responded ? (
                  <span className="text-xs text-[#10B981] flex items-center gap-1"><CheckCircle size={12} /> Responded</span>
                ) : (
                  <button onClick={() => respondToMention(m.id)} className="text-xs text-[#C084FC] flex items-center gap-1 hover:underline"><MessageSquare size={12} /> Mark Responded</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
