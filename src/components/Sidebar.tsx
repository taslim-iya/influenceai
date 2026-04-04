import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, PenTool, BarChart3, Shield, Settings, Sparkles } from 'lucide-react'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/content', label: 'Content', icon: PenTool },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/reputation', label: 'Reputation', icon: Shield },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const { pathname } = useLocation()
  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] border-r border-white/5 p-4 flex flex-col" style={{ background: '#08080D' }}>
      <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-8 px-2 text-[#C084FC]"><Sparkles size={22} /> InfluenceAI</Link>
      <nav className="space-y-1 flex-1">
        {nav.map(n => (
          <Link key={n.to} to={n.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${pathname === n.to ? 'bg-[#C084FC]/10 text-[#C084FC]' : 'text-[#71717A] hover:text-white hover:bg-white/5'}`}><n.icon size={18} /> {n.label}</Link>
        ))}
      </nav>
    </aside>
  )
}
