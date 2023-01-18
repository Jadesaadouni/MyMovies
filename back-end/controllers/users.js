const {postUser} = require("./routes")
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

const loginUser=(req,res)=>{
    const sqlInsert = "SELECT * FROM users WHERE mail = ?"
    var mail = req.body.email
    var password =req.body.password
    db.execute(sqlSearch, [mail], (err, result) =>{
        if (err)
            throw (err)
        if (result.length ===0)
            return res.status(403).send({msg: 'Authentication failed, wrong email or password'})
        var user = result [0]
        bcrypt.compare(password, user.password, (err,result)=> {
            if(err)
                throw (err)
            if (result == false)
                return res.status(403).send({msg: 'Authentication failed, wrong email or password'})
        const token =jwt.sign ({id:result[0].id.toString()},process.env.SECRET_KEY)
        return res.status(200).send({msg: "Connection accepted", user: result[0],token})})
        })
}
