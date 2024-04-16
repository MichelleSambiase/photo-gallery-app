import Image from 'next/image'

interface IInput extends React.HTMLProps<HTMLInputElement> {
	name: string
	type: 'text' | 'textarea' | 'number' | 'password'
	label: string
	value?: string
	id?: string
	className?: string
	error?: boolean | string
	maxLength?: number
	icon?: string
	// onFocus?:React.FocusEventHandler<HTMLInputElement>
	onChange: React.ChangeEventHandler<HTMLInputElement>
	onBlur?: React.FocusEventHandler<HTMLInputElement>
	setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>
	showPassword?: boolean
}
const Input = ({ name, label, type, id, maxLength, onChange, onBlur, setShowPassword, showPassword, icon, value, className, error, onFocus }: IInput) => {
	return (
		<div className='relative focus-within:border-cyan-800'>
			<input
				name={name}
				placeholder=''
				id={id}
				value={value}
				onFocus={onFocus}
				type={showPassword ? 'text' : type}
				maxLength={maxLength}
				onChange={onChange}
				onBlur={onBlur}
				className={`w-full h-10 px-2 text-gray-900 border-b border-gray-300 focus:border-cyan-800 outline-none appearance-none peer ${
					error && 'border-errorInput border-[1px] active:-outline-offset-[3px] focus:ring-[3px] focus:ring-[#e9676766]'
				} ${className}`}
			/>
			<label className='absolute top-4 left-0 duration-300'>{label}</label>

			{error && (
				<div className='z-10 flex w-full items-start px-2 '>
					<label className='text-xs font-medium text-errorInput '>{error}</label>
				</div>
			)}
			{icon && (
				<div className='relative '>
					<Image width={22} height={18} src={icon} alt='Ícono de lupa' className='absolute -top-8 right-0 pr-5' />
				</div>
			)}
			{type === 'password' && (
				<button onClick={(showPassword) => setShowPassword?.(!showPassword)} type='button' className='absolute top-6 right-0 pr-5 focus:outline-none'>
					<Image width={22} height={18} src={showPassword ? '/eyeOpen.png' : '/eyeClose.png'} alt='Icono de ojo' />
				</button>
			)}
		</div>
	)
}

export default Input
