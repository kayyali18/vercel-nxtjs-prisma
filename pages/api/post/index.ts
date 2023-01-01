import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST api/post
// Required fields in body: title, content
export default async function postHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { title, content } = req.body;

	const session = await getSession({ req });
	const result = await prisma.post.create({
		data: {
			title,
			content,
			author: { connect: { email: session?.user?.email } },
		},
	});

	res.json(result);
}
