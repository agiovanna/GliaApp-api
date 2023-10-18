import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes/routes';

const app = Fastify();


//Este comando possibilita o front-end acessar os dados desta api 
app.register(cors);

//Rotas da aplicação
app.register(appRoutes);

//Servidor
app.listen({ port: 3000, host:'0.0.0.0' }).then(() => {
    console.log('Server Running!')
});




