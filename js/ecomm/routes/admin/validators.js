const {check} = require('express-validator');
const usersRepo = require ('../../repositories/users');

module.exports = {
    requireTitle: check('title')
        .trim()
        .isLength({min:3, max:20})
        .withMessage('Length should be between 3 and 20'),

    requirePrice: check('price')
        .trim()
        .toFloat()
        .isFloat({min:1})
        .withMessage('Invalid Price. It should be a number greater than 1.'),

    requireEmail: check ('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must be a valid Email')
        .custom(async(email)=>{
        const existingUser = await usersRepo.getOneBy({email});
        if(existingUser){
            throw new Error ('Email is already in use');
        }
    }),

    requirePassword : check ('password')
                        .trim()
                        .isLength({min:6,max:12})
                        .withMessage('Password length should be between 6 to 12 characters'),
    
    requireEmailExists : check ('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must be a valid Email')
        .custom (async (email)=>{
            const existingUser = await usersRepo.getOneBy({email});
            if (!existingUser){
                throw new Error ('User not found. Please Sign Up.');
            }
    }),
    requireValidPasswordForUser : check('password')
        .trim()
        .custom (async (password,{req})=>{
            const existingUser = await usersRepo.getOneBy({email : req.body.email});
            if (!existingUser){
                throw new Error ('Invalid Password');
            }

            const validPassword = await usersRepo.comparePassword(
                existingUser.password, password);
            if (!validPassword){
                throw new Error ('Incorrect Password');
            }
            /*else{
                if(existingUser.password!== password){
                    throw new Error ('Incorrect Password');
                }
            }*/
        })
}