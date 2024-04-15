import { Button } from '@/components'
import AuthComponent from '@/components/AuthComponent'
import React from 'react'

export default function Signup() {
	return (
		<AuthComponent>
			<Button type='submit' buttonText='Registrate con Google' buttonProps='GOOGLE' />
			<p className='text-center text-[#929292]'>-O-</p>
		</AuthComponent>
	)
}
