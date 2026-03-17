function getdata(dataId,getnextdata){
   setTimeout(()=>{
    console.log("data",dataId);
    getnextdata();
   },2000);
}

getdata(1,()=>{
    getdata(2);
});