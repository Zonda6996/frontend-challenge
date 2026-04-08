interface CatErrorProps {
	onRetry: () => void
}

const CatError = ({ onRetry }: CatErrorProps) => {
	return (
		<div className='flex flex-col items-center gap-3 p-10 border border-gray-200 rounded-xl'>
			<div className='w-10 h-10 rounded-full bg-red-50 flex items-center justify-center'>
				<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
					<circle cx='10' cy='10' r='9' stroke='#E24B4A' strokeWidth='1.5' />
					<path
						d='M10 6v4M10 13h.01'
						stroke='#E24B4A'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
				</svg>
			</div>
			<p className='font-medium text-foreground'>
				Не удалось загрузить котиков
			</p>
			<p className='text-sm text-gray-500'>
				Проверьте подключение и попробуйте снова
			</p>
			<button
				onClick={onRetry}
				className='mt-1 px-5 py-2 bg-primary hover:bg-primary-active text-white text-sm font-medium rounded-lg transition-colors cursor-pointer'
			>
				Повторить
			</button>
		</div>
	)
}

export default CatError
