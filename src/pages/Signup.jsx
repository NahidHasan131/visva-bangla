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

const schema = yup.object({
  name:     yup.string().required('Full name is required').min(3, 'Min 3 characters'),
  email:    yup.string().required('Email is required').email('Enter a valid email'),
  phone:    yup.string().required('Phone number is required').matches(/^[0-9+\s-]{7,15}$/, 'Enter a valid phone number'),
  password: yup.string().required('Password is required').min(8, 'Min 8 characters'),
  confirm:  yup.string().required('Please confirm your password')
              .oneOf([yup.ref('password')], 'Passwords do not match'),
});

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading, error: apiError }] = useRegisterMutation();

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
      toast.success('Account created! Please sign in.');
      navigate('/auth/signin');
    } catch (err) {
      toast.error(err?.data?.message || 'Registration failed. Please try again.');
      console.error('Register error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F7F2] px-4 py-12">
      <div className="w-full max-w-md">

        <div className="flex items-center justify-between mb-8">
          <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-[#62826B]">
            <span className="text-3xl">🌿</span> Shunno Yoga
          </NavLink>
          <NavLink to="/" className="text-sm text-[#62826B] font-medium hover:opacity-70 transition-opacity mr-2">
            ← Back to Home
          </NavLink>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-2xl font-bold text-[#11141B]">Create an account</h1>
            <p className="text-sm text-gray-500">Join thousands on their wellness journey</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            {apiError && (
              <p className="text-xs text-red-500 bg-red-50 px-4 py-2 rounded-xl">
                {apiError?.data?.message || 'Registration failed. Please try again.'}
              </p>
            )}

            <AuthInput label="Full Name" icon={<FaUser size={15} />} error={errors.name?.message}>
              <input {...formRegister('name')} type="text" placeholder="Your full name"
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <AuthInput label="Email" icon={<MdOutlineEmail size={18} />} error={errors.email?.message}>
              <input {...formRegister('email')} type="email" placeholder="your@email.com"
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <AuthInput label="Phone Number" icon={<MdPhone size={18} />} error={errors.phone?.message}>
              <input {...formRegister('phone')} type="tel" placeholder="+880 1234 567890"
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <AuthInput label="Password" icon={<RiLockPasswordLine size={18} />} error={errors.password?.message}>
              <input {...formRegister('password')} type={showPass ? 'text' : 'password'} placeholder="Min. 8 characters"
                className="flex-1 text-sm outline-none bg-transparent" />
              <button type="button" onClick={() => setShowPass(p => !p)} className="text-gray-400 hover:text-[#62826B] transition-colors">
                {showPass ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </AuthInput>

            <AuthInput label="Confirm Password" icon={<RiLockPasswordLine size={18} />} error={errors.confirm?.message}>
              <input {...formRegister('confirm')} type={showPass ? 'text' : 'password'} placeholder="Repeat password"
                className="flex-1 text-sm outline-none bg-transparent" />
            </AuthInput>

            <button type="submit" disabled={isLoading}
              className="w-full py-3 rounded-full bg-[#62826B] text-[#FFEFC5] font-medium hover:bg-[#11141B] transition-colors duration-300 mt-2 disabled:opacity-60">
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <NavLink to="/auth/signin" className="text-[#62826B] font-medium hover:underline">Sign in</NavLink>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
