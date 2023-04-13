import { MantineProvider } from '@mantine/core';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';

import { RouterTransition } from '~/features/Common/RouterTransition';
import { api } from '~/utils/api';

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
	const getLayout = (Component as any).getLayout || ((page: unknown) => page);

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<RouterTransition />
			<SessionProvider session={session}>
				{/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
				{getLayout(<Component {...pageProps} />)}
			</SessionProvider>
		</MantineProvider>
	);
};

export default api.withTRPC(MyApp);
