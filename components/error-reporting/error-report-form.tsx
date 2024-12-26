'use client'

import { useState } from 'react'

interface ErrorReportFormProps {
  userId: string
  onSubmit?: () => void
}

type ErrorType = 'technical' | 'functional' | 'data' | 'other'

export function ErrorReportForm({ userId, onSubmit }: ErrorReportFormProps) {
  const [errorType, setErrorType] = useState<ErrorType>('technical')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      const response = await fetch('/api/errors/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          error_type: errorType,
          description,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit error report')
      }

      setSuccess(true)
      setDescription('')
      onSubmit?.()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Error Type
        </label>
        <select
          value={errorType}
          onChange={(e) => setErrorType(e.target.value as ErrorType)}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="technical">Technical Error</option>
          <option value="functional">Functional Error</option>
          <option value="data">Data Error</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-3 py-2 min-h-[100px]"
          required
          placeholder="Please describe the error..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Report Error'}
      </button>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {success && (
        <p className="text-green-500 text-sm">Error report submitted successfully</p>
      )}
    </form>
  )
} 