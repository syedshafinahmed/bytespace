'use client';

import { usePathname } from 'next/navigation';
import { AuthLayout } from '@/components/auth/AuthLayout';

const authContent: Record<string, { title: string; description: string }> = {
  '/signup': {
    title: 'Sign up and come in',
    description:
      'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.',
  },
  '/login': {
    title: 'Sign in with ease',
    description:
      'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.',
  },
};

export default function AuthGroupLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { title, description } = authContent[pathname] ?? authContent['/login'];

  return (
    <AuthLayout title={title} description={description}>
      {children}
    </AuthLayout>
  );
}
