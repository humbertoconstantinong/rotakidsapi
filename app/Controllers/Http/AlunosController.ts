import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno';
import {v4 as uuidv4} from 'uuid'
import Application  from '@ioc:Adonis/Core/Application'
export default class AlunosController {

    private validationOptions = {
        types: ['image'],
        size: '5mb',
    }
    public async store({ auth, request, response }: HttpContextContract) {
        try {
          // Recupera o usuário autenticado
          const user = auth.user!;
          // Certifique-se de usar 'user!' para indicar que você tem certeza de que o usuário não é nulo
    
          const body = request.body();
          const image = request.file('image', this.validationOptions);
    
          if (image) {
            const imageName = `${uuidv4()}.${image.extname}`;
            await image.move(Application.tmpPath('uploads'), {
              name: imageName,
            });
            body.image = imageName;
          }
    
          // Cria uma nova instância de Aluno com o userId definido
          const novoAluno = new Aluno();
          novoAluno.merge({ ...body, userId: user.id });
          // Use 'userId' em vez de 'user_id'
    
          // Salva o novo aluno no banco de dados
          await novoAluno.save();
    
          response.status(201).json({
            message: 'Aluno inserido com sucesso!',
            data: novoAluno,
          });
        } catch (error) {
          console.error(error);
          response.status(500).send('Erro ao inserir o aluno.');
        }
      }
    public async index({ auth, response }: HttpContextContract) {
        try {
          // Recupera o usuário autenticado
          const user = auth.user!;
         
    
          // Obtém os alunos associadas ao usuário
          const alunos = await Aluno.query()
            .where('user_id', user.id)
            .exec();

    
          return response.status(200).json(alunos);
        } catch (error) {
          console.error(error);
          return response.status(500).send('Erro ao obter os alunos do usuário.');
        }
      }

    public async show({params}: HttpContextContract){
        const aluno = await Aluno.findOrFail(params.id)

        // await aluno.load("comments")
        return{
            data: aluno
        }
    }
}
