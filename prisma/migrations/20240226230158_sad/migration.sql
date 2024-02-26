/*
  Warnings:

  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "TodoList" DROP CONSTRAINT "TodoList_usuarioUsuarioId_fkey";

-- AlterTable
ALTER TABLE "TodoList" ALTER COLUMN "usuarioUsuarioId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
ALTER COLUMN "usuarioId" DROP DEFAULT,
ALTER COLUMN "usuarioId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("usuarioId");
DROP SEQUENCE "Usuario_usuarioId_seq";

-- AddForeignKey
ALTER TABLE "TodoList" ADD CONSTRAINT "TodoList_usuarioUsuarioId_fkey" FOREIGN KEY ("usuarioUsuarioId") REFERENCES "Usuario"("usuarioId") ON DELETE RESTRICT ON UPDATE CASCADE;
