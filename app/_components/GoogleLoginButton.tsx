import { useRouter } from 'next/navigation';
import { useAuth } from '../_hooks/useAuth';
import Image from 'next/image';

export default function GoogleLoginButton() {
  const { loginWithGoogle } = useAuth();
  const router = useRouter();

  const loginGoogle = async () => {
    await loginWithGoogle();
    router.push('/dashboard');
  };
  return (
    <button
      type="button"
      className="bg-white w-full rounded p-2 cursor-pointer text-black font-bold flex justify-center items-center"
      onClick={loginGoogle}
    >
      <Image
        src="/google.svg"
        alt="Google Icon"
        className="inline-block mr-2"
        width={30}
        height={30}
      />
      Google
    </button>
  );
}
