'use client'

import { useFavorites } from '../shared/hooks/useFavorites'
import CatCard from '../widgets/CatGallery/CatCard'

const FavoritesPage = () => {
	const { favorites, isFavorite, toggleFavorite } = useFavorites()

	return (
		<div className='grid grid-cols-2 gap-4 md:gap-12 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3'>
			{favorites.map(cat => (
				<CatCard
					key={cat.id}
					cat={cat}
					isFavorite={isFavorite(cat.id)}
					onToggle={toggleFavorite}
				/>
			))}
		</div>
	)
}

export default FavoritesPage
