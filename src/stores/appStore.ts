import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Post {
  id: string; platform: string; content: string; status: 'draft' | 'scheduled' | 'published'; likes: number; comments: number; shares: number; reach: number; scheduledAt?: string; publishedAt?: string
}
export interface Mention {
  id: string; platform: string; author: string; content: string; sentiment: 'positive' | 'neutral' | 'negative'; date: string; responded: boolean
}
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8) }

const DEMO_POSTS: Post[] = [
  { id: '1', platform: 'Instagram', content: 'Behind the scenes of our latest photoshoot 📸', status: 'published', likes: 2847, comments: 156, shares: 89, reach: 18400, publishedAt: '2026-04-03' },
  { id: '2', platform: 'TikTok', content: 'Day in my life as a creator 🎬', status: 'published', likes: 12300, comments: 892, shares: 456, reach: 87600, publishedAt: '2026-04-04' },
  { id: '3', platform: 'YouTube', content: 'How I grew to 100K followers in 6 months', status: 'published', likes: 4521, comments: 312, shares: 678, reach: 45200, publishedAt: '2026-04-01' },
  { id: '4', platform: 'Twitter', content: 'Thread: 10 lessons I learned this year 🧵', status: 'scheduled', likes: 0, comments: 0, shares: 0, reach: 0, scheduledAt: '2026-04-08' },
  { id: '5', platform: 'Instagram', content: 'New collection dropping next week 👀', status: 'draft', likes: 0, comments: 0, shares: 0, reach: 0 },
]
const DEMO_MENTIONS: Mention[] = [
  { id: '1', platform: 'Twitter', author: '@techreviewer', content: 'Just tried the product recommended by @you — absolutely love it!', sentiment: 'positive', date: '2026-04-05', responded: true },
  { id: '2', platform: 'Instagram', author: '@fashionblog', content: 'Featured in our top 10 creators to watch list', sentiment: 'positive', date: '2026-04-04', responded: false },
  { id: '3', platform: 'Reddit', author: 'u/skeptical_user', content: 'Is this actually worth it or just another paid promo?', sentiment: 'negative', date: '2026-04-03', responded: false },
  { id: '4', platform: 'YouTube', author: 'ReactFan', content: 'Great tutorial, helped me understand hooks better', sentiment: 'positive', date: '2026-04-02', responded: true },
]

interface AppState {
  posts: Post[]; mentions: Mention[]
  addPost: (p: Omit<Post, 'id' | 'likes' | 'comments' | 'shares' | 'reach'>) => void
  updatePost: (id: string, updates: Partial<Post>) => void
  deletePost: (id: string) => void
  publishPost: (id: string) => void
  respondToMention: (id: string) => void
}

export const useAppStore = create<AppState>()(persist((set) => ({
  posts: DEMO_POSTS, mentions: DEMO_MENTIONS,
  addPost: (p) => set(s => ({ posts: [...s.posts, { ...p, id: uid(), likes: 0, comments: 0, shares: 0, reach: 0 }] })),
  updatePost: (id, u) => set(s => ({ posts: s.posts.map(p => p.id === id ? { ...p, ...u } : p) })),
  deletePost: (id) => set(s => ({ posts: s.posts.filter(p => p.id !== id) })),
  publishPost: (id) => set(s => ({ posts: s.posts.map(p => p.id === id ? { ...p, status: 'published', publishedAt: new Date().toISOString().split('T')[0] } : p) })),
  respondToMention: (id) => set(s => ({ mentions: s.mentions.map(m => m.id === id ? { ...m, responded: true } : m) })),
}), { name: 'influenceai-store' }))
