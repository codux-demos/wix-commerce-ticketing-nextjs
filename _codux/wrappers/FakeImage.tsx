/* eslint-disable @next/next/no-img-element */
import type { ImageProps } from 'next/image';
export default function FakeImage(props: ImageProps) {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
}
