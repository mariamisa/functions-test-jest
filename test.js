const {add,deleteById,updateEl,filterByProp,updateElKey} =require('./index');

const users= [
    {id:"1" , name:"ali"},
    {id:"2" , name:"ahmed"}
];

test('make add function take array and el and add el to array', () => {
    const expected= add(users, {id:"3" , name:"moh"})
    const actual= [
        {id:"1" , name:"ali"},
        {id:"2" , name:"ahmed"},
        {id:"3" , name:"moh"}
    ]
    expect(expected).toEqual(actual);
  });


  test('make delete function take array and id and return array without deleted el', () => {
    const expected= deleteById(users, 1)
    const actual= [
        {id:"2" , name:"ahmed"}
    ]
    expect(expected).toEqual(actual);
  });

  test('make update function take array and id and new value return array with updated value', () => {
    const expected= updateEl(users, 1 , {id:"1" ,name:"sami"})
    const actual= [
        {id:"1" , name:"sami"},
        {id:"2" , name:"ahmed"}
    ]
    expect(expected).toEqual(actual);
  });

  test('make update function with specific key and value', () => {
    const expected= updateElKey(users, 1 ,"name","sami")
    const actual= [
        {id:"1" , name:"sami"},
        {id:"2" , name:"ahmed"}
    ]
    expect(expected).toEqual(actual);
  });

  test ('make filter by proparity and value on array',()=>{
      const expected = filterByProp(users,'name','i');
      const actual = [{id:"1" , name:"ali"}]
      expect(expected).toEqual(actual)
  })