//uygulamadık route ların tanımlandığı kısım , bu kısımda yönlendirmeler yapılır, gelene isteklere göre controller da ki ilgili kısımlara yönlendirmeler yapılır 
//amaç herşeyi aynı alanda yapmayıp karmaşıklığı önlemek 

import express from "express";
import {getPosts} from "../controllers/posts.js";

const router=express.Router();

// http://localhost:5000/posts/ 
// bu url e gelen bütün istekler burda yapılıyor
//GET POST DELETE UPDATE PATCH bu metodlar ı burada tanımlayacağım

router.get("/",getPosts) //  5000/posts/  olduğunda getPosts devreye giriyor yani  /controllers/posts dosyası devreye giriyor

export default router;