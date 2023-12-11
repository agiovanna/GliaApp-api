import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function run() {

    await prisma.categoria.deleteMany()


    //Categoria
    await Promise.all([

        //Categoria 01
        prisma.categoria.create({
            data: {
                tb_categoria_nome: 'Sobrancelha',
            }
        }),

        //Categoria 02
        prisma.categoria.create({
            data: {
                tb_categoria_nome: 'Maquiagem',
            }
        }),

        //Categoria 03
        prisma.categoria.create({
            data: {
                tb_categoria_nome: 'Unhas',
            }
        }),

        //Categoria 04
        prisma.categoria.create({
            data: {
                tb_categoria_nome: 'Cílios',
            }
        }),

        //Categoria 05
        prisma.categoria.create({
            data: {
                tb_categoria_nome: 'Cabelo',
            }
        }),
    ]);

    const categorias = await prisma.categoria.findMany();

    console.log('Categorias cadastradas:');
    console.log(categorias);


   
}

run().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});