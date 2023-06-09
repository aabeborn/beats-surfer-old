import '@/styles/globals.css'
import {Metadata} from 'next'

import {siteConfig} from '@/config/site'
import {fontSans} from '@/lib/fonts'
import {cn} from '@/lib/utils'
import Providers from '@/components/providers'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`
	},
	description: siteConfig.description,
	themeColor: [
		{media: '(prefers-color-scheme: light)', color: 'white'},
		{media: '(prefers-color-scheme: dark)', color: 'black'}
	],
	icons: {
		icon: '/favicon/favicon.ico',
		shortcut: '/favicon/favicon-16x16.png',
		apple: '/favicon/apple-touch-icon.png'
	}
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
	return (
		<>
			<html lang="en">
				<body
					className={cn(
						'bg-background h-full w-full font-sans antialiased',
						fontSans.variable
					)}
				>
					<Providers>BeatsSurfer</Providers>
				</body>
			</html>
		</>
	)
}
