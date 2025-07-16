import React, { useState } from 'react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

type FeedbackProps = {
	onSubmit?: (data: { phone: string; name: string }) => void;
	onClose: () => void;
};

const Feedback: React.FC<FeedbackProps> = ({ onSubmit, onClose }) => {
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
	const [submitError, setSubmitError] = useState<string | null>(null);
	const { t } = useTranslation('common');

	const formatPhoneNumber = (value: string): string => {
		const digits = value.replace(/\D/g, '');
		const limitedDigits = digits.substring(0, 11);
		let formatted = '+7';
		if (limitedDigits.length > 1) {
			formatted += ` (${limitedDigits.substring(1, 4)}`;
		}
		if (limitedDigits.length >= 4) {
			formatted += `) ${limitedDigits.substring(4, 7)}`;
		}
		if (limitedDigits.length >= 7) {
			formatted += `-${limitedDigits.substring(7, 9)}`;
		}
		if (limitedDigits.length >= 9) {
			formatted += `-${limitedDigits.substring(9, 11)}`;
		}
		return formatted;
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const filteredValue = inputValue.replace(/[^А-Яа-яЁёA-Za-z\s\-]/g, '');
		setName(filteredValue);
		setErrors((prev) => ({ ...prev, name: undefined }));
		setSubmitError(null);
	};

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const formattedPhone = formatPhoneNumber(inputValue);
		setPhone(formattedPhone);
		setErrors((prev) => ({ ...prev, phone: undefined }));
		setSubmitError(null);
	};

	const validateForm = (): boolean => {
		const newErrors: { name?: string; phone?: string } = {};

		if (name.trim().length < 2) {
			newErrors.name = t('feedback.errorName');
		}

		const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

		if (!phoneRegex.test(phone.trim())) {
			newErrors.phone = t('feedback.errorPhone');
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			try {
				const response = await fetch('/api/submit-feedback/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ phone, name }),
				});

				if (!response.ok) {
					throw new Error('Failed to submit data');
				}

				if (onSubmit) onSubmit({ phone, name });
				setIsSubmitted(true);
				setSubmitError(null);
			} catch (error) {
				console.error('Submission error:', error);
				setSubmitError(t('feedback.errorSubmit'));
			}
		}
	};

	const hasErrors = Object.keys(errors).length > 0;

	if (isSubmitted) {
		return (
			<div className='lg:w-[502px] lg:h-[232px] w-[320px] h-[202px] px-6 py-7 rounded-2xl bg-[#1E2D41] flex flex-col gap-4 justify-center items-center text-center xl:py-[38px] xl:px-9'>
				<div className='flex items-center xl:items-start gap-4 w-full'>
					<Image
						src='/images/done.svg'
						alt={t('feedback.submitSuccess')}
						className='lg:w-[68px] lg:h-[68px] w-[36px] h-[36px]'
						width={68}
						height={68}
						loading='eager'
						priority
						unoptimized
					/>
					<Text
						as='p'
						color='white'
						weight='semibold'
						className='lg:text-3xl text-[20px] xl:text-2xl/[32px] text-nowrap'
					>
						{t('feedback.submitSuccess')}
					</Text>
				</div>
				<div className='w-full text-left xl:mt-[-45px] xl:ml-[163px]'>
					<Text
						as='p'
						color='white'
						className='lg:text-[18px] text-sm px-[2.5px]'
					>
						{t('feedback.weWillContact')}
					</Text>
				</div>
				<div className='flex justify-center w-full xl:mt-6'>
					<Button
						text={t('feedback.ok')}
						active
						type='feedback'
						onClick={() => {
							setIsSubmitted(false);
							onClose();
						}}
					/>
				</div>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={`lg:w-[374px] w-[320px] bg-[#1E2D41] py-7 px-6 rounded-2xl flex flex-col gap-9 pb-15 justify-between overflow-y-hidden xl:px-9 xl:py-[38px] ${
				hasErrors ? 'h-auto min-h-[364px] overflow-y-auto' : ''
			}`}
		>
			<div className='flex flex-col gap-6 h-full'>
				<Text
					as='label'
					color='white'
					size='xl'
					className='lg:text-[26px] text-lg xl:text-[24px] xl:font-semibold text-nowrap'
				>
					{t('feedback.consultationRequest')}
				</Text>
				<div className='flex flex-col gap-[12px] flex-grow overflow-y-hidden'>
					<Text
						as='label'
						size='lg'
						color='white'
						className='text-[18px] xl:mb-[4px]'
					>
						{t('feedback.enterYourData')}
					</Text>
					<input
						type='text'
						value={name}
						onChange={handleNameChange}
						placeholder={t('feedback.fioPlaceholder')}
						className='py-[10px] px-4 rounded-[16px] bg-[#2A3A4E] text-white outline-none w-full box-border'
					/>
					{errors.name && (
						<Text as='p' color='red' size='sm'>
							{errors.name}
						</Text>
					)}
					<input
						type='text'
						value={phone}
						onChange={handlePhoneChange}
						placeholder={t('feedback.phonePlaceholder')}
						className='p-[10px] px-4 rounded-[16px] bg-[#2A3A4E] text-white outline-none w-full box-border '
					/>
					{errors.phone && (
						<Text as='p' color='red' size='sm'>
							{errors.phone}
						</Text>
					)}
					{submitError && (
						<Text as='p' color='red' size='sm'>
							{submitError}
						</Text>
					)}
					<Button
						text={t('feedback.submit')}
						active
						type='feedback'
						onClick={handleSubmit}
						className='mt-[18px] xl:mt-[24px]'
					/>
				</div>
			</div>
		</form>
	);
};

export default Feedback;
