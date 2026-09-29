import Link from 'next/link';

export default function SignupPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-[#003BE2] text-xl mb-2">Create an Account</p>
        <h2 className="text-[44px] text-[#242528] font-semibold leading-[48px]">
          Welcome to<br />ByteSpace
        </h2>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#242528] mb-1.5">Full Name</label>
          <input
            type="text"
            placeholder="Jamie Davis"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#254DF5]/40 focus:border-[#254DF5] transition-all placeholder:text-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#242528] mb-1.5">Email</label>
          <input
            type="email"
            placeholder="designer@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#254DF5]/40 focus:border-[#254DF5] transition-all placeholder:text-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#242528] mb-1.5">Password</label>
          <input
            type="password"
            placeholder="**********"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#254DF5]/40 focus:border-[#254DF5] transition-all placeholder:text-gray-300"
          />
        </div>

        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="w-[123px] h-[46px] bg-[#D4FB20] text-[#242528] text-xl font-medium rounded-full"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-32 text-center text-base text-[#4B4C53]">
        Already have an account?{' '}
        <Link href="/login" className="text-[#003BE2] font-medium hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
