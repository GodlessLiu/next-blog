import { BaseImage } from '@/components/BaseImage';

export interface PhotosProps {
  params: Promise<{ name: string }>;
}

export default async function Page({ params }: PhotosProps) {
  const { name } = await params;

  return (
    <div className="flex justify-center relative">
      <BaseImage
        src={`/resources/photos/${name}`}
        alt={name}
        objectFit="contain"
        width={666}
        height={666}
        className="my-10"
      />
    </div>
  );
}
