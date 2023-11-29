import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import z from 'zod';


export async function appRoutes(app: FastifyInstance) {

    //Criando profissional
    app.post('/createProfessional', async (request) => {

        const createProfessionalBody = z.object({
            name: z.string(),
            birthDate: z.string().datetime(),
            telephone: z.string(),
            state: z.string(),
            city: z.string(),
            cep: z.string(),
            neighborhood: z.string(),
            street: z.string(),
            numberHome: z.string(),
            complement: z.string(),
            cpf: z.string(),
            cnpj: z.string(),
            fantasyName: z.string(),
            email: z.string(),
            password: z.string(),
            latitude: z.number(),
            longitude: z.number(),
            imgProfessional: z.string(),
        });

        const {
            name,
            birthDate,
            telephone,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement,
            cpf,
            cnpj,
            fantasyName,
            email,
            password,
            latitude,
            longitude,
            imgProfessional
        } = createProfessionalBody.parse(request.body);


        await prisma.profissional.create({
            data: {
                tb_profissional_nome: name,
                tb_profissional_dt_nasc: birthDate,
                tb_profissional_tel: telephone,
                tb_profissional_estado: state,
                tb_profissional_cidade: city,
                tb_profissional_cep: cep,
                tb_profissional_bairro: neighborhood,
                tb_profissional_rua: street,
                tb_profissional_num: numberHome,
                tb_profissional_complemento: complement,
                tb_profissional_cpf: cpf,
                tb_profissional_cnpj: cnpj,
                tb_profissional_nome_fantasia: fantasyName,
                tb_profissional_email: email,
                tb_profissional_senha: password,
                tb_profissional_latitude: latitude,
                tb_profissional_longitude: longitude,
                tb_profissional_img: imgProfessional
            }
        });
    });


    //Criando cliente
    app.post('/createClient', async (request) => {

        const createClientBody = z.object({
            name: z.string(),
            birthDate: z.string().datetime(),
            telephone: z.string(),
            email: z.string(),
            password: z.string(),
            latitude: z.number(),
            longitude: z.number(),
            imgClient: z.string(),
            cpf: z.string()
        });

        const {
            name,
            birthDate,
            telephone,
            email,
            password,
            latitude,
            longitude,
            imgClient,
            cpf
        } = createClientBody.parse(request.body);

        await prisma.cliente.create({
            data: {
                tb_cliente_nome: name,
                tb_cliente_dt_nasc: birthDate,
                tb_cliente_tel: telephone,
                tb_cliente_email: email,
                tb_cliente_senha: password,
                tb_cliente_latitude: latitude,
                tb_cliente_longitude: longitude,
                tb_cliente_img: imgClient,
                tb_cliente_cpf: cpf
            }
        });
    });

    //Crinado Ficha de anmnese base
    app.post('/createFichaAnamnese', async (request) => {
        const createFichaAnamneseBody = z.object({
            gestante: z.string(),
            diabetes: z.boolean(),
            medicacao: z.string(),
            alergia: z.string(),
            convulsao: z.boolean(),
            hemofilico: z.boolean(),
            hipertensao: z.boolean(),
            tireoide: z.boolean(),
            clienteId: z.number(),
        });

        const {
            gestante,
            diabetes,
            medicacao,
            alergia,
            convulsao,
            hemofilico,
            hipertensao,
            tireoide,
            clienteId,
        } = createFichaAnamneseBody.parse(request.body);

        await prisma.anamneseGeral.create({
            data: {
                tb_ficha_anamnese_gestante: gestante,
                tb_ficha_anamnese_diabetes: diabetes,
                tb_ficha_anamnese_medicacao: medicacao,
                tb_ficha_anamnese_alergia: alergia,
                tb_ficha_anamnese_convulsao: convulsao,
                tb_ficha_anamnese_hemofilico: hemofilico,
                tb_ficha_anamnese_hipertensao: hipertensao,
                tb_ficha_anamnese_tireoide: tireoide,
                tb_cliente_id: clienteId,
            }
        });
    });

    //Crinado Ficha de anmnese de sobrancelha
    app.post('/createAnamneseSobrancelha', async (request) => {
        const createAnamneseSobrancelhaBody = z.object({
            quedaPelos: z.boolean(),
            alergiaHenna: z.boolean(),
            chumbo: z.boolean(),
            sensi: z.string(),
            caspa: z.boolean(),
            oleoPele: z.string(),
            tipoPelo: z.string(),
            infoRelevante: z.string(),
            clientId: z.number(),
        });

        const {
            quedaPelos,
            alergiaHenna,
            chumbo,
            sensi,
            caspa,
            oleoPele,
            tipoPelo,
            infoRelevante,
            clientId,
        } = createAnamneseSobrancelhaBody.parse(request.body);

        await prisma.anamneseSobrancelha.create({
            data: {
                tb_anamnese_sob_queda_pelos: quedaPelos,
                tb_anamnese_sob_alergia_henna: alergiaHenna,
                tb_anamnese_sob_chumbo: chumbo,
                tb_anamnese_sob_sensi: sensi,
                tb_anamnese_sob_caspa: caspa,
                tb_anamnese_sob_oleo_pele: oleoPele,
                tb_anamnese_sob_tipo_pelo: tipoPelo,
                tb_anamnese_sob_info_relevante: infoRelevante,
                tb_cliente_id: clientId,
            }
        });
    });

    //Crinado Ficha de anmnese de maquiagem
    app.post('/createAnamneseMaquiagem', async (request) => {
        const createAnamneseMaquiagemBody = z.object({
            tratamento: z.string(),
            manchaPele: z.boolean(),
            lenteCont: z.boolean(),
            tipoPele: z.string(),
            oleosidade: z.string(),
            probPele: z.string(),
            cirurgiaRosto: z.string(),
            infoRelevante: z.string(),
            clientId: z.number(),
        });

        const {
            tratamento,
            manchaPele,
            lenteCont,
            tipoPele,
            oleosidade,
            probPele,
            cirurgiaRosto,
            infoRelevante,
            clientId,
        } = createAnamneseMaquiagemBody.parse(request.body);

        await prisma.anamneseMaquiagem.create({
            data: {
                tb_anamnese_maq_tratamento: tratamento,
                tb_anamnese_maq_mancha_pele: manchaPele,
                tb_anamnese_maq_lente_cont: lenteCont,
                tb_anamnese_maq_tipo_pele: tipoPele,
                tb_anamnese_maq_oleosidade: oleosidade,
                tb_anamnese_maq_prob_pele: probPele,
                tb_anamnese_maq_cirurgia_rosto: cirurgiaRosto,
                tb_anamnese_maq_info_relevante: infoRelevante,
                tb_cliente_id: clientId,
            }
        });
    });

    //Ficha de anmnese de unhas
    app.post('/createAnamneseUnhas', async (request) => {
        const createAnamneseUnhasBody = z.object({
            retCuticula: z.boolean(),
            encravada: z.boolean(),
            probOnicomicose: z.string(),
            prob: z.string(),
            roerUnha: z.boolean(),
            esportesImpacto: z.boolean(),
            piscMar: z.boolean(),
            infoRelevante: z.string(),
            clientId: z.number(),
        });

        const {
            retCuticula,
            encravada,
            probOnicomicose,
            prob,
            roerUnha,
            esportesImpacto,
            piscMar,
            infoRelevante,
            clientId,
        } = createAnamneseUnhasBody.parse(request.body);

        await prisma.anamneseUnhas.create({
            data: {
                tb_anamnese_unhas_ret_cuticula: retCuticula,
                tb_anamnese_unhas_encravada: encravada,
                tb_anamnese_unhas_prob_onicomicose: probOnicomicose,
                tb_anamnese_unhas_prob: prob,
                tb_anamnese_unhas_roer_unha: roerUnha,
                tb_anamnese_unhas_esportes_impacto: esportesImpacto,
                tb_anamnese_unhas_pisc_mar: piscMar,
                tb_anamnese_unhas_info_relevante: infoRelevante,
                tb_cliente_id: clientId,
            }
        });
    });

    //Ficha de anmnese de cílios
    app.post('/createAnamneseCilios', async (request) => {
        const createAnamneseCiliosBody = z.object({
            tratamento: z.string(),
            procedimento: z.string(),
            probOftalmo: z.string(),
            dormeLado: z.boolean(),
            usoColirio: z.boolean(),
            doenca: z.string(),
            infoRelevante: z.string(),
            clientId: z.number(),
        });

        const {
            tratamento,
            procedimento,
            probOftalmo,
            dormeLado,
            usoColirio,
            doenca,
            infoRelevante,
            clientId,
        } = createAnamneseCiliosBody.parse(request.body);

        await prisma.anamneseCilios.create({
            data: {
                tb_anamnese_cil_tratamento: tratamento,
                tb_anamnese_cil_procedimento: procedimento,
                tb_anamnese_cil_prob_oftalmo: probOftalmo,
                tb_anamnese_cil_dorme_lado: dormeLado,
                tb_anamnese_cil_uso_colirio: usoColirio,
                tb_anamnese_cil_doenca: doenca,
                tb_anamnese_cil_info_relevante: infoRelevante,
                tb_cliente_id: clientId,
            }
        });
    });

    //Ficha de anmnese de cabelo
    app.post('/createAnamneseCabelo', async (request) => {
        const createAnamneseCabeloBody = z.object({
            probSaude: z.string(),
            quimica: z.string(),
            frequencia: z.number(),
            probCapFamiliar: z.string(),
            doencaCC: z.string(),
            cirurgiaLesao: z.string(),
            infoRelevante: z.string(),
            clientId: z.number(),
        });

        const {
            probSaude,
            quimica,
            frequencia,
            probCapFamiliar,
            doencaCC,
            cirurgiaLesao,
            infoRelevante,
            clientId,
        } = createAnamneseCabeloBody.parse(request.body);

        await prisma.anamneseCabelo.create({
            data: {
                tb_anamnese_cab_prob_saude: probSaude,
                tb_anamnese_cab_quimica: quimica,
                tb_anamnese_cab_frequencia: frequencia,
                tb_anamnese_cab_prob_cap_familiar: probCapFamiliar,
                tb_anamnese_cab_doenca_cc: doencaCC,
                tb_anamnese_cab_cirurgia_lesao: cirurgiaLesao,
                tb_anamnese_cab_info_relevante: infoRelevante,
                tb_cliente_id: clientId,
            }
        });
    });

    //Mostrando profissionais cadastrados
    app.get('/getProfessionals', async () => {

        const professionals = await prisma.profissional.findMany();

        return { professionals };
    });


    //Mostrando nome de clientes cadastrados
    app.get('/getClients', async () => {

        /*const clients = await prisma.cliente.findMany()

        return { clients };*/

        const cliente = await prisma.cliente.findMany()

        return cliente;
    });


    //Mostrando profissionais online
    app.get('/getProfessionalsOn', async () => {


        const professionals = await prisma.profissional.findMany({
            where: {
                tb_profissional_status: true
            }
        });

        //const professionalOn = professionals.map(professional => professional.tb_profissional_latitude);

        return professionals;
    });

    // Atualizar a localização no banco de dados
    app.put('/saveLocation', async (request) => {
        const updateLocation = z.object({
            longitude: z.number(),
            latitude: z.number()
        });

        const {
            longitude,
            latitude
        } = updateLocation.parse(request.body);

        const profissionalId = 11;

        await prisma.profissional.update({
            where: {
                tb_profissional_id: profissionalId,
            },
            data: {
                tb_profissional_latitude: latitude,
                tb_profissional_longitude: longitude
            }
        });
    });


    const client_id = 1;

    /*app.get('/getItem', async () => {

        const itens = await prisma.item.findMany();

        return itens;
    });*/

    app.get('/getItem', async () => {

        const itens = await prisma.item.findMany({
            include: {
                catalogo: {
                    include: {
                        profissional: true
                    }
                }
            },
        });


        const resultadoFormatado = itens.map((item) => ({
            itemId: item.tb_item_id,
            itemName: item.tb_item_nome,
            itemDesc: item.tb_item_desc,
            itemCost: item.tb_item_valor,
            itemTime: item.tb_item_tempo,
            itemImg: item.tb_item_imagem,
            categoryId: item.tb_categoria_id,
            catalogId: item.tb_catalogo_id,

            professionalId: item.catalogo?.profissional?.tb_profissional_id,
            professionalName: item.catalogo?.profissional?.tb_profissional_nome,

        }));

        return resultadoFormatado;

    });



    app.get('/getAnamneseGeral', async () => {

        const anamneseGeral = await prisma.anamneseGeral.findMany({
            where: {
                tb_cliente_id: client_id
            }
        });

        const anamneseGeralResult = anamneseGeral.map((anamnese) => ({

            anamneseGeralId: anamnese.tb_ficha_anamnese_id,
            anamneseGeralGestante: anamnese.tb_ficha_anamnese_gestante,
            anamneseGeralDiabete: anamnese.tb_ficha_anamnese_diabetes,
            anamneseGeralMedicacao: anamnese.tb_ficha_anamnese_medicacao,
            anamneseGeralAlergia: anamnese.tb_ficha_anamnese_alergia,
            anamneseGeralConvulsao: anamnese.tb_ficha_anamnese_convulsao,
            anamneseGeralHemofilico: anamnese.tb_ficha_anamnese_hemofilico,
            anamneseGeralHipertensao: anamnese.tb_ficha_anamnese_hipertensao,
            anamneseGeralTireoide: anamnese.tb_ficha_anamnese_tireoide,
            ClienteId: anamnese.tb_cliente_id
        }));

        return anamneseGeralResult;

    });


    app.get('/getAnamneseCabelo', async () => {

        const anamneseCabelo = await prisma.anamneseCabelo.findMany({
            where: {
                tb_cliente_id: client_id
            }
        });

        const anamneseCabeloResult = anamneseCabelo.map((anamnese) => ({

            anamneseCabId: anamnese.tb_anamnese_cab_id,
            anamneseCabProbSaude: anamnese.tb_anamnese_cab_prob_saude,
            anamneseCabQuimica: anamnese.tb_anamnese_cab_quimica,
            anamneseCabFrequencia: anamnese.tb_anamnese_cab_frequencia,
            anamneseCabProbFamiliar: anamnese.tb_anamnese_cab_prob_cap_familiar,
            anamneseCabDoencaCc: anamnese.tb_anamnese_cab_doenca_cc,
            anamneseCabCirurgiaLesao: anamnese.tb_anamnese_cab_cirurgia_lesao,
            anamneseCabInfoRelativa: anamnese.tb_anamnese_cab_info_relevante,
            ClienteId: anamnese.tb_cliente_id
        }));

        return anamneseCabeloResult;

    });

    app.get('/getAnamneseUnha', async () => {

        const anamneseUnhas = await prisma.anamneseUnhas.findMany({
            where: {
                tb_cliente_id: client_id
            }
        });

        const anamneseUnhasResult = anamneseUnhas.map((anamnese) => ({

            anamneseUnhaId: anamnese.tb_anamnese_unhas_id,
            anamneseUnhaRetCuticula: anamnese.tb_anamnese_unhas_ret_cuticula,
            anamneseUnhaEncravada: anamnese.tb_anamnese_unhas_encravada,
            anamneseUnhaProbOnicomicose: anamnese.tb_anamnese_unhas_prob_onicomicose,
            anamneseUnhaProb: anamnese.tb_anamnese_unhas_prob,
            anamneseUnhaRoerUnha: anamnese.tb_anamnese_unhas_roer_unha,
            anamneseUnhaEsportesImpacto: anamnese.tb_anamnese_unhas_esportes_impacto,
            anamneseUnhaPiscMar: anamnese.tb_anamnese_unhas_pisc_mar,
            anamneseUnhaInfoRelevante: anamnese.tb_anamnese_unhas_pisc_mar,
            ClienteId: anamnese.tb_cliente_id
        }));

        return anamneseUnhasResult;

    });

    app.get('/getAnamneseMaq', async () => {

        const anamneseMaq = await prisma.anamneseMaquiagem.findMany({
            where: {
                tb_cliente_id: client_id
            }
        });

        const anamneseMaqResult = anamneseMaq.map((anamnese) => ({

            anamneseMaqId: anamnese.tb_anamnese_maq_id,
            anamneseMaqTratamento: anamnese.tb_anamnese_maq_tratamento,
            anamneseMaqManchaPele: anamnese.tb_anamnese_maq_mancha_pele,
            anamneseMaqLenteCont: anamnese.tb_anamnese_maq_lente_cont,
            anamneseMaqTipoPele: anamnese.tb_anamnese_maq_tipo_pele,
            anamneseMaqOleosidade: anamnese.tb_anamnese_maq_oleosidade,
            anamneseMaqProbPele: anamnese.tb_anamnese_maq_prob_pele,
            anamneseMaqCirurgiaRosto: anamnese.tb_anamnese_maq_cirurgia_rosto,
            anamanamneseMaqInfoRelevante: anamnese.tb_anamnese_maq_info_relevante,
            ClienteId: anamnese.tb_cliente_id
        }));

        return anamneseMaqResult;

    });


    app.get('/getAnamneseSob', async () => {

        const anamneseSob = await prisma.anamneseSobrancelha.findMany({
            where: {
                tb_cliente_id: client_id
            }
        });

        const anamneseSobResult = anamneseSob.map((anamnese) => ({
            anamneseSobId: anamnese.tb_anamnese_sob_id,
            anamneseSobQuedaPelo: anamnese.tb_anamnese_sob_queda_pelos,
            anamneseSobAlergiaHenna: anamnese.tb_anamnese_sob_alergia_henna,
            anamneseSobChumbo: anamnese.tb_anamnese_sob_chumbo,
            anamneseSobSensi: anamnese.tb_anamnese_sob_sensi,
            anamneseSobCaspa: anamnese.tb_anamnese_sob_caspa,
            anamneseSobOleoPele: anamnese.tb_anamnese_sob_oleo_pele,
            anamneseSobTipoPelo: anamnese.tb_anamnese_sob_tipo_pelo,
            anamneseSobInfoRelevante: anamnese.tb_anamnese_sob_info_relevante,
            ClienteId: anamnese.tb_cliente_id
        }));

        return anamneseSobResult;

    });



    app.get('/getAnamneseCilios', async () => {

        const anamneseCil = await prisma.anamneseCilios.findMany({
            where: {
                tb_cliente_id: client_id
            }
        });

        const anamneseCilResult = anamneseCil.map((anamnese) => ({

            anamneseCilId: anamnese.tb_anamnese_cil_id,
            anamneseCilTratamento: anamnese.tb_anamnese_cil_tratamento,
            anamneseCilProcedimento: anamnese.tb_anamnese_cil_procedimento,
            anamneseCilProbOftalmo: anamnese.tb_anamnese_cil_prob_oftalmo,
            anamneseCilDormeLado: anamnese.tb_anamnese_cil_dorme_lado,
            anamneseCilUsoColirio: anamnese.tb_anamnese_cil_uso_colirio,
            anamneseCilDoenca: anamnese.tb_anamnese_cil_doenca,
            anamneseCilInfoRelevante: anamnese.tb_anamnese_cil_info_relevante,
            ClienteId: anamnese.tb_cliente_id
        }));

        return anamneseCilResult;

    });

}






