import Image from 'next/image';
import { FiMapPin, FiTwitter, FiLink, FiGithub } from 'react-icons/fi';

export default function Home() {
  return (
    <main className='grid h-screen place-items-center'>
      <div className='container w-full max-w-2xl py-10 space-y-6'>
        {/* heading */}
        <div className=''>
          <h1 className='text-xl font-extrabold'>DevFinder</h1>
        </div>

        {/* user search */}
        <div className='relative overflow-hidden h-14 rounded-xl bg-dark-accent'>
          <input
            className='w-full h-full px-4 text-white bg-transparent placeholder:text-slate-300 focus:outline-none focus:ring-0'
            type='text'
            placeholder='Search Github Username...'
          />
          <button className='absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold'>
            Search
          </button>
        </div>

        {/* user details */}
        <div className='w-full max-w-2xl p-8 h-fit rounded-xl bg-dark-accent'>
          <div className='grid grid-flow-col gap-x-6'>
            <div className='col-span-2'>
              <Image
                src='https://placehold.co/400x400'
                alt='hi'
                className='object-cover bg-blue-100 rounded-full'
                width={200}
                height={200}
              />
            </div>
            <div className='col-span-8'>
              <div className='flex flex-row items-center justify-between'>
                <h3 className='text-lg font-bold'>The Octokat</h3>
                <p className='text-sm text-slate-400'>Joined 25 Jan 2011</p>
              </div>
              <div className='space-y-4'>
                <p className='font-semibold text-blue-400'>@octokat</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reiciendis, minima.
                </p>
              </div>
              <div className='grid grid-cols-3 px-8 py-4 mt-6 gap-x-6 rounded-xl bg-primary'>
                <div className='flex flex-col items-start h-full space-y-2'>
                  <h4 className='font-semibold'>Repos</h4>
                  <p className='truncate'>6</p>
                </div>
                <div className='flex flex-col items-start h-full space-y-2'>
                  <h4 className='font-semibold'>Followers</h4>
                  <p className='truncate'>6</p>
                </div>
                <div className='flex flex-col items-start h-full space-y-2'>
                  <h4 className='font-semibold'>Following</h4>
                  <p className='truncate'>6</p>
                </div>
              </div>

              {/* bottom */}
              <div className='grid grid-cols-2 grid-rows-2 mt-6 gap-x-6 gap-y-4'>
                <div className='flex items-center space-x-4 text-sm'>
                  <FiMapPin /> <span>San Francisco</span>
                </div>
                <div className='flex items-center space-x-4 text-sm'>
                  <FiTwitter /> <span>@twitter</span>
                </div>
                <div className='flex items-center space-x-4 text-sm'>
                  <FiLink /> <span>https://glennfrancis.dev</span>
                </div>
                <div className='flex items-center space-x-4 text-sm'>
                  <FiGithub /> <span>@gmf001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
