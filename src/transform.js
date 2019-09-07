function groupAdultsByAgeRange(peopleList){

    //call back function to sort people into age categories
    const classify = (currentList, nextPerson) => {
 
        if(nextPerson.age>=51){

                currentList['51 and older'].push(nextPerson)
            
        }else if(nextPerson.age<=50&&nextPerson.age>40){

                currentList['41-50'].push(nextPerson)


        }else if(nextPerson.age<=40&&nextPerson.age>30){

                currentList['31-40'].push(nextPerson)

        }else if(nextPerson.age<=30 && nextPerson.age>20){

                currentList['21-30'].push(nextPerson)
        
        }else{

                currentList['20 and younger'].push(nextPerson)
        
        }
        
        return currentList

    }


    const over18 = peopleList.filter((peopleList)=> peopleList.age>=18).reduce(classify, {'20 and younger':[], '21-30':[], '31-40':[], '41-50':[], '51 and older':[]})
    
    //get rid of empty arrays

    for(let adult in over18){

        if(over18[adult].length===0){

            delete over18[adult];

        }

    }
    
    return over18

}


module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange