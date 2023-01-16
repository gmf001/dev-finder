import { Octokit } from 'octokit';

const github = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });

export default github;
