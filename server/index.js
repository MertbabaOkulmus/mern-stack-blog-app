import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

/*npm i -g nodemon server da yapılan her değişiklik için tekrar tekrar servır ı durdurup başlatmakap için bu paketi yüklememiz gerekli*/

const app=express();//express sayesinde bir express server oluşturduk
dotenv.config();//env dosyasının içeriğini process.env nin içine yükler ve process.env. yi kullanmamızı sağlar

app.use(bodyParser.json({limit:"30mb",extended:true}));//json formatında gelen veriyi kabul et , dosya boyuntuna 30mb lik limit verdik ,extended ise bazı error lar oluyor onlar consol da gözükmesin diye
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());//uzaktaki bir sunucuya göndereceğimiz http request lerimizde sorun yaşamamak için cors() paketini aktif hale getirdik
app.get("/",(req,res)=>{//ilk / a geldiği zaman bir request ve respons alıyoruz 
   // res.send("MERN Blok Post Server a Hoş Geldiniz ;)");//buraya yapılan http isteğine res.send ile bir cevap veriyoruz
 
   res.json({//res.send yerine res.json ile json formatında yaptık aynı işlemi
       author:"MERN Blok Post Server a Hoş Geldiniz",
       message:"21/03/2021",
   })
     
})


// backend in çalışacağı port u oluturuyoruz
const PORT =process.env.PORT || 5000; // port olarak ya process.env.PORT kullan eğer tanımlı değilse 500 i kullan 


//mongoose kullanarak mongoDB ye yani ordaki Clusters a bağlanma işlemini gerçekleştireceğiz
mongoose
.connect(process.env.CONNECTION_URL,{
    //herhangi hata uyarı vermesin diye true true  verdik bunları kaldırınca sadece ekran(console)da uyarı mesajları çıkıyor
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{//başarılı bir bağlantı oldu ise then kısmı 
    app.listen(PORT,()=>{//app.linsten ile uygulamanın hangi port da çalışacağına karar verdik, ikinci parametresinde ise bir calback funtion döner 
            console.log(`Uygulama ${PORT} numarali port da çalışmaktadır`)
    });
})
.catch((err)=>{//başarısız bağlantı oldu ise catch kısmı döner 
 console.error(err.message);
})