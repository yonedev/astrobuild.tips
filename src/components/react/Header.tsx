import React from 'react'

interface Props {
	title: string
}

const Header = ({ title }: Props) => {
	/**
	 * Componente React
	 *
	 * className en lugar de class para los estilos, ya que class es una palabra reservada de React
	 */
	return (
		<div className="mx-auto max-w-screen-xl p-4 py-8">
			<h1 className="mb-4">
				<span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
					{title}
				</span>
			</h1>
		</div>
	)
}

export default Header
