import { z } from 'zod';

import {
	createTRPCRouter,
	protectedProcedure,
	publicProcedure,
} from '~/server/api/trpc';

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			};
		}),

	dbTest: publicProcedure.query(async ({ ctx }) => {
		const users = (await ctx.prisma.user.findMany()) ?? [];
		return users;
	}),

	getSecretMessage: protectedProcedure.query(() => {
		return 'you can now see this secret message!';
	}),
});
