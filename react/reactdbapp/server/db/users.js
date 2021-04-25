const knex = require('./knex');

function getAllUsers(){
    return knex("users").select("*");
}

function getUser(id){
    return knex("users").where("id",id).select("*");
}

function insertUser(user){
    return knex("users").insert(user);
}

function deletetUser(id){
    return knex("users").where("id",id).del();
}

function updateUser(id, user){
    return knex("users").where("id",id).update(user);
}




module.exports = {
    getAllUsers,
    getUser,
    deletetUser,
    updateUser,
    insertUser
}