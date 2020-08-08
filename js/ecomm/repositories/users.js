const fs = require('fs');
const crypto = require('crypto');

class UsersRepository{
    constructor(filename){
       if(!filename){
            throw new Error('Creating a repo requires a filename');
        }
        this.filename = filename;
        try{
            fs.accessSync (this.filename);
        }
        catch (err){
            fs.writeFileSync(this.filename,'[]');    
        }
    }

    async getAll(){
        const contents = await fs.promises.readFile(this.filename, {
            encoding: 'utf8'
        });
        const data = JSON.parse(contents);
        return data;
    }

    async create(attrs){
        attrs.id = this.randomId();
        let records = await this.getAll();
        records.push(attrs);
        await this.writeAll(records);
       
    }
    async writeAll(records){
        await fs.promises.writeFile(this.filename,JSON.stringify(records,null,2));
    } 

    randomId(){
        return crypto.randomBytes(4).toString('hex');
    } 

    async getOne(id){
        const records = await this.getAll();
        return records.find(record=> record.id===id);

    }

    async delete(id){
        const records = await this.getAll();
        const filteredRecord =  records.filter(record=> record.id!==id);
        await this.writeAll(filteredRecord);

    }

    async update(id,attrs){
        const records = await this.getAll();
        const record =  records.find(record=> record.id===id);
        if(!record){
            throw new Error (`Record with ${id} not found`);
        }
        else{
            Object.assign(record,attrs);
            await this.writeAll(records);
        }

    }
    async getOneBy(filters){
        const records = await this.getAll();

        for (let record of records){
            let found = true;
            for (let key in filters){
                if(record[key] !== filters[key]){
                    found = false;
                }
            }
            if (found){
                return record;
            }
        }
        

    }
}


module.exports = new UsersRepository('users.json');

// another file
// const repo = require('./users');
// repo.getAll() and others


// nodule.exports = UserRepository; exports full file
// we need to do in another class like
// const UserRepository = require('./users');
// const repo = new UsersRepository('users.json');




/*
const test = async ()=>{
    const repo = new UsersRepository('users.json');
    //await repo.create({email:'test2@test.com',password:'abc'});
   // console.log(users);
    //const user = await repo.delete('64b93376');
    //const users = await repo.getAll();
  //  await repo.update('d16fbd42',{password:'mypass'});

  //  const users = await repo.getAll();
    //console.log(users);

     const user = await repo.getOneBy({password:'mypass'});
    console.log(user);


}

test();
*/