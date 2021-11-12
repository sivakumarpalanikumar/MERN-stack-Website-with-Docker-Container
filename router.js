const express = require("express")
const route = express.Router()
const User = require("./usershema")
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")


const mailer = require("nodemailer")



const sendEmail = (t,name) => {

    const Transport = mailer.createTransport({
         host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        service:"Gmail",
        
        auth: {
          user: "pksivakumar2000@gmail.com",
          pass: "danielraj",
        },tls:{
            rejectUnauthorized:false
        }
      })


    //   `<h1>Registration completed for cyron security</h1>
    //     <p>Thank you for subscribing.</p>
    //     </div>`

      Transport.sendMail({
        from: "pksivakumar2000@gmail.com",
        to: t,
        subject: "Cryon security registeration completed",
        text: `<h1>you are successfully registered</h1>`,
      } , function(error, response){
          if(error){
              console.log(error)
          }
          else{
              console.log("email send successfully")
          } 
      } )


}


// data post method 
route.post('/', async (req, res) => {
    try {
        var check_email = await User.findOne({ email: req.body.email })
    
        if (check_email) {
            return  res.status(400).json("Email already Exist please choose anathor email")
          
        }
        else {
            var pass_hash = await bcrypt.hash(req.body.password, 10)
                   
            var db = {
                name: req.body.name,
                email: req.body.email,
                password: pass_hash,

            }
            console.log("a");
            sendEmail(req.body.email , req.body.name)
            User.create(db,(err,data)=>{
                if (err) {
                    console.log("Error> Scorecard maker>",err)
                    res.json({"message":"Error"})
                }else{
                    res.json({"message":"success"})
                }

            })

            
            
            


        }
    }
    catch (err) {
       console.log("k",err);
       res.json(err)
    }

})




//  delete user from database
route.delete("/", async (req, res) => {
    try {
        await User.findByIdAndRemove({ _id: req.body._id })
        res.status(200).json("delete success")
    } catch (error) {
        res.status(400).json(error)
    }
})




// login 
route.post("/login", async (req, res) => {

    try {
        var check_email = await User.findOne({ email: req.body.email })
        if (!check_email) {
            res.status(400).json("pleace give a correct email address")
            return
        }

        var hash = await bcrypt.compare(req.body.password, check_email.password)

        if (!hash) {
            return res.status(400).json("password not valid")
        }

        var usertoken = await jwt.sign({ email: check_email }, "lord_voldemort" )
        

        res.header("auth", usertoken).send(usertoken)


    } catch (err) {
        res.status(404).json(err)
    }

})


// // valid user middlware 
// const validuser = (req, res, next) => {
//     var token = req.header("auth")
//     req.token = token;
//     next()

// }



// data get method
// route.get('/', validuser, async (req, res) => {
//     jwt.verify(res.token, "lord_voldemort", async (err, data) => {

//         if (err) {
//             res.status(402)
//         }
//         else {
//             let datas = await jwt.decode(req.token)
//             console.log(datas)

//             var datass = await User.find({})
//             res.json(datass)
//         }
//     })

// })

route.get('/',async(req,res) => {
    var datass = await User.find({})
            res.json(datass)
})


// module export 
module.exports = route


