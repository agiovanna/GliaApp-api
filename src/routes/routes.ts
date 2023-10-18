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






