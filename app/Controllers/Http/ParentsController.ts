import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Parent from 'App/Models/Parent';

export default class ParentsController {

    async store({request}: HttpContextContract){
        try {
            const body = request.body()
            const parent = await Parent.create(body);

            return parent

        } catch (error) {
            return error
            
        }
    }
}
