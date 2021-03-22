import * as types from "../acitons/types";

const initialState={
    posts:[],
}

const postReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return{ // bu alan pure function olması gerekiyor yani state i doğrudan değiştiremeyiz , önce bir kopyasını döndürür sonra sadece değiştirmek istediğimiz alanı döndür
                ...state,//önce bir kopyasını döndürür
                posts:action.payload,//sonra sadece değiştirmek istediğimiz alanı döndür
            };
        default:// hiçbir action type ı ile uyumlu değilse default a girer 
            return{
                ...state, //hiçir değişiklik yapmadan state i aynı şekilde gönder
            };
    }
};
