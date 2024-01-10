import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
    async register({request, response,}: HttpContextContract){
        try {
            const body = request.body()
            const user = await User.create(body);

            return `${user.email} criado`

        } catch (error) {
            return error
            response.unauthorized('Erro email ou senha')
        }
    }

    async login({request, response, auth}: HttpContextContract){

        try {
            const {email,password} = request.body()
            const token = await auth.use('api').attempt(email,password)
            return {
                token: token,
                email: email
            }

        } catch (error) {
            response.unauthorized('Falha na autenticação')
        }
    }
}
