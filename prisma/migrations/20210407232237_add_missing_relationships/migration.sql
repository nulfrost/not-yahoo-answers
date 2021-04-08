-- AlterTable
ALTER TABLE "answers" ADD COLUMN     "questionId" TEXT;

-- AddForeignKey
ALTER TABLE "answers" ADD FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
