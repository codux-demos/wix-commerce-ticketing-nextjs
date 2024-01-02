/* eslint-disable @next/next/no-img-element */
import type { ImageProps } from 'next/image';
export default function FakeImage(props: ImageProps) {
  let src = '';
  if (typeof props.src === 'string') {
    src = props.src;
  } else if ('src' in props.src) {
    src = props.src.src;
  } else if ('default' in props.src) {
    src = props.src.default.src;
  }
  return (
    <img src={src} width={props.width} height={props.height} alt={props.alt} />
  );
}
