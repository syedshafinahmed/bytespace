import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-[#254DF5] text-sm font-medium mb-2">Sign In</p>
        <h2 className="text-3xl md:text-4xl font-bold">Welcome Back</h2>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Email</label>
          <input
            type="email"
            placeholder="designer@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#254DF5]/40 focus:border-[#254DF5] transition-all placeholder:text-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#254DF5]/40 focus:border-[#254DF5] transition-all placeholder:text-gray-300"
          />
        </div>

        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="bg-[#c0ff2d] text-black font-semibold text-sm py-3 px-8 rounded-full hover:bg-[#aee628] active:scale-95 transition-all duration-200"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Social buttons */}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all duration-200"
        >
          <FaFacebook className="w-5 h-5 text-[#1877F2]" />
        </button>
        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all duration-200"
        >
          <FcGoogle className="w-5 h-5" />
        </button>
      </div>

      <p className="mt-10 text-center text-sm text-gray-400">
        New user?{' '}
        <Link href="/signup" className="text-[#254DF5] font-medium hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
