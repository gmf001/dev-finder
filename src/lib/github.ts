import type { GithubUser } from '@/types';

const github = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`
    }
  });

  if (!res.ok) return null;
  const userData = await res.json();
  return userData as GithubUser;
};

export default github;
