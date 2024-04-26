import Image from 'next/image'
import React from 'react'

interface IAuthComponent {
	children: React.ReactNode
}
export default function AuthLayout({ children }: IAuthComponent) {
	return (
		<div className='w-full flex flex-col items-end h-full sm:px-0 '>
			<div className='h-full w-1/2 sm:bg-white md:py-14'>{children}</div>
		</div>
	)
}
