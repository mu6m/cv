import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

// Create the schema and server outside the export
const schema = await buildSchema({
  resolvers: [MeResolver],
});

const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

// Explicitly define the GET and POST functions to satisfy Next.js 16 types
export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
