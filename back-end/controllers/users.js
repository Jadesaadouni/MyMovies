
const {genSaltSync, hashSync, compareSync}= require("bcrypt")
const {sign} = require("jsonwebtoken")

const registerUser=(req,res)=>{
    const sqlInsert = "INSERT INTO users (mail, password) VALUES (?, ?)";
    var mail = req.body.email
    if(!email)
        return res.status(400).send({msg: 'Email should not be empty' })
    var password =req.body.password
    bcrypt.hash(password, saltRounds, (err,bash)=> {
        if (err)
            throw (err)
        db.execute(sqlInsert, [mail, hash],
            (err, result) => {
                if (err)
                    throw(err)
                return res.status(200).send({msg: 'Registration completed'})
            }
        );
    });
};