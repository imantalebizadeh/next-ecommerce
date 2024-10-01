import { z } from "zod";

import { publicProcedure, router } from ".";

export const rootRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input, ctx }) => {
      console.log(ctx.userId);

      return {
        greeting: `hello ${input.text}`,
      };
    }),
});

// export type definition of API
export type RootRouter = typeof rootRouter;
