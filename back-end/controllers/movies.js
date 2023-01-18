const {getMovies} = require("./")
const {genSaltSync, hashSync, compareSync}= require("bcrypt")
const {sign} = require("jsonwebtoken")


const getMovies =(req,res) => {
    try{
        const authHeader = req.header.authorization;
        if (authHeader){
            const token = authHeader.split('')[1];
            jwt.verify(token, process.env.SECRET_KEY, (err) => {
                if (err)
                    return res.status (403).send('Wrong Token')
                db.executeSql("SELECT * FROM movies", [],
                    (err, data) => {
                        if ((err){
                            throw err
                        } else{
                            if (data === 0) {
                                res.status(404).send('no movies found');
                            }else{
                                res.status(200).send(data);
                            }
                        }}

                    )}
            )
        }else{
            res.sendStatus(401);
        }
    } catch (err) {
        return res.status(500).send(({error:err,message:err.message}));
    }
}
