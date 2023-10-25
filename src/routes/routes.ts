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
        });

        const {
            name,
            birthDate,
            telephone,
            email,
            password
        } = createClientBody.parse(request.body);

        await prisma.cliente.create({
            data: {
                tb_cliente_nome: name,
                tb_cliente_dt_nasc: birthDate,
                tb_cliente_tel: telephone,
                tb_cliente_email: email,
                tb_cliente_senha: password,
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
    
        await prisma.fichaAnamnese.create({
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
            tipoPele: z.string(),
            tipoPelo: z.string(),
            infoRelevante: z.string(),
            fichaAnamneseId: z.number(),
        });
    
        const {
            quedaPelos,
            alergiaHenna,
            chumbo,
            sensi,
            caspa,
            tipoPele,
            tipoPelo,
            infoRelevante,
            fichaAnamneseId,
        } = createAnamneseSobrancelhaBody.parse(request.body);
    
        await prisma.anamneseSobrancelha.create({
            data: {
                tb_anamnese_sob_queda_pelos: quedaPelos,
                tb_anamnese_sob_alergia_henna: alergiaHenna,
                tb_anamnese_sob_chumbo: chumbo,
                tb_anamnese_sob_sensi: sensi,
                tb_anamnese_sob_caspa: caspa,
                tb_anamnese_sob_tipo_pele: tipoPele,
                tb_anamnese_sob_tipo_pelo: tipoPelo,
                tb_anamnese_sob_info_relevante: infoRelevante,
                tb_ficha_anamnese_id: fichaAnamneseId,
            }
        });
    });

    //Crinado Ficha de anmnese de maquiagem
    app.post('/createAnamneseMaquiagem', async (request) => {
        const createAnamneseMaquiagemBody = z.object({
            tratamento: z.string(),
            machaPele: z.boolean(),
            lenteCont: z.boolean(),
            tipoPele: z.string(),
            oleosidade: z.string(),
            probPele: z.string(),
            cirurgiaRosto: z.string(),
            infoRelevante: z.string(),
            fichaAnamneseId: z.number(),
        });
    
        const {
            tratamento,
            machaPele,
            lenteCont,
            tipoPele,
            oleosidade,
            probPele,
            cirurgiaRosto,
            infoRelevante,
            fichaAnamneseId,
        } = createAnamneseMaquiagemBody.parse(request.body);
    
        await prisma.anamneseMaquiagem.create({
            data: {
                tb_anamnese_maq_tratamento: tratamento,
                tb_anamnese_maq_macha_pele: machaPele,
                tb_anamnese_maq_lente_cont: lenteCont,
                tb_anamnese_maq_tipo_pele: tipoPele,
                tb_anamnese_maq_oleosidade: oleosidade,
                tb_anamnese_maq_prob_pele: probPele,
                tb_anamnese_maq_cirurgia_rosto: cirurgiaRosto,
                tb_anamnese_maq_info_relevante: infoRelevante,
                tb_ficha_anamnese_id: fichaAnamneseId,
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
        fichaAnamneseId: z.number(),
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
        fichaAnamneseId,
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
            tb_ficha_anamnese_id: fichaAnamneseId,
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
            fichaAnamneseId: z.number(),
        });
    
        const {
            tratamento,
            procedimento,
            probOftalmo,
            dormeLado,
            usoColirio,
            doenca,
            infoRelevante,
            fichaAnamneseId,
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
                tb_ficha_anamnese_id: fichaAnamneseId,
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
            fichaAnamneseId: z.number(),
        });
    
        const {
            probSaude,
            quimica,
            frequencia,
            probCapFamiliar,
            doencaCC,
            cirurgiaLesao,
            infoRelevante,
            fichaAnamneseId,
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
                tb_ficha_anamnese_id: fichaAnamneseId,
            }
        });
    });

    //Mostrando profissionais cadastrados
    app.get('/getProfessionals', async () => {

        const professionals = await prisma.profissional.findMany();

        return { professionals };
    });


    //Mostrando clientes cadastrados
    app.get('/getClients', async () => {

        /*const clients = await prisma.cliente.findMany()

        return { clients };*/

        const cliente = await prisma.cliente.findMany();

        const cliente1 = cliente.map(cliente => cliente.tb_cliente_nome);


        return cliente1;
    });
    
}






