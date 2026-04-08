'use client'

import { getCats } from '@/app/shared/api/cats'
import { useInfiniteQuery } from '@tanstack/react-query'
import Image from 'next/image'
import CatSkeleton from './CatSkeleton'
import CatError from './CatError'
import { useEffect, useRef } from 'react'
import CatCard from './CatCard'
import { useFavorites } from '@/app/shared/hooks/useFavorites'

const CatGallery = () => {
	const { favorites, isFavorite, toggleFavorite } = useFavorites()
	const {
		data,
		isLoading,
		isError,
		refetch,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery({
		queryKey: ['cats'],
		queryFn: ({ pageParam }) => getCats(pageParam),
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) =>
			lastPage.length === 0 ? undefined : allPages.length,

		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
	})

	const cats = data?.pages.flat() ?? []
	const loaderRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage()
				}
			},
			{ threshold: 1.0 },
		)

		if (loaderRef.current) observer.observe(loaderRef.current)

		return () => observer.disconnect()
	}, [hasNextPage, isFetchingNextPage, fetchNextPage])

	if (isLoading) return <CatSkeleton />
	if (isError) return <CatError onRetry={refetch} />

	return (
		<div>
			<div className='grid grid-cols-2 gap-4 md:gap-12 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3'>
				{cats.map(cat => (
					<CatCard
						key={cat.id}
						cat={cat}
						isFavorite={isFavorite(cat.id)}
						onToggle={toggleFavorite}
					/>
				))}
			</div>

			<div ref={loaderRef} className='h-10 w-full' />

			{isFetchingNextPage && (
				<div className='flex justify-center'>
					<span className='text-sm'>... загружаем еще котиков ...</span>
				</div>
			)}
		</div>
	)
}

export default CatGallery
