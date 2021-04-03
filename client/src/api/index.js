import axios from "axios";

const apiEndpoint = "http://localhost:5000/posts/"

// actions/post da ki fonskiyonlar için api leri oluşturalım
export const fetchPosts = async () => await axios.get(apiEndpoint); // posts endPointi ile router/posts alanı ilgileniyordu ve get talebi gönderildiği zaman orda getPost çağrılıyor, getPost da controllers/posts da ki getPost foksiyonunu tetikler o fonksiyonda veri tabanında ne kadar posts varsa onları json formatında döndürür 
// özet olarak fetchPosts ile dönen bütün postları alıyoruz

export const fetchSinglePost = async(id)=> await axios.get(apiEndpoint+id);

export const createPost = async (post) => await axios.post(apiEndpoint, post);//routes de post tetikleniyor, orası da /controllers/posts.js da ki createPost fonk tetikliyor oda model/posts un içindeki POST u tetiklerl ve yeni post veri tabanına kayıt olmuş olur
//özet olarak bir post kaydediyoruz ve kaydedilen post createPost a tekrardan döndürüyoruz


export const deletePost =async(id)=>await axios.delete(apiEndpoint+id);

export const updatePost =async(id,updatePost)=>await axios.patch(apiEndpoint+id);