-- CreateTable
CREATE TABLE `tb_profissional` (
    `tb_profissional_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_profissional_nome` VARCHAR(191) NOT NULL,
    `tb_profissional_cpf` VARCHAR(191) NOT NULL,
    `tb_profissional_dt_nasc` DATETIME(3) NOT NULL,
    `tb_profissional_email` VARCHAR(191) NOT NULL,
    `tb_profissional_senha` VARCHAR(191) NOT NULL,
    `tb_profissional_tel` VARCHAR(191) NOT NULL,
    `tb_profissional_cnpj` VARCHAR(191) NOT NULL,
    `tb_profissional_nome_fantasia` VARCHAR(191) NOT NULL,
    `tb_profissional_rua` VARCHAR(191) NOT NULL,
    `tb_profissional_bairro` VARCHAR(191) NOT NULL,
    `tb_profissional_num` VARCHAR(191) NOT NULL,
    `tb_profissional_cidade` VARCHAR(191) NOT NULL,
    `tb_profissional_estado` VARCHAR(191) NOT NULL,
    `tb_profissional_complemento` VARCHAR(191) NULL,
    `tb_profissional_status` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `tb_profissional_tb_profissional_cpf_key`(`tb_profissional_cpf`),
    UNIQUE INDEX `tb_profissional_tb_profissional_email_key`(`tb_profissional_email`),
    UNIQUE INDEX `tb_profissional_tb_profissional_cnpj_key`(`tb_profissional_cnpj`),
    PRIMARY KEY (`tb_profissional_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_item` (
    `tb_item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_item_nome` VARCHAR(191) NOT NULL,
    `tb_item_desc` VARCHAR(191) NULL,
    `tb_item_valor` DECIMAL(65, 30) NOT NULL,
    `tb_item_tempo` INTEGER NOT NULL,

    PRIMARY KEY (`tb_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_categoria` (
    `tb_categoria_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_categoria_nome` VARCHAR(16) NOT NULL,

    PRIMARY KEY (`tb_categoria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_catalogo` (
    `tb_catalogo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_catalogo_nome` VARCHAR(191) NOT NULL,
    `tb_catalogo_desc` VARCHAR(191) NULL,

    PRIMARY KEY (`tb_catalogo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_cliente` (
    `tb_cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_cliente_nome` VARCHAR(191) NOT NULL,
    `tb_cliente_dt_nasc` DATETIME(3) NOT NULL,
    `tb_cliente_email` VARCHAR(191) NOT NULL,
    `tb_cliente_tel` VARCHAR(191) NOT NULL,
    `tb_cliente_senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tb_cliente_tb_cliente_email_key`(`tb_cliente_email`),
    PRIMARY KEY (`tb_cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_ficha_anamnese` (
    `tb_ficha_anamnese_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_ficha_anamnese_gestante` VARCHAR(191) NOT NULL,
    `tb_ficha_anamnese_diabetes` BOOLEAN NOT NULL,
    `tb_ficha_anamnese_medicacao` VARCHAR(191) NOT NULL,
    `tb_ficha_anamnese_alergia` VARCHAR(191) NOT NULL,
    `tb_ficha_anamnese_convulsao` BOOLEAN NOT NULL,
    `tb_ficha_anamnese_hemofilico` BOOLEAN NOT NULL,
    `tb_ficha_anamnese_hipertensao` BOOLEAN NOT NULL,
    `tb_ficha_anamnese_tireoide` BOOLEAN NOT NULL,

    PRIMARY KEY (`tb_ficha_anamnese_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_anamnese_sob` (
    `tb_anamnese_sob_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_anamnese_sob_queda_pelos` BOOLEAN NOT NULL,
    `tb_anamnese_sob_alergia_henna` BOOLEAN NOT NULL,
    `tb_anamnese_sob_chumbo` BOOLEAN NOT NULL,
    `tb_anamnese_sob_sensi` VARCHAR(191) NOT NULL,
    `tb_anamnese_sob_caspa` BOOLEAN NOT NULL,
    `tb_anamnese_sob_tipo_pele` VARCHAR(191) NOT NULL,
    `tb_anamnese_sob_tipo_pelo` VARCHAR(191) NOT NULL,
    `tb_anamnese_sob_info_relevante` VARCHAR(191) NULL,

    PRIMARY KEY (`tb_anamnese_sob_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_anamnese_maq` (
    `tb_anamnese_maq_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_anamnese_maq_tratamento` VARCHAR(191) NOT NULL,
    `tb_anamnese_maq_macha_pele` BOOLEAN NOT NULL,
    `tb_anamnese_maq_lente_cont` BOOLEAN NOT NULL,
    `tb_anamnese_maq_tipo_pele` VARCHAR(191) NOT NULL,
    `tb_anamnese_maq_oleosidade` VARCHAR(191) NOT NULL,
    `tb_anamnese_maq_prob_pele` VARCHAR(191) NOT NULL,
    `tb_anamnese_maq_cirurgia_rosto` VARCHAR(191) NOT NULL,
    `tb_anamnese_maq_info_relevante` VARCHAR(191) NULL,

    PRIMARY KEY (`tb_anamnese_maq_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_anamnese_unhas` (
    `tb_anamnese_unhas_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_anamnese_unhas_ret_cuticula` BOOLEAN NOT NULL,
    `tb_anamnese_unhas_encravada` BOOLEAN NOT NULL,
    `tb_anamnese_unhas_prob_onicomicose` VARCHAR(191) NOT NULL,
    `tb_anamnese_unhas_prob` VARCHAR(191) NOT NULL,
    `tb_anamnese_unhas_roer_unha` BOOLEAN NOT NULL,
    `tb_anamnese_unhas_esportes_impacto` BOOLEAN NOT NULL,
    `tb_anamnese_unhas_pisc_mar` BOOLEAN NOT NULL,
    `tb_anamnese_unhas_info_relevante` VARCHAR(191) NULL,

    PRIMARY KEY (`tb_anamnese_unhas_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_anamnese_cilios` (
    `tb_anamnese_cil_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_anamnese_cil_tratamento` VARCHAR(191) NOT NULL,
    `tb_anamnese_cil_procedimento` VARCHAR(191) NOT NULL,
    `tb_anamnese_cil_prob_oftalmo` VARCHAR(191) NOT NULL,
    `tb_anamnese_cil_dorme_lado` BOOLEAN NOT NULL,
    `tb_anamnese_cil_uso_colirio` BOOLEAN NOT NULL,
    `tb_anamnese_cil_doenca` VARCHAR(191) NOT NULL,
    `tb_anamnese_cil_info_relevante` VARCHAR(191) NULL,

    PRIMARY KEY (`tb_anamnese_cil_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_anamnese_cabelo` (
    `tb_anamnese_cab_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_anamnese_cab_prob_saude` VARCHAR(191) NOT NULL,
    `tb_anamnese_cab_quimica` VARCHAR(191) NOT NULL,
    `tb_anamnese_cab_frequencia` INTEGER NOT NULL,
    `tb_anamnese_cab_prob_cap_familiar` VARCHAR(191) NOT NULL,
    `tb_anamnese_cab_doenca_cc` VARCHAR(191) NOT NULL,
    `tb_anamnese_cab_cirurgia_lesao` VARCHAR(191) NOT NULL,
    `tb_anamnese_cab_info_relevante` VARCHAR(191) NULL,

    PRIMARY KEY (`tb_anamnese_cab_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_solicitacao` (
    `tb_solicitacao_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_solicitacao_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tb_solicitacao_updateAt` DATETIME(3) NOT NULL,
    `tb_solicitacao_rua` VARCHAR(191) NOT NULL,
    `tb_solicitiacao_bairro` VARCHAR(191) NOT NULL,
    `tb_solicitacao_num` VARCHAR(191) NOT NULL,
    `tb_solicitacao_comp` VARCHAR(191) NULL,
    `tb_solicitacao_cidade` VARCHAR(191) NOT NULL,
    `tb_solicitacao_estado` VARCHAR(191) NOT NULL,
    `tb_solicitacao_status` VARCHAR(191) NOT NULL,
    `tb_solicitacao_longitude` DOUBLE NOT NULL,
    `tb_solicitacao_latitude` DOUBLE NOT NULL,

    PRIMARY KEY (`tb_solicitacao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_servico` (
    `tb_servico_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_servico_status` VARCHAR(191) NOT NULL,
    `tb_servico_hora_inicio` DATETIME(3) NOT NULL,
    `tb_servico_hora_final` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tb_servico_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_avaliacao` (
    `tb_avaliacao_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_avaliacao_nota` INTEGER NOT NULL,

    PRIMARY KEY (`tb_avaliacao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
