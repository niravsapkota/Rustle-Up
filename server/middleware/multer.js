import multer from "multer";
 
//set Storage to store your images

var storage = multer.diskStorage(
{
<<<<<<< HEAD
    destination:function (req,file,cb) {
    
        cb(null,'./uploads/')
    
    },
    filename:function(req,file,cb){
        
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
=======
    destination:(req,file,cb)=>{
    
        cb(null,'uploads')
    
    },
    filename:(req,file,cb)=>{

        console.log(filename);
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'))
        cb(null,file.fieldname+'-'+Date.now()+ext);
>>>>>>> 80f70c13fe276c161d937c5bd927577bf1ff929b
    
    }
}

)

<<<<<<< HEAD
export default storage;
=======
const store = multer({storage:storage})

export default store;
>>>>>>> 80f70c13fe276c161d937c5bd927577bf1ff929b

