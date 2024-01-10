import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Escola from 'App/Models/Escola';

export default class EscolasController {
    public async store({ auth, request, response }: HttpContextContract) {
        try {
          // Recupera o usuário autenticado
          const user = auth.user!;
          // Certifique-se de usar 'user!' para indicar que você tem certeza de que o usuário não é nulo
    
          // Cria uma nova instância de Escola com o user_id definido
          const novaEscola = new Escola();
          novaEscola.merge({ ...request.body(), userId: user.id });
          
          // Salva a nova escola no banco de dados
          await novaEscola.save();
    
          response.status(201).json({
            message: 'Escola inserida com sucesso!',
            data: novaEscola,
          });
        } catch (error) {
          console.error(error);
          response.status(500).send('Erro ao inserir a escola.');
        }
      }
    public async index({ auth, response }: HttpContextContract) {
        try {
          // Recupera o usuário autenticado
          const user = auth.user!;
          // Certifique-se de usar 'user!' para indicar que você tem certeza de que o usuário não é nulo
    
          // Obtém as escolas associadas ao usuário
          const escolas = await Escola.query()
            .where('user_id', user.id)
            .exec();
    
          return response.status(200).json(escolas);
        } catch (error) {
          console.error(error);
          return response.status(500).send('Erro ao obter as escolas do usuário.');
        }
      }

      public async show({params}: HttpContextContract){
        const escola = await Escola.findOrFail(params.id)

        await escola.load("alunos")
        return{
            data: escola
        }
    }
}
