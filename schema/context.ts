import { PrismaClient } from "@prisma/client";
import { prisma } from "./db";

export interface Context {
  prisma: PrismaClient;
}

export async function context() {
  return {
    prisma,
  };
}
