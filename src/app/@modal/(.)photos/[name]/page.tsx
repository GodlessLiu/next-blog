import { PhotosProps } from '@/app/photos/[name]/page';
import { BaseImage } from '@/components/BaseImage';
import Modal from '@/components/Modal';

export default async function PhotoModal({ params }: PhotosProps) {
  const { name } = await params;
  return (
    <Modal>
      <div className="h-[100vmin] w-[100vmin] relative">
        <BaseImage src={`/resources/photos/${name}`} alt={name} layout="fill" objectFit="contain" />
      </div>
    </Modal>
  );
}
