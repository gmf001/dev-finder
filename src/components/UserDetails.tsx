import { GithubUser } from '@/types';
import Image from 'next/image';
import { FiMapPin, FiTwitter, FiLink, FiGithub } from 'react-icons/fi';

interface Props {
  user: any;
}

function UserDetails({ user }: Props) {
  return (
    <div className='w-full max-w-2xl p-8 h-fit rounded-xl bg-dark-accent'>
      <div className='grid grid-flow-col gap-x-6'>
        <div className='col-span-2'>
          <Image
            src={user.avatar_url}
            alt={user.name}
            className='object-cover bg-blue-100 rounded-full'
            width={200}
            height={200}
          />
        </div>
        <div className='col-span-8'>
          <div className='flex flex-row items-center justify-between'>
            <h3 className='text-lg font-bold'>{user.name}</h3>
            <p className='text-sm text-slate-400'>Joined {user.created_at}</p>
          </div>
          <div className='space-y-4'>
            <p className='font-semibold text-blue-400'>@{user.id}</p>
            <p>{user.bio}</p>
          </div>
          <div className='grid grid-cols-3 px-8 py-4 mt-6 gap-x-6 rounded-xl bg-primary'>
            <div className='flex flex-col items-start h-full space-y-2'>
              <h4 className='font-semibold'>Repos</h4>
              <p className='truncate'>{user.public_repos}</p>
            </div>
            <div className='flex flex-col items-start h-full space-y-2'>
              <h4 className='font-semibold'>Followers</h4>
              <p className='truncate'>{user.followers}</p>
            </div>
            <div className='flex flex-col items-start h-full space-y-2'>
              <h4 className='font-semibold'>Following</h4>
              <p className='truncate'>{user.following}</p>
            </div>
          </div>

          {/* bottom */}
          <div className='grid grid-cols-2 grid-rows-2 mt-6 gap-x-6 gap-y-4'>
            <div className='flex items-center space-x-4 text-sm'>
              <FiMapPin /> <span>{user.location}</span>
            </div>
            <div className='flex items-center space-x-4 text-sm'>
              <FiTwitter /> <span>@{user.twitter_username}</span>
            </div>
            <div className='flex items-center space-x-4 text-sm'>
              <FiLink /> <span>{user.html_url}</span>
            </div>
            <div className='flex items-center space-x-4 text-sm'>
              <FiGithub /> <span>@{user.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
