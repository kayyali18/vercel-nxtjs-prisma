import React, { useEffect } from 'react';
import {
	ClientSafeProvider,
	getProviders,
	signIn,
	useSession,
} from 'next-auth/react';
import { CommonProviderOptions } from 'next-auth/providers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const SignIn: React.FC<any> = ({ providers }) => {
	const { data: session, status } = useSession();
	const router = useRouter();

	console.log(session, status);

	useEffect(() => {
		if (session) router.push('/');
	});

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
	return {
		props: { providers },
	};
};

export default SignIn;
