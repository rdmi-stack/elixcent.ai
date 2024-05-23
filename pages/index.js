import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className="bg-slate-900 text-white flex items-center justify-center">
      <div className="bg-slate-800 p-[15px] rounded flex items-center justify-center flex-col">
        <h2>Next.js Tailwind Pre-Installed</h2>
        <i>Created by <a className="text-blue-400" href="https://replit.com/@bddy">bddy (buddy)</a></i>
      </div>
    </main>
  )
}
