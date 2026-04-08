'use client'

import { useState } from 'react'
import { Cat } from '../api/cats'

const STORAGE_KEY = 'cat-favorites'

function loadFromStorage(): Cat[] {
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
	} catch {
		return []
	}
}

export function useFavorites() {
	const [favorites, setFavorites] = useState<Cat[]>(loadFromStorage)

	const toggleFavorite = (cat: Cat) => {
		setFavorites(prev => {
			const exists = prev.some(f => f.id === cat.id)
			const next = exists ? prev.filter(f => f.id !== cat.id) : [...prev, cat]

			localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
			return next
		})
	}

	const isFavorite = (id: string) => favorites.some(f => f.id === id)

	return { favorites, toggleFavorite, isFavorite }
}
