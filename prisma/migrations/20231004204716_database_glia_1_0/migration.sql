/*
  Warnings:

  - You are about to alter the column `tb_avaliacao_nota` on the `tb_avaliacao` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - A unique constraint covering the columns `[tb_ficha_anamnese_id]` on the table `tb_anamnese_cabelo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_ficha_anamnese_id]` on the table `tb_anamnese_cilios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_ficha_anamnese_id]` on the table `tb_anamnese_maq` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_ficha_anamnese_id]` on the table `tb_anamnese_sob` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_ficha_anamnese_id]` on the table `tb_anamnese_unhas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_servico_id]` on the table `tb_avaliacao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_cliente_id]` on the table `tb_ficha_anamnese` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_solicitacao_id]` on the table `tb_servico` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tb_ficha_anamnese_id` to the `tb_anamnese_cabelo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_ficha_anamnese_id` to the `tb_anamnese_cilios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_ficha_anamnese_id` to the `tb_anamnese_maq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_ficha_anamnese_id` to the `tb_anamnese_sob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_ficha_anamnese_id` to the `tb_anamnese_unhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_servico_id` to the `tb_avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_profissional_id` to the `tb_catalogo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_id` to the `tb_ficha_anamnese` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_catalogo_id` to the `tb_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_categoria_id` to the `tb_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_profissional_cep` to the `tb_profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_profissional_id` to the `tb_servico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_solicitacao_id` to the `tb_servico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_cliente_id` to the `tb_solicitacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_item_id` to the `tb_solicitacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_anamnese_cabelo` ADD COLUMN `tb_ficha_anamnese_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_anamnese_cilios` ADD COLUMN `tb_ficha_anamnese_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_anamnese_maq` ADD COLUMN `tb_ficha_anamnese_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_anamnese_sob` ADD COLUMN `tb_ficha_anamnese_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_anamnese_unhas` ADD COLUMN `tb_ficha_anamnese_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_avaliacao` ADD COLUMN `tb_servico_id` INTEGER NOT NULL,
    MODIFY `tb_avaliacao_nota` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `tb_catalogo` ADD COLUMN `tb_profissional_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_ficha_anamnese` ADD COLUMN `tb_cliente_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_item` ADD COLUMN `tb_catalogo_id` INTEGER NOT NULL,
    ADD COLUMN `tb_categoria_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_profissional` ADD COLUMN `tb_profissional_cep` VARCHAR(191) NOT NULL,
    MODIFY `tb_profissional_cnpj` VARCHAR(191) NULL,
    MODIFY `tb_profissional_nome_fantasia` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `tb_servico` ADD COLUMN `tb_profissional_id` INTEGER NOT NULL,
    ADD COLUMN `tb_solicitacao_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_solicitacao` ADD COLUMN `tb_cliente_id` INTEGER NOT NULL,
    ADD COLUMN `tb_item_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_cabelo_tb_ficha_anamnese_id_key` ON `tb_anamnese_cabelo`(`tb_ficha_anamnese_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_cilios_tb_ficha_anamnese_id_key` ON `tb_anamnese_cilios`(`tb_ficha_anamnese_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_maq_tb_ficha_anamnese_id_key` ON `tb_anamnese_maq`(`tb_ficha_anamnese_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_sob_tb_ficha_anamnese_id_key` ON `tb_anamnese_sob`(`tb_ficha_anamnese_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_anamnese_unhas_tb_ficha_anamnese_id_key` ON `tb_anamnese_unhas`(`tb_ficha_anamnese_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_avaliacao_tb_servico_id_key` ON `tb_avaliacao`(`tb_servico_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_ficha_anamnese_tb_cliente_id_key` ON `tb_ficha_anamnese`(`tb_cliente_id`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_servico_tb_solicitacao_id_key` ON `tb_servico`(`tb_solicitacao_id`);

-- AddForeignKey
ALTER TABLE `tb_item` ADD CONSTRAINT `tb_item_tb_categoria_id_fkey` FOREIGN KEY (`tb_categoria_id`) REFERENCES `tb_categoria`(`tb_categoria_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_item` ADD CONSTRAINT `tb_item_tb_catalogo_id_fkey` FOREIGN KEY (`tb_catalogo_id`) REFERENCES `tb_catalogo`(`tb_catalogo_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_catalogo` ADD CONSTRAINT `tb_catalogo_tb_profissional_id_fkey` FOREIGN KEY (`tb_profissional_id`) REFERENCES `tb_profissional`(`tb_profissional_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_ficha_anamnese` ADD CONSTRAINT `tb_ficha_anamnese_tb_cliente_id_fkey` FOREIGN KEY (`tb_cliente_id`) REFERENCES `tb_cliente`(`tb_cliente_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_anamnese_sob` ADD CONSTRAINT `tb_anamnese_sob_tb_ficha_anamnese_id_fkey` FOREIGN KEY (`tb_ficha_anamnese_id`) REFERENCES `tb_ficha_anamnese`(`tb_ficha_anamnese_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_anamnese_maq` ADD CONSTRAINT `tb_anamnese_maq_tb_ficha_anamnese_id_fkey` FOREIGN KEY (`tb_ficha_anamnese_id`) REFERENCES `tb_ficha_anamnese`(`tb_ficha_anamnese_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_anamnese_unhas` ADD CONSTRAINT `tb_anamnese_unhas_tb_ficha_anamnese_id_fkey` FOREIGN KEY (`tb_ficha_anamnese_id`) REFERENCES `tb_ficha_anamnese`(`tb_ficha_anamnese_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_anamnese_cilios` ADD CONSTRAINT `tb_anamnese_cilios_tb_ficha_anamnese_id_fkey` FOREIGN KEY (`tb_ficha_anamnese_id`) REFERENCES `tb_ficha_anamnese`(`tb_ficha_anamnese_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_anamnese_cabelo` ADD CONSTRAINT `tb_anamnese_cabelo_tb_ficha_anamnese_id_fkey` FOREIGN KEY (`tb_ficha_anamnese_id`) REFERENCES `tb_ficha_anamnese`(`tb_ficha_anamnese_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_solicitacao` ADD CONSTRAINT `tb_solicitacao_tb_item_id_fkey` FOREIGN KEY (`tb_item_id`) REFERENCES `tb_item`(`tb_item_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_solicitacao` ADD CONSTRAINT `tb_solicitacao_tb_cliente_id_fkey` FOREIGN KEY (`tb_cliente_id`) REFERENCES `tb_cliente`(`tb_cliente_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_servico` ADD CONSTRAINT `tb_servico_tb_solicitacao_id_fkey` FOREIGN KEY (`tb_solicitacao_id`) REFERENCES `tb_solicitacao`(`tb_solicitacao_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_servico` ADD CONSTRAINT `tb_servico_tb_profissional_id_fkey` FOREIGN KEY (`tb_profissional_id`) REFERENCES `tb_profissional`(`tb_profissional_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_avaliacao` ADD CONSTRAINT `tb_avaliacao_tb_servico_id_fkey` FOREIGN KEY (`tb_servico_id`) REFERENCES `tb_servico`(`tb_servico_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
