
//-----------make add function-------------
const add=(array,newEl)=>{
    return [...array,newEl]
}

//----------- removeEl function ------
const deleteById=(array,id)=>{
    return array.filter(el=>el.id!=id) 
}

// --------- updateEl function ------

const updateEl=(array,id,newValue)=>{
    return array.map(el=> el.id==id? el=newValue : el );
}

// -------------update with specific ket and value -------

const updateElKey=(array,id,key,value)=>{
    return array.map(obj=>{
        let newObj={...obj}
        if(obj.id==id){
            newObj[key]=value
            return newObj
        }
        return newObj
        })
} 


// ------------filter byProp ------------

const filterByProp = (array,prop,value)=>{
    return array.filter(el=>el[prop].includes(value))
}



module.exports={add , deleteById , updateEl,updateElKey,filterByProp}