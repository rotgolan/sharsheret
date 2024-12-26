import { LoginForm } from '@/components/auth/login-form'
import { ParticleBackground } from '@/components/ui/particle-background'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <ParticleBackground />
      
      <div className="w-full max-w-md px-8 py-12 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl z-10 animate-fade-in">
        {/* Logo and Slogan */}
        <div className="text-center mb-8 animate-slide-down">
          <h1 className="text-3xl font-bold text-white mb-2">
            LogiFlow
          </h1>
          <p className="text-gold-400 text-sm font-light">
            Optimizing Logistics, Empowering Efficiency
          </p>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h2 className="text-xl text-white/90 font-light">
            Welcome Back
          </h2>
          <p className="text-sm text-white/60 mt-1">
            Enter your credentials to access your account
          </p>
        </div>

        <LoginForm />

        {/* Additional Links */}
        <div className="mt-6 text-center text-sm">
          <a href="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-colors">
            Forgot your password?
          </a>
          <div className="mt-4 text-white/60">
            Don't have an account?{' '}
            <a href="/sign-up" className="text-gold-400 hover:text-gold-300 transition-colors">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 