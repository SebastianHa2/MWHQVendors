let data = [
];

let vid = 0
const searchName = async () =>{
    const dataBase = await $getGrid('groups')
    data = dataBase.map(item =>{
      
     
      return    item.name
       
    })
    $setUser('nameForSearch', data)
            

}

searchName()