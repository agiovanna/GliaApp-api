import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import z from 'zod';


export async function appRoutes(app: FastifyInstance) {

    const client_id = 1;


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

        const professionals = await prisma.profissional.findMany({
            select:{
                tb_profissional_id: true,
                tb_profissional_nome: true
            }
        });

        return { professionals };
    });


    //Mostrando nome de clientes cadastrados
    app.get('/getClients', async () => {

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
            itemImg: item.tb_item_img,
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

    app.post('/createRequest', async (request) => {

        const createClientBody = z.object({
            itemId: z.number(),
            clienteId: z.number(),
            street: z.string(),
            postalCode: z.string(),
            neighborhood: z.string(),
            city: z.string(),
            state: z.string(),
        });

        const {
            itemId,
            clienteId,
            street,
            postalCode,
            neighborhood,
            city,
            state,
        } = createClientBody.parse(request.body);

        await prisma.solicitacao.create({
            data: {
                tb_solicitacao_status: "Em andamento",
                tb_item_id: itemId,
                tb_cliente_id: clienteId,
                tb_solicitacao_bairro: neighborhood,
                tb_solicitacao_cidade: city,
                tb_solicitacao_rua: street,
                tb_solicitacao_estado: state,
                tb_solicitacao_cep: postalCode,
            }
        });

    });


    app.get('/getRequest', async () => {

        const requestDatas = await prisma.solicitacao.findMany({
            include: {
                cliente: true,
                item: {
                    include: {
                        catalogo: {
                            include: {
                                profissional: true
                            }
                        }
                    }
                },

            },
            where: {
                tb_solicitacao_status: "Em andamento"
            }
        })

        const requets = requestDatas.map((data) => ({

            requestId: data.tb_solicitacao_id,
            requestStreet: data.tb_solicitacao_rua,
            requestNeighborhood: data.tb_solicitacao_bairro,
            requestPostalCode: data.tb_solicitacao_cep,
            requestCity: data.tb_solicitacao_cidade,
            itemName: data.item?.tb_item_nome,
            itemCost: data.item?.tb_item_valor,
            itemDescription: data.item?.tb_item_desc,
            clientName: data.cliente?.tb_cliente_nome,
            clientImg: data.cliente?.tb_cliente_img,
            professionalName: data.item?.catalogo?.profissional.tb_profissional_nome,
        }));

        return requets;
    });


    app.put('/updateRequest', async (request) => {

        const statusRequest = z.object({
            requestId: z.number(),
        })

        const {
            requestId
        } = statusRequest.parse(request.body);


        await prisma.solicitacao.update({
            where: {
                tb_solicitacao_id: requestId,
            },
            data: {
                tb_solicitacao_status: "Aceita"
            }
        });
    });

    app.post('/createService', async (request) => {

        const currentTime = new Date();

        const createServiceBody = z.object({
            professionalId: z.number(),
            requestId: z.number(),
        });

        const {
            professionalId,
            requestId
        } = createServiceBody.parse(request.body);

        await prisma.servico.create({
            data: {
                tb_servico_status: "Em andamento",
                tb_servico_hora_inicio: currentTime,
                tb_profissional_id: professionalId,
                tb_solicitacao_id: requestId,
                tb_servico_hora_final: currentTime
            }
        });

    });

    app.put('/updateService', async (request) => {

        const createServiceBody = z.object({
            serviceId: z.number(),
        });

        const {
            serviceId
        } = createServiceBody.parse(request.body);

        const currentTime = new Date();

        await prisma.servico.update({
            where: {
                tb_servico_id: serviceId,
            },
            data: {
                tb_servico_hora_final: currentTime,
            }
        });

    });

    //CREATE

    //criando item
    app.post('/createItem', async (request) => {
        const createItemBody = z.object({
            name: z.string(),
            describe: z.string(),
            cost: z.number(),
            time: z.number(),
            imgReference: z.string(),
            category_id: z.number(),
            catalog_id: z.number(),
        });

        const {
            name,
            describe,
            cost,
            time,
            imgReference,
            category_id,
            catalog_id,
        } = createItemBody.parse(request.body);



        await prisma.item.create({
            data: {
                tb_item_nome: name,
                tb_item_desc: describe,
                tb_item_valor: cost,
                tb_item_tempo: time,
                tb_item_img: imgReference,
                tb_categoria_id: category_id,
                tb_catalogo_id: catalog_id,

            }
        });
    });

    //criando catálogo
    app.post('/createCatalog', async (request) => {
        const createCatalogBody = z.object({
            name: z.string(),
            describe: z.string(),
            professional_id: z.number(),
        });

        const {
            name,
            describe,
            professional_id
        } = createCatalogBody.parse(request.body);

        await prisma.catalogo.create({
            data: {
                tb_catalogo_nome: name,
                tb_catalogo_desc: describe,
                tb_profissional_id: professional_id
            }
        });
    });

    //criando avaliação
    app.post('/createRating', async (request) => {
        const createRatingBody = z.object({
            score: z.number(),
            comment: z.string(),
            service_id: z.number(),
        });

        const {
            score,
            comment,
            service_id
        } = createRatingBody.parse(request.body);

        await prisma.avaliacao.create({
            data: {
                tb_avaliacao_nota: score,
                tb_avaliacao_comentario: comment,
                tb_servico_id: service_id
            }
        });
    });

    //SELECTS

    //Mostrando informações dos profissionais cadastrados
    app.get<{ Params: { id: string } }>('/getProfessionalsInfo/:id', async (request) => {

        const id = parseInt(request.params.id, 10);

        const info = await prisma.profissional.findUnique({
            where: {
                tb_profissional_id: id,
            },
            select: {
                tb_profissional_desc: true,
                tb_profissional_cnpj: true,
            }
        });

        return { info };
    });


    //Mostrando media das notas das avaliações
    app.get<{ Params: { id: string } }>('/getRatingsStars/:id', async (request) => {

        const id = parseInt(request.params.id, 10);

        const ratingStars = await prisma.avaliacao.aggregate({

            where: {
                tb_avaliacao_id: id
            },
            _avg: {
                tb_avaliacao_nota: true
            }
        });

        const stars = ratingStars._avg.tb_avaliacao_nota || 0; // Se não houver avaliações, a média será 0

        return { stars };
    });

    //mostrando o número de avaliações feitas
    app.get<{ Params: { id: string } }>('/getRatingCount/:id', async (request) => {
        const id = parseInt(request.params.id, 10);

        const ratingCount = await prisma.avaliacao.count({
            where: {
                servico:{
                tb_profissional_id: id
                }
            },
        });

        return { ratingCount };
    });




    //Mostrando avaliações e quem as fez segundo profissional
    app.get<{ Params: { id: string } }>('/getRatings/:id', async (request) => {

        const id = parseInt(request.params.id, 10);

        const rating = await prisma.servico.findMany({
            where: {
                tb_profissional_id: id,
              },
              include: {
                avaliacao: {
                  select: {
                    tb_avaliacao_nota: true,
                    tb_avaliacao_comentario: true,
                    tb_avaliacao_createdAt: true,
                  },
                },
                solicitacao: {
                  include: {
                    cliente: {
                      select: {
                        tb_cliente_nome: true,
                        tb_cliente_img: true,
                      },
                    },
                  },
                },
              },
            });

        return { rating };
    });




    //UPDATE 

    //atualizando imagem cliente
    app.put<{ Params: { id: string } }>('/updateImgClient/:id', async (request) => {
        const updateImgClientBody = z.object({
            imgReference: z.string(),
        });

        const id = parseInt(request.params.id, 10);
        const update = updateImgClientBody.parse(request.body);

        // pelo menos um campo para atualização foi inserido ?
        if (Object.keys(update).length === 0) {
            return { message: "É necessário que uma imagem seja inserida." };
        }

        //atualização no banco de dados
        const updatedImgClient = await prisma.cliente.update({
            where:
            {
                tb_cliente_id: id
            },
            data:
            {
                tb_cliente_img: update.imgReference,
            }
        });

        console.log("Sucesso na imagem!");
    });



    //atualizando imagem profissional
    app.put<{ Params: { id: string } }>('/updateImgProfessional/:id', async (request) => {
        const updateImgProfessionalBody = z.object({
            imgReference: z.string(),
        });

        const id = parseInt(request.params.id, 10);
        const update = updateImgProfessionalBody.parse(request.body);

        // pelo menos um campo para atualização foi inserido ?
        if (Object.keys(update).length === 0) {
            return { message: "É necessário que uma iamgem seja inserida." };
        }

        //atualização no banco de dados
        await prisma.profissional.update({
            where:
            {
                tb_profissional_id: id
            },
            data:
            {
                tb_profissional_img: update.imgReference,
            }
        });

        console.log("Sucesso na imagem!");
    });


    //atualizando descrição profissional
    app.put<{ Params: { id: string } }>('/updateDescProfessional/:id', async (request) => {
        const updateDescProfessionalBody = z.object({
            desc: z.string(),
        });

        const id = parseInt(request.params.id, 10);
        const update = updateDescProfessionalBody.parse(request.body);

        // pelo menos um campo para atualização foi inserido ?
        if (Object.keys(update).length === 0) {
            console.log('Nenhuma descrição digitada.');
        }

        //atualização no banco de dados
        await prisma.profissional.update({
            where:
            {
                tb_profissional_id: id
            },
            data:
            {
                tb_profissional_desc: update.desc,
            }
        });

        console.log("Sucesso na imagem!");
    });


    //Mostrando catalogos e itens cadastrados
    app.get<{ Params: { id: string } }>('/getCatalog/:id', async (request) => {

        const id = parseInt(request.params.id, 10);

        const catalog = await prisma.catalogo.findMany({

            where: {
                tb_profissional_id: id
            },
             select: {
                tb_catalogo_nome: true,
                tb_catalogo_desc: true,
                tb_catalogo_id: true,

                profissional:{
                    select:{
                        tb_profissional_nome: true,
                        tb_profissional_id: true
                    }
                },

                itens: {
                    select: {
                        tb_item_img: true,
                        tb_item_nome: true,
                        tb_item_desc: true,
                        tb_item_tempo: true,
                        tb_item_valor: true,
                        tb_item_id: true,
                        tb_categoria_id: true,
                        tb_catalogo_id: true
                    },
                    
                },
            },
        });



        return { catalog };
    });


}








