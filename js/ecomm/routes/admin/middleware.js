const {validationResult} = require ('express-validator');

module.exports = {
    handleErrors(templateFunc, datacb){
        return async (req,res,next)=>{
                const errors = validationResult(req);
                if (!errors.isEmpty()){
                    let data={};
                    if(datacb){
                        data = await datacb(req);
                    }

                    return res.send(templateFunc( { errors, ...data }));
                }
                next();
        };
    },
    requireAuth(req,res,next){
        if(!req.session.userId){
            return res.redirect('/ecomm/signin');
        }
        next();
    }
};