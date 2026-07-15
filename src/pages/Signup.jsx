import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdOutlineEmail, MdPhone } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { useRegisterMutation } from '../store/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice';
import { toast } from 'sonner';
import AuthInput from '../components/auth/AuthInput';
import visvaBangala from '../assets/logo/visva-bangala.png';
import { useTranslation } from 'react-i18next';

const Signup = () => {
  const { t } = useTranslation();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading, error: apiError }] = useRegisterMutation();

  const schema = yup.object({
    name:     yup.string().required(t('auth_name_required')).min(3, t('auth_min_3')),
    email:    yup.string().required(t('auth_email_required')).email(t('auth_email_invalid')),
    phone:    yup.string().required(t('auth_phone_required')).matches(/^[0-9+\s-]{7,15}$/, t('auth_phone_invalid')),
    password: yup.string().required(t('auth_password_required')).min(8, t('auth_min_8')),
    confirm:  yup.string().required(t('auth_confirm_required'))
                .oneOf([yup.ref('password')], t('auth_password_mismatch')),
  });

  const { register: formRegister, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await register({
        name: data.name, email: data.email,
        mobile: data.phone, password: data.password,
      }).unwrap();
      dispatch(setCredentials(res.data));
      toast.success(t('auth_account_created'));
      navigate('/auth/signin');
    } catch (err) {
      toast.error(err?.data?.message || t('auth_register_failed'));
      console.error('Register error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/10 px-4 py-12">
      <div className="w-full max-w-md">

        <div className="flex items-center justify-between mb-8">
          <NavLink to="/" className="flex items-center gap-1">
            <img src={visvaBangala} alt="Visva Bangla" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold uppercase text-secondary">{t("visvabangla")}</span>
          </NavLink>
          <NavLink to="/" className="text-sm text-secondary font-medium hover:opacity-70 transition-opacity">
            ← {t('auth_back_home')}
          </NavLink>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-2xl font-bold text-[#11141B]">{t('auth_create_account')}</h1>
            <p className="text-sm text-gray-500">{t('auth_signup_subtitle')}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            {apiError && (
              <p className="text-xs text-red-500 bg-red-50 px-4 py-2 rounded-xl">
                {apiError?.data?.message || t('auth_register_failed')}
              </p>
            )}

            <AuthInput label={t('full_name')} icon={<FaUser size={15} />} error={errors.name?.message}>
              <input {...formRegister('name')} type="text" placeholder={t('auth_name_placeholder')}
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <AuthInput label={t('email')} icon={<MdOutlineEmail size={18} />} error={errors.email?.message}>
              <input {...formRegister('email')} type="email" placeholder="your@email.com"
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <AuthInput label={t('auth_phone')} icon={<MdPhone size={18} />} error={errors.phone?.message}>
              <input {...formRegister('phone')} type="tel" placeholder="+880 1234 567890"
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <AuthInput label={t('auth_password')} icon={<RiLockPasswordLine size={18} />} error={errors.password?.message}>
              <input {...formRegister('password')} type={showPass ? 'text' : 'password'} placeholder={t('auth_min_8_placeholder')}
                className="flex-1 text-sm outline-none bg-transparent" />
              <button type="button" onClick={() => setShowPass(p => !p)} className="text-gray-400 hover:text-secondary transition-colors">
                {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </AuthInput>

            <AuthInput label={t('auth_confirm_password')} icon={<RiLockPasswordLine size={18} />} error={errors.confirm?.message}>
              <input {...formRegister('confirm')} type={showPass ? 'text' : 'password'} placeholder={t('auth_repeat_password')}
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <button type="submit" disabled={isLoading}
              className="w-full py-3 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-300 mt-2 disabled:opacity-60">
              {isLoading ? t('auth_creating') : t('auth_create_account')}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            {t('auth_have_account')}{' '}
            <NavLink to="/auth/signin" className="text-secondary font-medium hover:underline">{t('sign_in')}</NavLink>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
