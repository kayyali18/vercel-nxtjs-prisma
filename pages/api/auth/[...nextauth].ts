import {
	NextApiHandler,
	NextApiRequest,
	NextApiResponse,
} from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, options);
// export default authHandler;

const options = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/auth/sign-in',
	},
};

export default async function auth(
	req: NextApiRequest,
	res: NextApiResponse
) {
	return await NextAuth(req, res, options);
}
