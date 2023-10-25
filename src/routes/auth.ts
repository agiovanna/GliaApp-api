import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import z from 'zod';

export async function authRoutes(app: FastifyInstance) {
    
  // Rota de login para clientes
  app.post('/login/client', async (request) => {
    const loginBody = z.object({
      email: z.string(),
      password: z.string(),
    });

    const { email, password } = loginBody.parse(request.body);

    const client = await prisma.cliente.findUnique({
      where: {
        tb_cliente_email: email,
      },
    });

    if (!client || client.tb_cliente_senha !== password) {
      return { error: 'Credenciais inválidas' };
    }

    return { message: 'Login bem-sucedido', client };
  });

  // Rota de login para profissionais
  app.post('/login/professional', async (request) => {
    const loginBody = z.object({
      email: z.string(),
      password: z.string(),
    });

    const { email, password } = loginBody.parse(request.body);

    const professional = await prisma.profissional.findUnique({
      where: {
        tb_profissional_email: email,
      },
    });

    if (!professional || professional.tb_profissional_senha !== password) {
      return { error: 'Credenciais inválidas' };
    }

    return { message: 'Login bem-sucedido', professional };
  });
}
