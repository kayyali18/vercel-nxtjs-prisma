import Router from 'next/router';
import { useEffect, useState } from 'react';

export const usePageLoading = (initState = false) => {
	const [isPageLoading, setIsPageLoading] = useState(initState);

	useEffect(() => {
		const routeEventStart = () => setIsPageLoading(true);
		const routeEventEnd = () => setIsPageLoading(false);

		Router.events.on('routeChangeStart', routeEventStart);
		Router.events.on('routeChangeComplete', routeEventEnd);
		Router.events.on('routeChangeStart', routeEventEnd);

		return () => {
			Router.events.off('routeChangeStart', routeEventStart);
			Router.events.off('routeChangeComplete', routeEventEnd);
			Router.events.off('routeChangeStart', routeEventEnd);
		};
	}, []);

	return { isPageLoading };
};
