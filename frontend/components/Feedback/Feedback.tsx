import React, { useState } from 'react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Image from 'next/image';

type FeedbackProps = {
  onSubmit?: (data: { phone: string; name: string }) => void;
  onClose?: () => void;
};

const Feedback: React.FC<FeedbackProps> = ({ onSubmit, onClose }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedPhone = formatPhoneNumber(inputValue);
    setPhone(formattedPhone);
    setErrors((prev) => ({ ...prev, phone: undefined }));
    setSubmitError(null);
  };

  const validateForm = (): boolean => {
    const newErrors: { name?: string; phone?: string } = {};

    const nameWords = name.trim().split(/\s+/);
    if (nameWords.length !== 3) {
      newErrors.name = 'Введите ФИО (фамилия, имя, отчество через пробел)';
    }

    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Введите корректный номер в формате +7 (xxx) xxx-xx-xx';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/submit-feedback', {
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
        setSubmitError('Ошибка при отправке данных. Попробуйте позже.');
      }
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  if (isSubmitted) {
    return (
      <div
        className="w-[502px] h-[232px] p-9 rounded-2xl bg-[#1E2D41] flex flex-col gap-4 justify-center items-center text-center"
      >
        <div className="flex items-center w-full">
          <Image
            src="/images/done.png"
            alt='Заявка прияната'
            className='w-14 h-14 mr-2'
            width={56}
            height={56}
          />
          <div className="flex-1 text-left">
            <Text as="p" color="white" size="xxl">
              Ваша заявка принята!
            </Text>
            <Text as="p" color="white" size="lg">
              Мы свяжемся с вами в течение 5 минут
            </Text>
          </div>
          
        </div>
        <div className="flex justify-center w-full">
          <Button text="Хорошо" className='mt-4' active type="feedback" onClick={() => { setIsSubmitted(false); if (onClose) onClose(); }} />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-[374px] h-[364px] bg-[#1E2D41] p-9 rounded-2xl flex flex-col gap-9 pb-15 justify-between overflow-y-hidden ${
        hasErrors ? 'h-auto min-h-[364px] overflow-y-auto' : ''
      }`}
    >
      <div className="flex flex-col gap-4 h-full">
        <Text as="label" color="white" size="xxl">
          Заявка на консультацию
        </Text>
        <div className="flex flex-col gap-3 flex-grow overflow-y-hidden">
          <Text as="label" color="white" size="xl">
            Введите свои данные:
          </Text>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: undefined }));
              setSubmitError(null);
            }}
            placeholder="ФИО"
            className="p-3 rounded-xl bg-[#2A3A4E] text-white outline-none w-full box-border rounded-lg"
          />
          {errors.name && <Text as="p" color="red" size="sm">{errors.name}</Text>}
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+7 (xxx) xxx-xx-xx"
            className="p-3  rounded-xl bg-[#2A3A4E] text-white outline-none w-full box-border rounded-lg"
          />
          {errors.phone && <Text as="p" color="red" size="sm">{errors.phone}</Text>}
          {submitError && <Text as="p" color="red" size="sm">{submitError}</Text>}
          <Button text="Отправить" active type="feedback" onClick={handleSubmit} className='mt-6' />
        </div>
      </div>
    </form>
  );
};

export default Feedback;