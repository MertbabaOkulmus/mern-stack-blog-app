//uygulamadık route ların tanımlandığı kısım , bu kısımda yönlendirmeler yapılır, gelen isteklere göre controller da ki ilgili kısımlara yönlendirmeler yapılır 
//amaç herşeyi aynı alanda yapmayıp karmaşıklığı önlemek 

import express from "express";
import {getPosts, createPost, getSinglePost, deletePost} from "../controllers/posts.js";

const router=express.Router();

// http://localhost:5000/posts/ 
// bu url e gelen bütün istekler burda yapılıyor
//GET POST DELETE UPDATE PATCH bu metodlar ı burada tanımlayacağım

router.get("/",getPosts) //  5000/posts/  olduğunda getPosts devreye giriyor yani  /controllers/posts dosyası devreye giriyor
//yeni bir işlem oluşturulduğunda post request i gönderilir

router.get("/:id",getSinglePost)

router.post("/",createPost)//url e yeni bir post requesti geldiği zaman createPost isimli controller ne yapılması gerektiğine karar versin

router.delete("/:id",deletePost)


export default router;