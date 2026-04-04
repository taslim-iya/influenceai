const mentions = [
  { source: 'Instagram', text: 'Love @yourbrand new collection! 😍', sentiment: 'positive', time: '2h ago' },
  { source: 'X/Twitter', text: 'Just tried the product, honestly disappointed...', sentiment: 'negative', time: '4h ago' },
  { source: 'TikTok', text: 'This routine changed my skin fr', sentiment: 'positive', time: '6h ago' },
  { source: 'Blog', text: 'Comparing top 5 influencers in the space', sentiment: 'neutral', time: '1d ago' },
  { source: 'Instagram', text: 'Does anyone know if they ship to EU?', sentiment: 'neutral', time: '1d ago' },
]

const sentColors: Record<string, string> = { positive: '#10B981', negative: '#EF4444', neutral: '#F59E0B' }

export default function Reputation() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#FAFAFA]">Reputation Monitor</h1>
      <div className="grid grid-cols-3 gap-4">
        {[{ l: 'Positive', v: '72%', c: '#10B981', e: '😊' }, { l: 'Neutral', v: '21%', c: '#F59E0B', e: '😐' }, { l: 'Negative', v: '7%', c: '#EF4444', e: '😟' }].map(s => (
          <div key={s.l} className="rounded-xl p-5 border border-white/5 text-center" style={{ background: '#111116' }}>
            <div className="text-3xl mb-2">{s.e}</div><div className="text-2xl font-bold" style={{ color: s.c }}>{s.v}</div><div className="text-xs text-[#71717A]">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 border border-white/5" style={{ background: '#111116' }}>
        <h2 className="text-lg font-semibold text-[#FAFAFA] mb-4">Recent Mentions</h2>
        <div className="space-y-3">
          {mentions.map((m, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/5 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: sentColors[m.sentiment] }} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1"><span className="text-xs font-medium text-[#C084FC]">{m.source}</span><span className="text-xs text-[#52525B]">{m.time}</span></div>
                <p className="text-sm text-[#A1A1AA]">{m.text}</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${sentColors[m.sentiment]}15`, color: sentColors[m.sentiment] }}>{m.sentiment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
