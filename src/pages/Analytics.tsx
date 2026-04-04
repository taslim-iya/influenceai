const platforms = [
  { name: 'Instagram', emoji: '📸', followers: '82.3K', engagement: '5.8%', growth: '+1.2K', color: '#E1306C' },
  { name: 'TikTok', emoji: '🎵', followers: '34.1K', engagement: '8.4%', growth: '+890', color: '#FF0050' },
  { name: 'X/Twitter', emoji: '🐦', followers: '8.1K', engagement: '3.2%', growth: '+210', color: '#1DA1F2' },
]

const bestTimes = [
  { day: 'Mon', hours: [9, 14, 19] }, { day: 'Tue', hours: [11, 18] }, { day: 'Wed', hours: [10, 15, 20] },
  { day: 'Thu', hours: [9, 18] }, { day: 'Fri', hours: [12, 17] }, { day: 'Sat', hours: [10, 14] }, { day: 'Sun', hours: [11, 16] },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#FAFAFA]">Analytics</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {platforms.map(p => (
          <div key={p.name} className="rounded-xl p-5 border border-white/5" style={{ background: '#111116' }}>
            <div className="flex items-center gap-2 mb-3"><span className="text-2xl">{p.emoji}</span><span className="font-semibold text-[#FAFAFA]">{p.name}</span></div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-[#71717A]">Followers</span><span className="font-bold text-[#FAFAFA]">{p.followers}</span></div>
              <div className="flex justify-between"><span className="text-[#71717A]">Engagement</span><span className="font-bold" style={{ color: p.color }}>{p.engagement}</span></div>
              <div className="flex justify-between"><span className="text-[#71717A]">Growth (week)</span><span className="text-[#10B981] font-bold">{p.growth}</span></div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 border border-white/5" style={{ background: '#111116' }}>
        <h2 className="text-lg font-semibold text-[#FAFAFA] mb-4">Best Posting Times</h2>
        <div className="grid grid-cols-7 gap-2">
          {bestTimes.map(d => (
            <div key={d.day} className="text-center">
              <div className="text-xs text-[#71717A] mb-2">{d.day}</div>
              {[8,9,10,11,12,13,14,15,16,17,18,19,20].map(h => (
                <div key={h} className={`h-4 rounded-sm mb-1 ${d.hours.includes(h) ? 'bg-[#C084FC]' : 'bg-white/5'}`} title={`${h}:00`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
