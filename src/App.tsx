import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Content from '@/pages/Content'
import Analytics from '@/pages/Analytics'
import Reputation from '@/pages/Reputation'
import Settings from '@/pages/Settings'

export default function App() {
  const { pathname } = useLocation()
  const isLanding = pathname === '/'
  return (
    <div className="min-h-screen" style={{ background: '#0D0D12' }}>
      {isLanding ? <Routes><Route path="/" element={<Home />} /></Routes> : (
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-[240px] p-6 min-h-screen">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/content" element={<Content />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reputation" element={<Reputation />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      )}
    </div>
  )
}
