const CatSkeleton = () => {
	return (
		<div className='grid grid-cols-2 gap-4 md:gap-12 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3'>
			{Array.from({ length: 15 }).map((_, i) => (
				<div key={i} className='flex flex-col gap-2'>
					<div className='h-[225px] bg-gray-200 animate-pulse' />
				</div>
			))}
		</div>
	)
}

export default CatSkeleton
