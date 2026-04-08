'use client'

import { getCats } from '@/app/shared/api/cats'
import { useInfiniteQuery } from '@tanstack/react-query'
import Image from 'next/image'
import CatSkeleton from './CatSkeleton'
import CatError from './CatError'
import { useEffect, useRef } from 'react'

const CatGallery = () => {
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
			lastPage.length < 20 ? undefined : allPages.length,
	})

	const loaderRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage()
				}
			},
			{ threshold: 0.1 },
		)

		if (loaderRef.current) observer.observe(loaderRef.current)

		return () => observer.disconnect()
	}, [hasNextPage, isFetchingNextPage, fetchNextPage])

	const cats = data?.pages.flat() ?? []

	if (isLoading) return <CatSkeleton />
	if (isError) return <CatError onRetry={refetch} />

	return (
		<div>
			<div className='grid grid-cols-2 gap-4 md:gap-12 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3'>
				{cats.map(cat => (
					<Image
						key={cat.id}
						src={cat.url}
						alt='cat'
						width={300}
						height={300}
						className='w-full h-[225px] object-cover'
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
