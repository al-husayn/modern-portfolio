import Image from 'next/image';

type AuthorCardProps = {
  name: string;
  avatar?: string;
};

export default function AuthorCard({ name, avatar }: AuthorCardProps) {
  return (
    <div className='flex items-center gap-3 my-6'>
      {avatar && (
        <Image
          alt={name}
          className='rounded-full'
          height={40}
          src={avatar}
          width={40}
        />
      )}
      <span className='text-gray-700 dark:text-gray-300'>{name}</span>
    </div>
  );
}
