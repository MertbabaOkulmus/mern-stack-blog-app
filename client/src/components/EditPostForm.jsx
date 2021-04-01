import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import {
    TextField,
    Select,
    Input,
    MenuItem,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//38 de kaldım
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
}));

const tags = ["fun", "programing", "health", "science"];
const postSchema = yup.object().shape({//atılacak postların şeması
    title: yup.string().required(),
    subtitle: yup.string().required(),
    content: yup.string().min(20).required(),//post un asıl içeriğinin olduğu kısım, min 20 karakterden olsun
    tag: yup.mixed().oneOf(tags), //oneOf = şunlardan herhangi biri , tags dizisindeki tag lardan herhangi biri
});

const EditPostForm = ({ history,post,closeEditForm }) => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(post?.image);
    const { register, handleSubmit, control, errors, reset } = useForm({
        resolver: yupResolver(postSchema),//yup ile oluşturduğumuz için useForm un için resolver geçmemiz gerekiyor
    });

    const clearForm=()=>{
        reset();//reset ile formu komple sıfırlıyoruz
        setFile(null);//file ı react-hook un içerisinde değilde useState ile işlem yaptığımız için reset ile sıfırlanmıyor ayrı sıfırlamamız gerek
        handleClose();
    }

    const onSubmitt =(data)=>{
        
    }

    const classes = useStyles();
    return (
        
                <div >
                    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmitt)}>
                        <TextField // title-başlık kısmı 
                            id="title"
                            label="Başlık"
                            name="title"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors.title ? true : false} // bu alandaki errors ı hook form un içerisinden alıyoruz, postSchema nın içinde hangi alanda hata varsa bulabiliyoruz , ör: errors.tag dersek postSchema in içindeki tag alanında bir hata varsa uyarı verir
                            fullWidth
                        />

                        <TextField //subtitle-AltBaşlık alanı
                            id="subtitle"
                            label="Alt Başlık"
                            name="subtitle"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors.subtitle ? true : false}
                            fullWidth
                        />

                        <Controller // Tag ların listelendiği alan
                            as={
                                <Select
                                    input={<Input />}
                                    className={classes.textField}
                                    fullWidth
                                >
                                    {
                                        /*select in için tags alanını map ederek seçenekleri sağlayacağız*/
                                        tags.map((tag, index) => (
                                            <MenuItem key={index} value={tag}>
                                                {tag}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            }

                            name="tag"
                            control={control}// hook-form dan inport etmiştik
                            error={errors.tag ? true : false}// bir hata varsa true yoksa false döner
                            defaultValue={tags[0]} // defalut olarak tags arry inin ilk elamanını  döndürür 
                        />

                        <TextField // İçeriğin yazıldığı alan 
                            id="content"
                            label="İçerik"
                            name="content"
                            multiline
                            rows={4}//minumum 4 satır ile başlasın
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors.content ? true : false}
                            fullWidth
                        />

                        <FileBase64
                            multiple={false}
                            onDone={({ base64 }) => setFile(base64)}
                        />
                    </form>
                </div>
    )
}

export default EditPostForm
