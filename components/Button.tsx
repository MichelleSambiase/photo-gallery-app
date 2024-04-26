import Image from 'next/image'
import React from 'react'

enum ButtonProps {
	GOOGLE = 'GOOGLE',
	DEFAULT_BUTTON = 'DEFAULT_BUTTON'
}

const BUTTONS_PROPS_MAP: Record<ButtonProps, string> = {
	[ButtonProps.GOOGLE]: 'ring-1 ring-[#EAEAEA] text-[#6A6A6A] bg-white',
	[ButtonProps.DEFAULT_BUTTON]: 'font-bold bg-primary text-white'
}

interface IButton {
	buttonText: string
	onClick?: () => void
	isLoading?: boolean
	buttonProps?: keyof typeof ButtonProps
	type?: 'submit' | 'reset' | 'button' | undefined
	icon?: string
}

export default function Button({ type = 'button', buttonProps = 'DEFAULT_BUTTON', buttonText }: IButton) {
	return (
		<button type={type} className={`rounded-lg p-2 w-full flex items-center justify-center   ${BUTTONS_PROPS_MAP[buttonProps]}`}>
			{buttonProps === 'GOOGLE' ? <Image src='/googleIcon.png' width={25} height={25} alt='icono de google' /> : ''}
			<p className='ml-5 font-medium'>{buttonText}</p>
		</button>
	)
}
