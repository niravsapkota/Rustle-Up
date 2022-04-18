import multer from "multer";
 
//set Storage to store your images

var storage = multer.diskStorage(
{
    destination:(req,file,cb)=>{
    
        cb(null,'uploads')
    
    },
    filename:(req,file,cb)=>{

        console.log(filename);
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'))
        cb(null,file.fieldname+'-'+Date.now()+ext);
    
    }
}

)

const store = multer({storage:storage})

export default store;

