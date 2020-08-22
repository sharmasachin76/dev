
const Repository = require('./repository');

class UsersRepository extends Repository{
    async comparePassword(password1, password2){
        if (password1===password2){
            return true;
        }
        return false;
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