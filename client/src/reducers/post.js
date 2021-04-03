import * as types from "../acitons/types";

const initialState = {
    posts: [],
    currentPost: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return { // bu alan pure function olması gerekiyor yani state i doğrudan değiştiremeyiz , önce bir kopyasını döndürür sonra sadece değiştirmek istediğimiz alanı döndür
                ...state,//önce bir kopyasını döndürür
                posts: action.payload,//sonra sadece değiştirmek istediğimiz alanı döndür
            };

        case types.FETCH_SINGLE_POST:
            return {
                ...state,
                currentPost: action.payload,
            };
        case types.CREATE_POST:
            return {
                ...state,//state i değiştirmeden bir kopyasını döndür
                posts: [...state.posts, action.payload],//post kısmında ...state.posts u değiştirmeden kopyala ve action.payload da ki yeni postu da üzerine ekle
            };
        case types.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action._id), // action dan gelen id ile (silinen post un id'si) state deki post un id si eşit olan postu filitrele çıkar onu posts ların içinden
                currentPost: null,
            };
        case types.UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post._id === action.payload._id) {//güncellenmiş postu bulmak için id leri eşitliyoruz
                        return action.payload;//veritabanında ki güncellenmiş postun son halini döndür  
                    }
                    else {
                        return post;//güncellenmemiş postlara müdahale etmeden aynen döndür
                    }
                }),
                currentPost: action.payload,
            };
        default:// hiçbir action type ı ile uyumlu değilse default a girer 
            return {
                ...state, //hiçir değişiklik yapmadan state i aynı şekilde gönder
            };
    }
};
export default postReducer;