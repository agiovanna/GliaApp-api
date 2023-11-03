import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes/routes';
import { authRoutes } from './routes/auth';
import { Server as SocketServer } from 'socket.io';

const app = Fastify();
const httpServer = app.server;
const io = new SocketServer(httpServer);

//Este comando possibilita o front-end acessar os dados desta api 
app.register(cors);

//Conexão com o socket.io que permite a vizualização em tempo real
io.on('connection', (socket) => {
    console.log('Client Connected :D');

    io.emit('searchProfessionals');
});

//Rotas da aplicação
app.register(appRoutes);
app.register(authRoutes);

//Servidor
app.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
    console.log('Server Running!')
});




