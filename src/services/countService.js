const {QueryCount} = require("../models/queryCount");
const {ViewCount} = require("../models/viewCount");

const viewCountService = async (id)=>{
    let vc  = 1;
const val = await ViewCount.findAll({
    where: {
      movieId: id
    }
  });
  let task ;
  if(val.length==0){
    task =  ViewCount.build({movieId: id})
    await task.save();
  }else{
    vc = val[0].dataValues.count+1 
    await ViewCount.update({
          count: val[0].dataValues.count+1
        }, {
          where: {
            movieId: id
          }
        });
  }
  return vc;
}


const searchCountService = async (keyword)=>{
    let vc  = 1;
const val = await QueryCount.findAll({
    where: {
        queryKey: keyword
    }
  });
  let task ;
  if(val.length==0){
    task =  QueryCount.build({queryKey: keyword})
    await task.save();
  }else{
    vc = val[0].dataValues.count+1 
    await QueryCount.update({
          count: val[0].dataValues.count+1
        }, {
          where: {
            queryKey: keyword
          }
        });
  }
  return vc;
}



module.exports = {
    viewCountService,
    searchCountService
}
