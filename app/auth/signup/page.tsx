import { Button } from '@/components'
import AuthComponent from '@/components/AuthComponent'
import Input from '@/components/Input'
import React, { useState } from 'react'
import AuthLayout from '../layout'

export default function Signup() {
	const [value, setValue] = useState('')

	return (
		<AuthLayout>
			<Button type='submit' buttonText='Registrate con Google' buttonProps='GOOGLE' />
			<p className='text-center hidden md:flex md:text-[#929292] mb-10'>-O-</p>

			<form className='mt-[100px] '>
				<Input label='Nombre completo' type='text' name='fullName' id='fullName' className='' value={value} onChange={(e) => setValue(e.target.value)} />
				<Input label='Email' type='text' name='email' id='email' className='' value={value} onChange={(e) => setValue(e.target.value)} />
				<Input label='Contraseña' type='password' name='password' id='password' value={value} onChange={(e) => setValue(e.target.value)} />
			</form>
		</AuthLayout>
	)
}
