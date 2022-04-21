import Image from 'next/image';

interface ImageWithPlaceholderProps {
  avatarUrl: string | undefined;
  placeholder?: string;
  width: string;
  height: string;
  round: boolean;
}

export const ImageWithPlaceholder = ({
  avatarUrl,
  placeholder,
  width,
  height,
  round,
}: ImageWithPlaceholderProps) => {
  return (
    <Image
      src={avatarUrl ? avatarUrl : placeholder ? placeholder : '/favicon.ico'}
      width={width}
      height={height}
      alt="profilePicture"
      style={{ borderRadius: round ? '100px' : undefined }}
    />
  );
};
