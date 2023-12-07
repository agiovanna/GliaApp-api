/*
  Warnings:

  - You are about to drop the column `tb_ficha_anamnese_id` on the `tb_anamnese_cabelo` table. All the data in the column will be lost.
  - You are about to drop the column `tb_ficha_anamnese_id` on the `tb_anamnese_cilios` table. All the data in the column will be lost.
  - You are about to drop the column `tb_anamnese_maq_macha_pele` on the `tb_anamnese_maq` table. All the data in the column will be lost.
  - You are about to drop the column `tb_ficha_anamnese_id` on the `tb_anamnese_maq` table. All the data in the column will be lost.
  - You are about to drop the column `tb_anamnese_sob_tipo_pele` on the `tb_anamnese_sob` table. All the data in the column will be lost.
  - You are about to drop the column `tb_ficha_anamnese_id` on the `tb_anamnese_sob` table. All the data in the column will be lost.
  - You are about to drop the column `tb_ficha_anamnese_id` on the `tb_anamnese_unhas` table. All the data in the column will be lost.
  - You are about to drop the column `tb_solicitacao_comp` on the `tb_solicitacao` table. All the data in the column will be lost.
  - You are about to drop the column `tb_solicitacao_latitude` on the `tb_solicitacao` table. All the data in the column will be lost.
  - You are about to drop the column `tb_solicitacao_longitude` on the `tb_solicitacao` table. All the data in the column will be lost.
  - You are about to drop the column `tb_solicitacao_num` on the `tb_solicitacao` table. All the data in the column will be lost.
  - You are about to drop the column `tb_solicitiacao_bairro` on the `tb_solicitacao` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tb_cliente_id]` on the table `tb_anamnese_cabelo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_cliente_id]` on the table `tb_anamnese_cilios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_cliente_id]` on the table `tb_anamnese_maq` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_cliente_id]` on the table `tb_anamnese_sob` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_cliente_id]` on the table `tb_anamnese_unhas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tb_cliente_id` to the `tb_anamnese_cabelo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_id` to the `tb_anamnese_cilios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_anamnese_maq_mancha_pele` to the `tb_anamnese_maq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_id` to the `tb_anamnese_maq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_anamnese_sob_oleo_pele` to the `tb_anamnese_sob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_id` to the `tb_anamnese_sob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_id` to the `tb_anamnese_unhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_avaliacao_updatedAt` to the `tb_avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_cpf` to the `tb_cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_latitude` to the `tb_cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_longitude` to the `tb_cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_item_img` to the `tb_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_solicitacao_bairro` to the `tb_solicitacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_solicitacao_cep` to the `tb_solicitacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_anamnese_cabelo` DROP FOREIGN KEY `tb_anamnese_cabelo_tb_ficha_anamnese_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_anamnese_cilios` DROP FOREIGN KEY `tb_anamnese_cilios_tb_ficha_anamnese_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_anamnese_maq` DROP FOREIGN KEY `tb_anamnese_maq_tb_ficha_anamnese_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_anamnese_sob` DROP FOREIGN KEY `tb_anamnese_sob_tb_ficha_anamnese_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_anamnese_unhas` DROP FOREIGN KEY `tb_anamnese_unhas_tb_ficha_anamnese_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_avaliacao` DROP FOREIGN KEY `tb_avaliacao_tb_servico_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_catalogo` DROP FOREIGN KEY `tb_catalogo_tb_profissional_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_ficha_anamnese` DROP FOREIGN KEY `tb_ficha_anamnese_tb_cliente_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_item` DROP FOREIGN KEY `tb_item_tb_catalogo_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_item` DROP FOREIGN KEY `tb_item_tb_categoria_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_servico` DROP FOREIGN KEY `tb_servico_tb_profissional_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_servico` DROP FOREIGN KEY `tb_servico_tb_solicitacao_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_solicitacao` DROP FOREIGN KEY `tb_solicitacao_tb_cliente_id_fkey`;

-- DropForeignKey
ALTER TABLE `tb_solicitacao` DROP FOREIGN KEY `tb_solicitacao_tb_item_id_fkey`;

-- AlterTable
ALTER TABLE `tb_anamnese_cabelo` DROP COLUMN `tb_ficha_anamnese_id`,
    ADD COLUMN `tb_cliente_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_anamnese_cilios` DROP COLUMN `tb_ficha_anamnese_id`,
    ADD COLUMN `tb_cliente_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_anamnese_maq` DROP COLUMN `tb_anamnese_maq_macha_pele`,
    DROP COLUMN `tb_ficha_anamnese_id`,
    ADD COLUMN `tb_anamnese_maq_mancha_pele` BOOLEAN NOT NULL,
    ADD COLUMN `tb_cliente_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_anamnese_sob` DROP COLUMN `tb_anamnese_sob_tipo_pele`,
    DROP COLUMN `tb_ficha_anamnese_id`,
    ADD COLUMN `tb_anamnese_sob_oleo_pele` VARCHAR(191) NOT NULL,
    ADD COLUMN `tb_cliente_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_anamnese_unhas` DROP COLUMN `tb_ficha_anamnese_id`,
    ADD COLUMN `tb_cliente_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_avaliacao` ADD COLUMN `tb_avaliacao_comentario` VARCHAR(191) NULL,
    ADD COLUMN `tb_avaliacao_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `tb_avaliacao_updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `tb_cliente` ADD COLUMN `tb_cliente_cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `tb_cliente_img` VARCHAR(191) NULL,
    ADD COLUMN `tb_cliente_latitude` DOUBLE NOT NULL,
    ADD COLUMN `tb_cliente_longitude` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `tb_item` ADD COLUMN `tb_item_img` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tb_profissional` ADD COLUMN `tb_profissional_desc` VARCHAR(191) NULL,
    ADD COLUMN `tb_profissional_img` VARCHAR(191) NULL,
    ADD COLUMN `tb_profissional_latitude` DOUBLE NULL,
    ADD COLUMN `tb_profissional_longitude` DOUBLE NULL;

-- AlterTable
ALTER TABLE `tb_servico` MODIFY `tb_servico_hora_final` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `tb_solicitacao` DROP COLUMN `tb_solicitacao_comp`,
    DROP COLUMN `tb_solicitacao_latitude`,
    DROP COLUMN `tb_solicitacao_longitude`,
    DROP COLUMN `tb_solicitacao_num`,
    DROP COLUMN `tb_solicitiacao_bairro`,
    ADD COLUMN `tb_solicitacao_bairro` VARCHAR(191) NOT NULL,
    ADD COLUMN `tb_solicitacao_cep` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_cabelo_tb_cliente_id_key` ON `tb_anamnese_cabelo`(`tb_cliente_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_cilios_tb_cliente_id_key` ON `tb_anamnese_cilios`(`tb_cliente_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_maq_tb_cliente_id_key` ON `tb_anamnese_maq`(`tb_cliente_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_sob_tb_cliente_id_key` ON `tb_anamnese_sob`(`tb_cliente_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_unhas_tb_cliente_id_key` ON `tb_anamnese_unhas`(`tb_cliente_id`);
