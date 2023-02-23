const express= require("express");
const router = express.Router();
const News = require("../models/news")

router.get('/:id', async (req,res)=>{
    const resDatas = await News.find({});
    res.send(resDatas[req.params.id])
})
router.get('/',async (req,res)=>{
    const resDatas = await News.find({});
    res.send(resDatas);
})
module.exports = router;


/* 
dataSend=[]
    for(let i=0;i<resDatas.length;i++){
        resData=resDatas[i];
        let newData={
            title:resData.title,
            items:JSON.parse(resData.items),
            seeAllLink:resData.seeAllLink
        }
        dataSend.push(newData)
    } */

    /* const resDatas = await News.find({});
    let resData=resDatas[5];
    let items=resData.items;
    let dataSend=[];
    for(let i=0;i<items.length;i++){
        let item=items[i];
        let semanticTags=[];
        for(let j=0;j<item.semanticTags.length;j++){
            let seman=item.semanticTags[j];
            semanticTags.push(seman.title);
        }
        let newData={
            title:item.title,
            PageUrl:item.readMorePageUrl,
            imageUrl:item.image.src,
            semanticTags:semanticTags
        }
        dataSend.push(newData)
    }
    let finalData={
        title:resData.title,
        items:dataSend,
        seeAllLink:resData.seeAllLink
    }


    res.send(finalData); */