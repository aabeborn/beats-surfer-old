'use client'

import * as React from 'react'
import {ThemeProvider} from 'next-themes'

interface Props {
	children: React.ReactNode
}

export default function Providers({children}: Props) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
		>
			{children}
		</ThemeProvider>
	)
}
