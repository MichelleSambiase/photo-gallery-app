import React from 'react'

interface IAuthComponent {
	children: React.ReactNode
}
export default function AuthComponent({ children }: IAuthComponent) {
	return (
		<div className='flex w-full h-screen justify-end'>
			<div className='bg-white w-1/2  p-4'>
				<div className='flex flex-col items-center justify-center'>{children}</div>
			</div>
		</div>
	)
}
