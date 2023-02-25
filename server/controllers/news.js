const express= require("express");
const router = express.Router();
const News = require("../models/news")

router.get('/:id', async (req,res)=>{
    const resDatas = await News.find({});
    res.send(resDatas[req.params.id])
})
router.get('/',async (req,res)=>{
    const resDatas = await News.find({});
    let dataSends=[];
    var one_day = 1000 * 60 * 60 * 24;
    var present_date = new Date();
    
    //let datatime=new Date(datamatchs.LocalDate);
        //let datemonth=datatime.getDate()+"/"+(datatime.getMonth()+1);
    for(let i =0;i<resDatas.length;i++){
        let resData=resDatas[i];
        let items=resData.items;
        let dataSend=[];
         for(let k=0;k<items.length;k++){
            let item=items[k];
        
        
        let datatime=new Date(item.publishDate);
        let newData={
            title:item.title,
            PageUrl:item.PageUrl,
            imageUrl:item.imageUrl,
            semanticTags:item.semanticTags,
            dateDis:(Math.round(present_date.getTime()-datatime.getTime()) / (one_day)).toFixed(0)
        }
        dataSend.push(newData)
    }
    let finalData={
        title:resData.title,
        items:dataSend,
        seeAllLink:resData.seeAllLink
    }
    dataSends.push(finalData);
    }
    
    
    


    res.send(dataSends);
})
module.exports = router;