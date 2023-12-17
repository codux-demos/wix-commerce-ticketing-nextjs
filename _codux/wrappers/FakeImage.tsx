import type { ImageProps } from 'next/image';
export default function FakeImage(props: ImageProps) {
  return <img src={props.src} alt={props.alt} />;
}
