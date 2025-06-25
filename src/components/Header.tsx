import Link from 'next/link';
import { Runcat } from './Runcat';
import ThemeToggle from './ThemeToggle';
import Image from 'next/legacy/image';

export function Header() {
  return (
    <header className="flex justify-between items-center h-10 px-4">
      <span>
        <Link href="/" className="block w-8 h-8 rounded-full overflow-hidden">
          <Image src="/favicon.ico" alt="Hilary Liu" height={40} width={40} />
        </Link>
      </span>
      <div className="flex gap-2">
        <Runcat />
        <Link href="/photos" title="photos">
          <span className="icon-[prime--camera]"></span>
        </Link>
        <Link href="https://github.com/GodlessLiu" target="_blank" title="Hilary Liu">
          <span className="icon-[prime--github]"></span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
