import mongoose from "mongoose";
import hash from "../logic/hash_cy.js";


const userSchema = mongoose.Schema({
  Email:{
    type:String,
    required:true
  },
  Name:{
    type:String,
    required:true
  },
  PasswordHash:{
    type:String,
    required:true
  },
  FormLink:{
    type:String,
    required:true
  },
  Auth:{
    type:String,
    required:true
  }
})

const UserSchema =mongoose.model('autoFormUser',userSchema)


const User={
  createUser:async(email,name,password)=>{
    await UserSchema.create({
      Email:email,
      Name:name,
      PasswordHash:hash.sha256(password),
      FormLink:email,
      Auth:email+hash.sha256(password+'-'+hash.salt)
    })
  },
  get_auth_email:async(email,password)=>{
    return(await UserSchema.findOne({'Email':email,'PasswordHash':hash.sha256(password)}))
  },
  get_auth:async(auth)=>{
    return(await UserSchema.findOne({'Auth':auth}))
  }

}


export default User