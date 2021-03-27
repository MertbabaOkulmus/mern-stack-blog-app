import Post from "../models/posts.js";

export const getPosts = async (req, res) => { //getPosts bana veritabanındaki bütün postları döndüren bir fonksiyon 
    try {
        const posts = await Post.find(); //Post.find(); veri tabanında ne kadar post varsa onları bulur ve getirir ,asenkron bir işlem olduğu için başına await koyduk
        res.status(200).json(posts)// veritabanındaki bütün postları getirdikten sonra json formatı ile geri döndrürüyoruz   
        //geriye bir respons(res) döndürüyoruz işlem başarılı olduğu için status 200 döndürürüz ve json formatında burdan dönen postları gönderdiğimiz bir yapı göndeririz 
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

export const createPost = async (req, res) => { //req(request): talep, res(response): yanıt
        const post=req.body;//formdan gönderilen post içieriğini req.body den aldık
        const newPost = new Post(req.body)//gelen yeni post u models/posts da ki post a gönderdik ve yeni bir post oluşturduk
        try {
       await newPost.save();//newPostu veri tabanına kaydettik save fonksiyonu ile , asenkron bir işlem olduğu için await ekledik
    } catch (error) {
        res.status(409).json({
            message:error.message
        })
    }
}