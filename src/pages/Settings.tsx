import { Link2, Sparkles, Clock } from 'lucide-react'

export default function Settings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-[#FAFAFA]">Settings</h1>
      {[
        { icon: Link2, title: 'Connected Platforms', items: [['Instagram', 'Connected ✅'], ['TikTok', 'Connected ✅'], ['X/Twitter', 'Connected ✅'], ['Pinterest', 'Not connected']] },
        { icon: Sparkles, title: 'AI Tone', items: [['Voice', 'Casual & Friendly'], ['Emoji usage', 'Moderate'], ['Hashtag style', 'Trending + Niche mix']] },
        { icon: Clock, title: 'Posting Schedule', items: [['Weekdays', '9 AM, 2 PM, 7 PM'], ['Weekends', '10 AM, 4 PM'], ['Timezone', 'Europe/London']] },
      ].map(s => (
        <div key={s.title} className="rounded-xl p-6 border border-white/5" style={{ background: '#111116' }}>
          <div className="flex items-center gap-3 mb-4"><s.icon size={20} className="text-[#C084FC]" /><h2 className="font-semibold text-[#FAFAFA]">{s.title}</h2></div>
          <div className="space-y-2">{s.items.map(([k, v]) => (
            <div key={k} className="flex justify-between p-3 rounded-lg bg-white/5"><span className="text-sm text-[#71717A]">{k}</span><span className="text-sm text-[#FAFAFA]">{v}</span></div>
          ))}</div>
        </div>
      ))}
    </div>
  )
}
