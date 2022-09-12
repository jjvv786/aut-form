// const bodyParser=require('body-parser');
// const express = require('express')
// const mongoose = require('mongoose')

import mongoose from 'mongoose'
import  Express  from 'express' 
import bodyParser from 'body-parser'
import User from './mong/user.js'
import Message from './mong/message.js'






const PORT=process.env.PORT
const MONGO_CONN_STR = process.env.MONGO_CONN_STR

const server = Express()
server.use(bodyParser.json())




server.get('/',(req,res)=>{
  res.json({'mess':'done'})
})

server.get('/get_message',async(req,res)=>{
  res.json(await Message.getMessage(req.body.auth))
})

server.post('/send_message',async(req,res)=>{
  console.log('got')
  await Message.sendMessage(req.body.formLink,req.body.message)
  res.json({'status':'ok'})
})

server.post('/login',async(req,res)=>{
  res.json(await User.get_auth_email(req.body.email,req.body.password))
})

server.post('/signup',async(req,res)=>{
  res.json(await User.createUser(req.body.email,req.body.name,req.body.password))
})






mongoose.connect(MONGO_CONN_STR).then(
  server.listen(PORT,()=>{
    main()
  })
)

const main = async()=>{
  // await User.createUser('ramesh@gmail.com','ramesh','rameshKiJai@399').then(console.log('hota'))
  // s
  // await Message.sendMessage('ramesh@gmail.com16ac40f6f326d94dccd74c56d4b1fa9deeea0ab4dccc4930cab138e2ab632907','demo message')
  // console.log(await Message.getMessage('ramesh@gmail.com16ac40f6f326d94dccd74c56d4b1fa9deeea0ab4dccc4930cab138e2ab632907'))

}

