import Link from 'next/link';
import { listPhotos } from './utils';
import { BaseImage } from '@/components/BaseImage';

export default function Page() {
  const photos = listPhotos();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-500 mx-auto px-7">
      {photos.map((name) => {
        return (
          <div key={name} className="aspect-square relative rounded-xl overflow-hidden">
            <Link href={`/photos/${name}`} className="w-full h-full inline-block relative" scroll={false}>
              <BaseImage
                src={`/resources/photos/${name}`}
                alt={name}
                className="cursor-pointer w-full h-auto"
                objectFit="cover"
                layout="fill"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
