import Link from 'next/link';

export function Footer() {
  return (
    <div className="h-12 text-center">
      <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" className="hover:underline mr-2">
        CC BY-NC-SA 4.0
      </Link>
      2024-PRESENT ©
      <Link href="https://github.com/GodlessLiu" target="_blank" className="hover:underline">
        Hilary Liu
      </Link>
    </div>
  );
}
