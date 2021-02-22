import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
const Data=({data})=>{
  return(
    <div>
   {data!==[]&& data.map(pic =>
    <img alt="dogs" key={uuidv4()}
    //src=`http://farm'+pic.farm+'.staticflickr.com/{server-id}/{id}_{secret}.jpg
    src={'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg'}></img>
   )}
    </div>
  );
}
export default Data;