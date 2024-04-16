import React from 'react'
import Button from './Button'

interface IAuthComponent {
	children: React.ReactNode
}
export default function AuthComponent({ children }: IAuthComponent) {
	return (
		<div className='flex w-full h-screen justify-center sm:justify-end'>
			<div className='sm:bg-white sm:w-1/2 sm:p-4'>
				<div className='flex flex-col items-center justify-center'>{children}</div>
			</div>
		</div>
	)
}
