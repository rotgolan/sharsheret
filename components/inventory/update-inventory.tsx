'use client'

import { useState } from 'react'

interface UpdateInventoryProps {
  itemId: string
  initialQuantity: number
  onUpdate?: () => void
}

export function UpdateInventory({ itemId, initialQuantity, onUpdate }: UpdateInventoryProps) {
  const [quantity, setQuantity] = useState(initialQuantity)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleUpdate = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/inventory/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          quantity,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update inventory')
      }

      onUpdate?.()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded px-2 py-1"
          min={0}
        />
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-1 rounded disabled:opacity-50"
        >
          {loading ? 'Updating...' : 'Update Quantity'}
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
} 