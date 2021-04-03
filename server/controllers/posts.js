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

export const getSinglePost = async (req, res) => {
    try {
        const { id: _id } = req.params; // "/:id" dan gelene id, id:_id bu yapı id yi yeniden adlandırmaya yarıyor id yi _id diye kullanabiliriz artık
        const post = await Post.findById(_id);//girilen id ile eşleşen veriyi döndürür
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
}

export const createPost = async (req, res) => { //req(request): talep, res(response): yanıt
    const post = req.body;//formdan gönderilen post içieriğini req.body den aldık
    const newPost = new Post(req.body)//gelen yeni post u models/posts da ki post a gönderdik ve yeni bir post oluşturduk
    try {
        await newPost.save();//newPostu veri tabanına kaydettik save fonksiyonu ile , asenkron bir işlem olduğu için await ekledik
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const deletedPost = await Post.findByIdAndRemove(_id);
        res.status(200).json(deletedPost);
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });//id ye göre update edeceği için bir adet id istiyor, uptadet edilmiş yeni post u istiyor ve {new:true} update edilen postu bana geri döndür demek
        res.json(updatedPost);
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
};