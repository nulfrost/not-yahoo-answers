/*
  Warnings:

  - You are about to drop the column `categoryId` on the `questions` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[name]` on the table `categories`. If there are existing duplicate values, the migration will fail.

*/
-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_categoryId_fkey";

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "categoryId",
ADD COLUMN     "categoryName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "categories.name_unique" ON "categories"("name");

-- AddForeignKey
ALTER TABLE "questions" ADD FOREIGN KEY ("categoryName") REFERENCES "categories"("name") ON DELETE SET NULL ON UPDATE CASCADE;
