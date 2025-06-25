import { PhotosProps } from '@/app/photos/[name]/page';
import Modal from '@/components/Modal';
import Image from 'next/legacy/image';

export default async function PhotoModal({ params }: PhotosProps) {
  const { name } = await params;
  return (
    <Modal>
      <div className="h-[100vmin] w-[100vmin] relative">
        <Image src={`/resources/photos/${name}`} alt="photo" layout="fill" objectFit="contain" unoptimized />
      </div>
    </Modal>
  );
}
