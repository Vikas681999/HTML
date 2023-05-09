//Function
class app {
    test()
    {
        console.log("Test Function")

    }
}
let a1 = new app();
a1.test()

//Array
let data = ['Neel', 'Rahul', 'Vikas']

    //Adding new value In Array
    data.push ("Mr_Neel")
console.log(data)


//Objest
//Define data type with interface
    interface userType
    {
        name: string,
        age : number,
        address: string
    }
    /*
    -->  [Any] is used for any datatype in object
    Ex = let user:any ={
    */

let user:userType ={
    name:'VIKAS',
    age : 21,
    address: 'USA'
}
console.log(user)


//Union Types
let data1:string|number|boolean = "Vikas"

    data1=30;
    //data1 = true
    console.log(data1)

 //Interface 
 
 interface userType1
    {
        fname: string,
        Age: number
        Myfunction:() => string
    }
    let user1: userType1 =   
     {
        fname:"Vikas",
        Age: 21,  
        Myfunction:() => {
            return "Neel"
           }
      
    }
    console.log(user1.Myfunction());

// Normal Function

function cal()
    {
       return 10+10 
    }
    console.log(cal())

//Classed 

class App1{
    name="Vikas Sen"
    getName1()
    {
        console.log(this.name);
    }
}
let a2= new App1();
a2.getName1()
