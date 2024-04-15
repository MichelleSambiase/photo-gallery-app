import React from 'react'

enum ButtonProps {
	GOOGLE = 'GOOGLE',
	DEFAULT_BUTTON = 'DEFAULT_BUTTON'
}

const BUTTONS_PROPS_MAP: Record<ButtonProps, string> = {
	[ButtonProps.GOOGLE]: 'border border-gray-500 text-[#6A6A6A] bg-white',
	[ButtonProps.DEFAULT_BUTTON]: 'bg-primary text-white'
}

interface IButton {
	buttonText: string
	onClick?: () => void
	isLoading?: boolean
	buttonProps?: keyof typeof ButtonProps
	type: 'submit' | 'reset' | 'button' | undefined
	icon?: string
}

export default function Button({ type, buttonProps = 'DEFAULT_BUTTON', buttonText }: IButton) {
	return (
		<button type={type} className={`rounded-lg p-2 w-full md:w-1/2 ${BUTTONS_PROPS_MAP[buttonProps]}`}>
			{buttonText}
		</button>
	)
}
