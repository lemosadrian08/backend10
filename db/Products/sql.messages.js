module.exports = class SQLCientChat{
    constructor (config, tableName){
        this.knex= require('knex')(config)
        this.table= tableName
    }
    async getByIdDBM(id){
        try{
            const message = await this.knex
                .from(this.table)
                .select("date", "author", "text")
                .where({ id: id })
                return message
        } catch(error){
            console.log(error.message);
        }
    }
    async getAllDBM(){
        try{
            const messages= await this.knex.from(this.table).select("date", "author", "text")
            console.table(messages)
            return messages
        }
        catch(error){
            console.log(error.message);
    }
}
    async saveDBM(message){
        try{
            await this.knex(this.table).insert(message)
            /* await this.knex(this.table).insert(message) */

        } catch (error){
            console.log(error.message);
        }
    }
    async updateDBM(message, id){
        try{
            await this.knex.from(this.table).where({id:id}).update({message})
        }catch(error){
            console.log(error.message);
        }
    }
    async deleteByIdDBM(id){
        try{
            await this.knex.from(this.table).where({id:id}).del(); 
        }catch(error){
            console.log(error.message);
        }
    }
    async deleteAllDBM(){
        try{
            await this.knex.from(this.table).del()
        }catch(error){
            console.log(error.message);
        }
    }
}