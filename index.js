
//-----------make add function-------------
const add=(array,newEl)=>{
    return [...array,newEl]
}

//----------- removeEl function ------
const deleteById=(array,id)=>{
    return array.filter(el=>el.id!=id)   //return all el without the id arg
}

// --------- updateEl function ------

const updateEl=(array,id,newValue)=>{
    return array.map(el=> el.id==id? el=newValue : el );
}

// -------------update with specific ket and value -------

const updateElKey=(array,id,key,value)=>{
    const newArry=JSON.parse(JSON.stringify(array))
    return newArry.map(el=>{
        if(el.id==id){
          el[key]=value
          return el
        }
        return el
        })
    
        //solution with reduce

    // return newArry.reduce((acc,obj)=>{
    //     if(obj.id==id){
    //         obj[key]=value;
    //         acc.push(obj)
    //     }else{
    //         acc.push(obj)
    //     }
    //     return acc
    // },[]);
} 


// ------------filter byProp ------------

const filterByProp = (array,prop,value)=>{
    return array.filter(el=>el[prop].includes(value))
}



module.exports={add , deleteById , updateEl,updateElKey,filterByProp}