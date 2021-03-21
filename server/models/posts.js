//model lar mongoDB veritabanında sql deki tablolara denk gelmektedir, burda bir post tablosu oluşturmaktayız
import mongoose from "mongoose";

const postSchema = mongoose.Schema({ //veri tabanındaki dökümanın ne yapıda olacağını neler içereceğini ve hangi tip de olacağını belirttğimiz kısım
    title:String,
    subtitle:String,
    content:String,
    tag:String,
    image:String,
    createdAt: {
        type:Date,
        default:new Date(),
    },
});

const Post =mongoose.model("Post",postSchema);//bir model yarattık modele Post ismini verdik ve postSchema yı buna parametre olarak gönderdik

export default Post;