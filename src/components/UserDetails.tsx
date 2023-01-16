import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiTwitter, FiLink, FiGithub } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import type { GithubUser } from '@/types';

interface Props {
  user: GithubUser;
}

function UserDetails({ user }: Props) {
  return (
    <div className='w-full p-8 h-fit rounded-xl bg-dark-accent'>
      <div className='flex flex-col w-full gap-x-2 gap-y-8 md:flex-row'>
        <div className='mx-auto md:w-1/4'>
          <Image
            src={user.avatar_url}
            alt={user.name}
            className='h-[145px] w-[145px] rounded-full bg-blue-100 object-cover'
            width={200}
            height={200}
          />
        </div>
        <div className='flex-1'>
          <div className='flex flex-row items-center justify-between'>
            <h3 className='text-lg font-bold'>{user.name || 'Unknown'}</h3>
            <p className='text-sm text-slate-400'>Joined {user.created_at}</p>
          </div>
          <div className='space-y-4'>
            <p className='font-semibold text-indigo-300'>@{user.login}</p>
            <p>{user.bio || 'No bio has been set.'}</p>
          </div>
          <div className='grid grid-cols-3 px-8 py-4 mt-6 bg-indigo-500 gap-x-6 rounded-xl'>
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
              <FiMapPin />
              <span className={cn(!user.location && 'text-slate-400')}>
                {user.location || 'Not available'}
              </span>
            </div>
            <div className='flex items-center space-x-4 text-sm'>
              <FiTwitter />{' '}
              {user.twitter_username ? (
                <Link
                  href={`https://twitter.com/${user.twitter_username}`}
                  target='_blank'
                  rel='norefferer'
                >
                  @{user.twitter_username}
                </Link>
              ) : (
                <span className='text-slate-400'>Not available</span>
              )}
            </div>
            <div className='flex items-center space-x-4 text-sm'>
              <FiLink />{' '}
              {user.html_url ? (
                <Link
                  className='truncate'
                  href={user.html_url}
                  target='_blank'
                  rel='norefferer'
                >
                  {user.html_url}
                </Link>
              ) : (
                <span className='text-slate-400'>Not available</span>
              )}
            </div>
            <div className='flex items-center space-x-4 text-sm'>
              <FaRegBuilding />{' '}
              <span className={cn(!user.company && 'text-slate-400')}>
                {user.company || 'Not available'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
