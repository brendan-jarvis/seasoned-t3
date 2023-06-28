import { createTRPCRouter } from "~/server/api/trpc";
import { produceRouter } from "~/server/api/routers/produce";
import { recipesRouter } from "~/server/api/routers/recipes";
import { favouritesRouter } from "./routers/favourites";
import { seasonalityRouter } from "./routers/seasonality";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  produce: produceRouter,
  recipes: recipesRouter,
  favourites: favouritesRouter,
  seasonality: seasonalityRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
