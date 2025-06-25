'use client';

import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Modal 容器 */}
      <div
        className="flex min-h-screen items-center justify-center text-center sm:block bg-[#00000099]"
        onClick={() => router.back()}
      >
        {/* Modal 内容 */}
        <div className="inline-block transform overflow-hidden text-left align-bottom transition-all">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
