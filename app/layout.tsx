import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './widgets/Header/Header'

const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-roboto',
})

export const metadata: Metadata = {
	title: 'Кошачий пинтерест',
	description: 'Пинтерест для котиков.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${roboto.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col'>
				<Header />
				<main className='w-full max-w-[1440px] mx-auto px-4 md:px-[62px]'>{children}</main>
			</body>
		</html>
	)
}
