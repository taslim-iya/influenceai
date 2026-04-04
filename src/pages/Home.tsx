import { Link } from 'react-router-dom'
import { Sparkles, Calendar, BarChart3, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-[#FAFAFA]">
      <nav className="border-b border-white/5 px-6 h-16 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl text-[#C084FC]"><Sparkles size={22} /> InfluenceAI</div>
        <Link to="/dashboard" className="px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #EC4899, #8B5CF6)' }}>Get Started</Link>
      </nav>
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(192,132,252,0.15), transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Your AI <span className="text-[#C084FC]">Social Media</span> Manager</h1>
          <p className="text-xl text-[#71717A] mb-8 max-w-2xl mx-auto">Plan, create, schedule, and optimise your social media content with AI. Monitor your reputation in real-time.</p>
          <div className="flex gap-3 justify-center flex-wrap mb-10">{['📸 Instagram', '🎵 TikTok', '🐦 X/Twitter', '📌 Pinterest', '▶️ YouTube'].map(p => <span key={p} className="px-3 py-1 rounded-full border border-white/10 text-sm">{p}</span>)}</div>
          <Link to="/dashboard" className="px-8 py-4 rounded-xl text-lg font-bold text-white inline-block" style={{ background: 'linear-gradient(135deg, #EC4899, #8B5CF6)' }}>Start Creating →</Link>
        </div>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {[
          { icon: Calendar, title: 'Content Calendar', desc: 'Plan and schedule posts across all platforms.' },
          { icon: Sparkles, title: 'AI Content Gen', desc: 'Generate captions, hashtags, and ideas instantly.' },
          { icon: BarChart3, title: 'Performance', desc: 'Track engagement, growth, and best posting times.' },
          { icon: Shield, title: 'Reputation', desc: 'Monitor mentions and sentiment across the web.' },
        ].map(f => (
          <div key={f.title} className="rounded-xl p-6 border border-white/5 text-center" style={{ background: '#111116' }}>
            <f.icon className="mx-auto mb-4 text-[#C084FC]" size={32} /><h3 className="font-semibold mb-2">{f.title}</h3><p className="text-sm text-[#71717A]">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
