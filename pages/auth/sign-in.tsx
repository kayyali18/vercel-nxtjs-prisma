import React, { useEffect } from 'react';
import { getProviders, getSession, signIn } from 'next-auth/react';
import { CommonProviderOptions } from 'next-auth/providers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const SignIn: React.FC<any> = ({ providers, session }) => {
	const router = useRouter();

	useEffect(() => {
		if (session) router.push('/');
	}, []);

	return (
		<>
			{Object.values(providers).map(
				(provider: CommonProviderOptions) => (
					<div key={provider.name}>
						<button onClick={() => signIn(provider.id)}>
							Sign in with {provider.name}
						</button>
					</div>
				)
			)}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const providers = await getProviders();
	const session = await getSession({ req: ctx.req });
	return {
		props: { providers, session },
	};
};

export default SignIn;
