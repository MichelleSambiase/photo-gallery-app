import { Button } from '@/components'
import AuthComponent from '@/components/AuthComponent'
import Input from '@/components/Input'
import React, { useState } from 'react'

export default function Signup() {
	const [value, setValue] = useState('')

	return (
		<AuthComponent>
			<Button type='submit' buttonText='Registrate con Google' buttonProps='GOOGLE' />
			<p className='text-center text-[#929292]'>-O-</p>

			<Input label='Nombre completo' type='text' name='fullName' id='fullName' value={value} onChange={(e) => setValue(e.target.value)} />
			<Input label='Contraseña' type='password' name='password' id='password' value={value} onChange={(e) => setValue(e.target.value)} />
		</AuthComponent>
	)
}
