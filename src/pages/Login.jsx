import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useLoginMutation } from '../store/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice';
import { toast } from 'sonner';
import AuthInput from '../components/auth/AuthInput';
import visvaBangala from '../assets/logo/visva-bangala.png';

const schema = yup.object({
  email:    yup.string().required('Email is required').email('Enter a valid email'),
  password: yup.string().required('Password is required').min(8, 'Min 8 characters'),
});

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error: apiError }] = useLoginMutation();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials(res.data));
      toast.success('Signed in successfully!');
      navigate('/admin');
    } catch (err) {
      toast.error(err?.data?.message || 'Login failed. Please check your credentials.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/10 px-4">
      <div className="w-full max-w-md">

        <div className="flex items-center justify-between mb-8">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={visvaBangala} alt="Visva Bangla" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold uppercase text-primary">VisvaBangla</span>
          </NavLink>
          <NavLink to="/" className="text-sm text-secondary font-medium hover:opacity-70 transition-opacity">
            ← Back to Home
          </NavLink>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-2xl font-bold text-[#11141B]">Welcome back</h1>
            <p className="text-sm text-gray-500">Sign in to continue your wellness journey</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            {apiError && (
              <p className="text-xs text-red-500 bg-red-50 px-4 py-2 rounded-xl">
                {apiError?.data?.message || 'Login failed. Please check your credentials.'}
              </p>
            )}

            <AuthInput label="Email" icon={<MdOutlineEmail size={18} />} error={errors.email?.message}>
              <input {...register('email')} type="email" placeholder="your@email.com"
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[#11141B]">Password</label>
                <NavLink to="#" className="text-xs text-secondary hover:underline">Forgot password?</NavLink>
              </div>
              <AuthInput icon={<RiLockPasswordLine size={18} />} error={errors.password?.message}>
                <input {...register('password')} type={showPass ? 'text' : 'password'} placeholder="••••••••"
                  className="flex-1 text-sm outline-none bg-transparent" />
                <button type="button" onClick={() => setShowPass(p => !p)} className="text-gray-400 hover:text-secondary transition-colors">
                  {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </AuthInput>
            </div>

            <button type="submit" disabled={isLoading}
              className="w-full py-3 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-300 mt-2 disabled:opacity-60">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{' '}
            <NavLink to="/auth/signup" className="text-secondary font-medium hover:underline">Sign up</NavLink>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
