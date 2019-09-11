const User = require('./../model/model.user')
module.exports = {
    signUp:async(req,res,next)=>{
        const {username,password} = req.value.body;
        const fountUser = await User.findOne({username});
        if(fountUser){

            return res.status(403).json({error:'username is already in use'})
        }
        const newUser = new User(({
            username ,
            password 
        }))
        await newUser.save()

    },
    create: async (req,res,next)=>{
        //    if(!req.body.username){
        //        res.status(200).json({
        //            success:false
        //        })
        //    }
        //   try{
        //       const user = new User({
        //           username:req.body.username,
        //           password:req.body.password
        //       })
        //       await user.save()
        //       return res.status(200).json({
        //           success:true,
        //           user
        //       })
        //   }catch(err){
        //      if(err.code === 11000){
        //          res.status(400).json({
        //              success:false,
        //              code:err.code,
        //              error:'dulicate key'
        //          })
        //      }
        //      return res.status(500).json({
        //          success:false,

        //      })
        //   }
        console.log("dodoo")
    },
    login:async (req,res,next)=>{

    }
}