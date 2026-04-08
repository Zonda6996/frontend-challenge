const API_URL = 'https://api.thecatapi.com/v1/images/search'

export interface Cat {
	id: string
	url: string
	width: number
	height: number
}

export async function getCats(page = 0, limit = 20): Promise<Cat[]> {
	const res = await fetch(`${API_URL}?limit=${limit}&page=${page}&order=ASC`, {
		headers: {
			'x-api-key': process.env.NEXT_PUBLIC_CAT_API as string,
		},
	})

	if (!res.ok) throw new Error('Failed to fetch cats')

	return res.json()
}
