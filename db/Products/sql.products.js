module.exports = class SQLCient{
    constructor (config, tableName){
        this.knex= require('knex')(config)
        this.table= tableName
    }
    async getByIdDB(id){
        try{
            const product = await this.knex
                .from(this.table)
                .select("title", "price", "thumbnail")
                .where({ id: id })
                return product
        } catch(error){
            console.log(error.message);
        }
    }
    async getAllDB(){
        try{
            const products= await this.knex.from(this.table).select("title", "price", "thumbnail")

            console.table(products)
            return products
        }
        catch(error){
            console.log(error.message);
    }
}
    async saveDB(product){
        try{
            await this.knex(this.table).insert(product)
        } catch (error){
            console.log(error.message);
        }
    }
    async updateDB(product, id){
        try{
            await this.knex.from(this.table).where({id:id}).update({product})
        }catch(error){
            console.log(error.message);
        }
    }
    async deleteByIdDB(id){
        try{
            await this.knex.from(this.table).where({id:id}).del(); 
        }catch(error){
            console.log(error.message);
        }
    }
    async deleteAllDB(){
        try{
            await this.knex.from(this.table).del()
        }catch(error){
            console.log(error.message);
        }
    }
}