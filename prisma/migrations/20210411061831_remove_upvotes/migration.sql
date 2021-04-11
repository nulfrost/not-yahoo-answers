/*
  Warnings:

  - You are about to drop the column `userId` on the `questions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_userId_fkey";

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "userId";
