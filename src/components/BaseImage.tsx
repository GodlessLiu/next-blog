import Image, { ImageProps } from 'next/legacy/image';

export function BaseImage(props: ImageProps) {
  return <Image {...props} blurDataURL="/loading.png" placeholder="blur" priority alt={props.alt || ''} />;
}
