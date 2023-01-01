import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { usePageLoading } from '../lib/hooks/usePageLoading';

const App = ({ Component, pageProps }: AppProps) => {
	const { isPageLoading } = usePageLoading();

	return (
		<SessionProvider session={pageProps.session}>
			{isPageLoading ? (
				<h1>Loading...</h1>
			) : (
				<Component {...pageProps} />
			)}
		</SessionProvider>
	);
};

export default App;
