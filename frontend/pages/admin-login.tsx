import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button/Button';

export default function AdminLogin() {
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const res = await fetch('/api/admin-login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ password }),
		});

		if (res.ok) {
			router.push('/');
		} else {
			setError('Неверный пароль');
		}
	};

	return (
		<div className='flex-center h-screen flex-col text-white-custom'>
			<form
				onSubmit={handleSubmit}
				className={`lg:w-[374px] w-[320px] bg-[#1E2D41] p-7 rounded-2xl flex flex-col pb-15 justify-between overflow-y-hidden xl:px-9 `}
			>
				<h1 className='text-[18px]/[28px] lg:text-[20px]/[38px] font-bold'>
					Вход для разработчиков
				</h1>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Введите пароль'
					className='p-[10px] px-4 rounded-[16px] bg-[#2A3A4E] text-white outline-none w-full box-border '
				/>
				{error && <p className='text-red-600 pt-1'>{error}</p>}
				<Button
					text={'Войти'}
					active
					type='feedback'
					className='mt-[18px] xl:mt-[24px]'
				/>
			</form>
		</div>
	);
}
