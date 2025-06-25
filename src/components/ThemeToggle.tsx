'use client';
import { useTheme } from 'next-themes';
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function changeTheme(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, theme: 'light' | 'dark') {
    if (!document.startViewTransition) {
      setTheme(theme);
      return;
    }
    const transition = document.startViewTransition(() => {
      setTheme(theme);
    });
    const isDark = theme === 'dark';
    transition.ready.then(() => {
      const x = e.clientX;
      const y = e.clientY;
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const clipPath = [`circle(0 at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];

      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 300,
          easing: 'ease-out',
          pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
        },
      );
    });
  }
  return (
    <button onClick={(e) => changeTheme(e, theme === 'dark' ? 'light' : 'dark')} className="h-full cursor-pointer">
      <span className="icon-[prime--moon] dark:icon-[prime--sun]"></span>
    </button>
  );
}
