import mongoose from "mongoose";
import User from "./user.js";

const messageSchema = mongoose.Schema({
  FormLink:{
    type:String,
    required:true
  },
  Message:{
    type:String,
    required:true
  }
})

const MessageSchema = mongoose.model('autoFormMessage',messageSchema)

const Message={
  sendMessage:async(formLink,message)=>{
    MessageSchema.create({
      
      FormLink:formLink,
      Message:message
    })
  },
  getMessage:async(auth)=>{
    const data=await User.get_auth(auth)
    console.log(data)
    if(data!=null){
      return MessageSchema.find({
        Email:data.Email,
      })
    }
  }
}

export default Message