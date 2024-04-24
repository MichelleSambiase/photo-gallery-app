import Image from 'next/image'
import React from 'react'

interface IAuthComponent {
	children: React.ReactNode
}
export default function AuthLayout({ children }: IAuthComponent) {
	return (
		<div className='w-full px-4 md:px-0'>
			<div className='sm:bg-white sm:w-1/2 sm:p-4'>
				<div className=''>{children}</div>
			</div>
		</div>
	)
}
