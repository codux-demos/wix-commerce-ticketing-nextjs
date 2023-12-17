import { media as wixMedia } from '@wix/sdk';
import Image, { ImageProps } from 'next/image';
import FakeImage from '_codux/wrappers/FakeImage';
import { PLACEHOLDER_IMAGE } from '@app/constants';

function getImageUrlForMedia(media: string, width: number, height: number) {
  return wixMedia.getScaledToFillImageUrl(media, width, height, {});
}

export function WixMediaImage({
  media,
  height = 320,
  width = 640,
  alt = 'no info available for image',
  className,
  sizes = '10vw',
  objectFit,
  disableZoom = false,
}: {
  media?: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  disableZoom?: boolean;
  objectFit?: 'cover' | 'contain';
}) {
  const imageUrl =
    process.env.IS_TEST && media
      ? media
      : media
      ? getImageUrlForMedia(media || '', width, height)
      : PLACEHOLDER_IMAGE;

  const ImageComp = process.env.IS_TEST ? FakeImage : Image;

  const styleProps: Partial<ImageProps> = {
    ...(objectFit
      ? { style: { objectFit }, fill: true, sizes }
      : { width, height }),
  };

  return (
    <div className={`flex items-center justify-center h-full`}>
      <div className="overflow-hidden relative group w-full h-full">
        <ImageComp
          {...styleProps}
          src={imageUrl}
          quality={90}
          alt={alt}
          className={`object-cover w-full ${
            !disableZoom ? 'group-hover:scale-110' : ''
          } transition duration-300 ease-in-out ${className}`}
        />
      </div>
    </div>
  );
}
