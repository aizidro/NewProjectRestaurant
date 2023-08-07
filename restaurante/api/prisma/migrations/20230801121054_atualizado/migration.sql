/*
  Warnings:

  - You are about to drop the column `enderecoCep` on the `cliente` table. All the data in the column will be lost.
  - You are about to drop the column `enderecoComplemento` on the `cliente` table. All the data in the column will be lost.
  - Added the required column `cep` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` DROP COLUMN `enderecoCep`,
    DROP COLUMN `enderecoComplemento`,
    ADD COLUMN `cep` VARCHAR(191) NOT NULL,
    ADD COLUMN `complemento` VARCHAR(191) NOT NULL;
