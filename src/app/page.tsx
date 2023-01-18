import PageHeading from '@/components/PageHeading';
import UserDetails from '@/components/UserDetails';
import SearchForm from '@/components/SearchForm';
import { GithubUser } from '@/types';

export const revalidate = 600;

async function getData(username: string): Promise<GithubUser | null> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`
    }
  });
  if (!res.ok) return null;
  return res.json();
}

interface Props {
  searchParams: {
    username: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const userData = await getData(searchParams.username);
  console.log('data', userData);

  return (
    <main className='grid h-screen place-items-center'>
      <div className='container w-full max-w-3xl py-10 space-y-6'>
        <PageHeading />
        <SearchForm />
        <pre>{JSON.stringify(process.env.GITHUB_AUTH_TOKEN, null, 2)}</pre>
        <pre>{JSON.stringify(searchParams.username, null, 2)}</pre>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
        {userData ? <UserDetails user={userData} /> : null}
      </div>
    </main>
  );
}
