'use client'

import { ParticleBackground } from '@/components/ui/particle-background'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <ParticleBackground />
      
      <div className="w-full max-w-4xl px-8 py-12 text-center z-10">
        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to LogiFlow
          </h1>
          <p className="text-xl text-gold-400 font-light">
            Streamline Your Logistics, Amplify Your Efficiency
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-slide-down">
          <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-2">Smart Tracking</h3>
            <p className="text-white/60">Real-time monitoring of your logistics operations</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
            <p className="text-white/60">Data-driven insights for better decision making</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-2">Automation</h3>
            <p className="text-white/60">Streamline your workflow with smart automation</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-x-4">
          <button
            onClick={() => router.push('/login')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg
                     transform transition-all duration-200 hover:scale-105"
          >
            Sign In
          </button>
          <button
            onClick={() => router.push('/sign-up')}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg
                     transform transition-all duration-200 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
