const express = require('express')
const app = express()
const cors = require('cors')
const postModel = require('./models/post.model')
const multer = require('multer')
const uploadFile = require('./service/post.storage')

app.use(cors())
const upload = multer({storage:multer.memoryStorage()})


app.post('/post',upload.single('image') ,async (req,res)=>{

 const result = await uploadFile(req.file.buffer)

 await postModel.create({
    image:result.url,
    caption:req.body.caption
 })

 res.status(200).json({
    message:'posted successfully'
 })
    
})


app.get('/feed', async (req, res) => {
  try {

    const posts = await postModel.find()

    res.status(200).json({
      post: posts
    })

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Server Error"
    })
  }
})



module.exports= app