'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const currentPath = usePathname()
	const isActive = (path: string) => currentPath === path

	return (
		<header className='w-full h-[64px] bg-primary text-white text-sm shadow-md'>
			<div className='max-w-[1440px] h-full mx-auto px-4 md:px-[62px]'>
				<nav className='h-full'>
					<ul className='flex h-full'>
						<li className='h-full'>
							<Link
								className={`flex items-center h-full px-[23px] transition-colors ${
									isActive('/')
										? 'bg-primary-active text-white'
										: 'text-nav-muted hover:text-white hover:bg-primary-active/50'
								}`}
								href='/'
							>
								Все котики
							</Link>
						</li>
						<li className='h-full'>
							<Link
								className={`flex items-center h-full px-[23px] transition-colors ${
									isActive('/favorites')
										? 'bg-primary-active text-white'
										: 'text-nav-muted hover:text-white hover:bg-primary-active/50'
								}`}
								href='/favorites'
							>
								Любимые котики
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
