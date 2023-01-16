import PageHeading from '@/components/PageHeading';
import UserDetails from '@/components/UserDetails';
import SearchForm from '@/components/SearchForm';
import github from '@/lib/github';

export const revalidate = 3600;

async function getData(username?: string) {
  if (!username) return;
  const user = await github.request('GET /users/{username}', {
    username
  });
  return user.data;
}

interface Props {
  searchParams: {
    username: string;
  };
}
export default async function Home({ searchParams }: Props) {
  const userData = await getData(searchParams.username);
  console.log(userData);

  return (
    <main className='grid h-screen place-items-center'>
      <div className='container w-full max-w-2xl py-10 space-y-6'>
        <PageHeading />
        <SearchForm />
        {searchParams.username ? <UserDetails user={userData} /> : null}
      </div>
    </main>
  );
}
