'use client'

import { Cat } from '@/app/shared/api/cats'
import HeartIcon from '@/app/shared/ui/HeartIcon'
import Image from 'next/image'

interface CatCardProps {
	cat: Cat
	isFavorite: boolean
	onToggle: (cat: Cat) => void
}

const CatCard = ({ cat, isFavorite, onToggle }: CatCardProps) => {
	return (
		<div className='relative overflow-hidden hover:shadow-2xl group hover:scale-110 transition-all duration-300'>
			<Image
				src={cat.url}
				alt='cat'
				width={300}
				height={300}
				className='w-full h-[225px] object-cover '
			/>

			<button
				onClick={() => onToggle(cat)}
				className='absolute bottom-3 right-2 transition-opacity duration-300 cursor-pointer active:[&_path]:fill-[#FF3A00] opacity-0 group-hover:opacity-100'
			>
				<HeartIcon filled={isFavorite} />
			</button>
		</div>
	)
}

export default CatCard
