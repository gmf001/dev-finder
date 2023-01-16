'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SearchForm() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;
    router.push(`?username=${username}`);
    router.refresh();
  };

  return (
    <div className='relative overflow-hidden h-14 rounded-xl bg-dark-accent'>
      <form onSubmit={handleSubmit} className='w-full h-full'>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full h-full px-4 text-white bg-transparent placeholder:text-slate-300 focus:outline-none focus:ring-0'
          type='text'
          placeholder='Search Github Username...'
        />
        <button
          type='submit'
          className='absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold'
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
