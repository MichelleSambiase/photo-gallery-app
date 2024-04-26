import { Button } from '@/components'
import AuthComponent from '@/components/AuthComponent'
import Input from '@/components/Input'
import React, { useState } from 'react'
import RootLayout from '@/app/layout'
import AuthLayout from '../layout'

export default function Signup() {
	const [value, setValue] = useState('')

	return (
		<AuthLayout>
			<div className='flex flex-col h-full justify-around px-4 w-full sm:px-[120px] '>
				<Button buttonText='Registrate con Google' buttonProps='GOOGLE' />
				<p className='text-center hidden md:flex md:text-[#929292] mb-10 md:justify-center'>-O-</p>

				<form className='flex flex-col justify-between h-full pt-20'>
					<div>
						<Input label='Nombre completo' type='text' name='fullName' id='fullName' className='' value={value} onChange={(e) => setValue(e.target.value)} />
						<Input label='Email' type='text' name='email' id='email' className='' value={value} onChange={(e) => setValue(e.target.value)} />
						<Input label='Contraseña' type='password' name='password' id='password' value={value} onChange={(e) => setValue(e.target.value)} />
					</div>
					<Button type='submit' buttonText='Crear cuenta' buttonProps='DEFAULT_BUTTON' />
				</form>
				<p className='text-[#838383] text-base text-center mt-4'>
					Ya tienes una cuenta? <span className='text-[#7CD2D7] text-base font-bold'>Inicia sesión</span>
				</p>
			</div>
		</AuthLayout>
	)
}
