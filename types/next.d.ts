import 'next';
import { type NextPage } from 'next';

declare module 'next' {
	export type NextPageWithLayout = NextPage & {
		getLayout?: (page: React.ReactNode) => page;
	};
}
