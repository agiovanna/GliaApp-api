import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes/routes';
import { authRoutes } from './routes/auth';

const app = Fastify();


//Este comando possibilita o front-end acessar os dados desta api 
app.register(cors);

//Rotas da aplicação
app.register(appRoutes);
app.register(authRoutes);

//Servidor
app.listen({ port: 3000, host:'0.0.0.0' }).then(() => {
    console.log('Server Running!')
});




