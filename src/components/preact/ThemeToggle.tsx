import { useEffect, useState } from 'preact/hooks'
import type { FunctionalComponent } from 'preact'

export default function ThemeToggle(): FunctionalComponent {
	const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

	const handleClick = () => {
		console.log('hola2')
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		localStorage.setItem('theme', theme)
	}, [theme])

	return <button onClick={handleClick}>{theme === 'light' ? '🌙' : '🌞'}</button>
}

/*
import React from 'react'

interface Props {
	title: string
}

const ThemeToggle = ({ title }: Props) => {
	const handleClick = () => {
		console.log('hola2')
		// setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return <button onClick={handleClick}>🌞</button>
}

export default ThemeToggle
*/
