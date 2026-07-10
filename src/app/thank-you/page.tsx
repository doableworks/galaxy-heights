'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import TransitionVertical from '@/animations/TransitionVertical'
import { CheckCircle } from 'lucide-react'

function ThankYouPage() {
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Separate useEffect for navigation when countdown reaches 0
  useEffect(() => {
    if (countdown === 0) {
      router.push('/')
    }
  }, [countdown, router])

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <TransitionVertical>
        <div className="text-center max-w-md mx-auto">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-[var(--gold-colour)] mx-auto" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase">
            Thank You!
          </h1>
          
          <p className="text-lg text-primary/80 mb-8">
            Your submission has been received successfully. We&apos;ll get back to you soon.
          </p>

          {/* Countdown */}
          <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
            <p className="text-primary mb-2">
              Redirecting to homepage in
            </p>
            <div className="text-3xl font-bold text-[var(--dark-blue)]">
              {countdown}
            </div>
            <p className="text-sm text-primary/60 mt-2">
              seconds
            </p>
          </div>
        </div>
      </TransitionVertical>
    </main>
  )
}

export default ThankYouPage