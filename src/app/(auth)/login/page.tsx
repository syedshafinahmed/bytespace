import Link from 'next/link';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-[#003BE2] text-xl mb-2">Sign In</p>
        <h2 className="text-[44px] text-[#242528] font-semibold leading-[48px]">Welcome Back</h2>
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
            placeholder="**********"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#254DF5]/40 focus:border-[#254DF5] transition-all placeholder:text-gray-300"
          />
        </div>

        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="w-[104px] h-[46px] bg-[#D4FB20] text-[#242528] text-xl font-medium rounded-full"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="my-8 mt-18 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-lg  text-[#888888]">or</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Social buttons */}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="w-18 h-18 rounded-3xl border border-[#D1D1D1] flex items-center justify-center"
        >
          <FaFacebook className="w-10 h-10 text-[#000000]" />
        </button>
        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-18 h-18 rounded-3xl border border-[#D1D1D1] flex items-center justify-center"
        >
          <FaGoogle className="w-10 h-10 text-[#000000]" />
        </button>
      </div>

      <p className="mt-18 text-center text-base text-[#888888]">
        New user?{' '}
        <Link href="/signup" className="text-[#003BE2] hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
