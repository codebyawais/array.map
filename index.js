// let nIs =10;
//  nIs=nIs -1;
//  console.log(nIs);
// output is 9


// let nIs =10;
//  nIs=--nIs;
//  console.log(nIs);
// 9





//  let nIs =10;
//  nIs-- ;
//  console.log(nIs);
 // 9 



//  let nIs =10;
//  nIs++ ;
//  console.log(nIs);
 // 11
 
 


//  let nIs =10;
//  --nIs ;
//  console.log(nIs);
 // 9 



//   let nIs =90;
//  nIs++ ;
//  x=nIs
//  console.log(x);
 // 90  ???



//   let nIs =10;
//  nIs= nIs +3 ;
//  console.log(nIs);
 // 13 

 
//  let nIs =10;
//  nIs= nIs -3 ;
//  console.log(nIs);
 // 7 



//  let nIs =10;
//  nIs += 2 ;
//  console.log(nIs);
 // 12

//  let nIs =10;
//  nIs -= 2 ;
//  console.log(nIs);
//  8


//  let nIs =10;
//  nIs *= 2 ;
//  console.log(nIs);
//  20



//  let nIs =10;
//  nIs *= 2 ;
//  console.log(++nIs);
//  21

//  let nIs =10;
//  nIs *= 2 ;
//  console.log(nIs--);

//  console.log(nIs);
 
//  10  ???



// let n1 = 5;
// let n2 =5;
// console.log(n1  === true);


// let myObj  = {
//     name:'awais',
//     age:'22',
//     deg:'bscs',
//     city:'fsd',
//     rollno:'01',
//     semester:'7th'
// }
// // console.log( myObj);
// console.log( myObj.name, " has ",myObj.age, "years old " );
// console.log( "I am a student of ",myObj.deg, "having " ,myObj.semester, "semester under the roll number of ",myObj.rollno, );



//objects can be declare TWO METHODS ONE IS LITERAL AND OTHER IS CONSTRUCTOR
//sINGLETON : WHEN MAKE A CONSTUCTOR IT MEANS IT is a single type object Only single instance 
// eg: Object.create
// objects has two things one is keys and 2nd is values
// key: name age etc all are bydefault strings

//object literals
// const mySym = Symbol("key1")
const jsUser = {
    name:"awais",
    "fullname":"awais rafiq",
    // [mySym] : "mykey1",
//    "mySym" : "key1", 
    age:20,
    email: "codebyawais@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["monday", "saturady"]  

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(typeof jsUser.mySym);
// console.log( jsUser[mySym]);

// jsUser.email ="gpt.com"
// Object.freeze(jsUser)
// jsUser.email="aaaaaa.com"/
// console.log(jsUser);


// jsUser.greeting = function(){
//     console.log("hello jsuser"); 
// }
// jsUser.greetingtwo = function(){
//     console.log(`hello jsuser ${this.name}` ); 
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());



// objects singleton/constructor 
// const tinderUser = new Object ()
//non signletonobject
const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name ="faizan"
tinderUser.isLoggedIn=false

// both are internal same
// console.log(tinderUser);

const regularUser ={
    email:"awais@gmail.com",
    fullname:{
        userfullname:{
        firstname:"awais",
        lastname:"bhatti",
        }
    }
     
    
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);



const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj4 ={5:"a", 6:"b"}
const obj5 ={7:"a", 8:"b"}
//const obj3 ={ obj1,obj2}
//problem like a array all value etc can execute eg:aray me array and object me object
// {} target value , obj1 obj2 source values
// const obj3 =Object.assign({},obj1,obj2,obj5)
// spread the object
const obj3 = {...obj1, ...obj4}
// console.log(obj3);

const user =[
{
    id:1,
    email:"gpt@mial.com"
},
{
    id:1,
    email:"gpt@mial.com"
},
{
    id:1,
    email:"gpt@mial.com"
},
{
    id:1,
    email:"gpt@mial.com"
},
]
// user[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// console.log(tinderUser);


//Object
// const awais ={
    //age:23,
    //isLoggedIn:true,

//}
// console.log(awais);
//complete object execute
// console.log("awais");
// only awais can be execute bcz awais in a string


// Array
const myarray=["this", "is", "an", "array"]
// console.log(myarray);
// to comoplete array can be execute
//console.log(myarray[2],[9]);
//why can as it is execute 9
//console.log(myarray[9]);
//it can be undefined


// array of objects
let sections = [ {name:"awais"},{age:23},{height:"sevenn",class :"bscs"} ]
// console.log(sections[0]);
// console.log(sections[2].class);






// objects of array
let semesters = { bscs : [{ name : "aws" , class : 12} , { name : 'dilawar' ,
 class: { bscs : [{ name : "aws" , class : 12} , { name : 'dilawar' , class: 13}] ,
 bba :  [ "c1" , "c2" , "c3" , "c7" , "c890" ]}}] , bba :  [ "c1" , "c2" , "c3" , "c7" , "c890" ]}
// bba c2 can be get
//  console.log(semesters.bba[1]);


let degre ={bscs:[{name:"awais",class:"bscs"},{name:"daniyal", class: [{name:"ahsan",class:"bscs"}] }   ]}
// console.log(degre.bscs);
// console.log(degre.bscs[0].name);
//console.log(degre.bscs[1] .class);



// function method1 
function add (number){
    // console.log(  5*2-9*false);
}
// add(5+6)
// method2
// const newadd=(n1,n2,n3)=>{
// console.log(n1 + n2 +n3);
// }
// let x=5,y=5
// newadd(6,8,y)




// 22-9-23
let myArray = [
       {name:'awais',class:"bscs"} ,
      {name:'ahmad',class:"bba"} ,
      {name:'ahad',class:"base"}
    ]
    let requiredStudent;
    console.log("before: ", requiredStudent);
    

    // myArray.map((item)=>{console.log(item.name );
    myArray.map((item)=>{ 

        if(item.name === "ahmad") {requiredStudent = item.name }
    }) 
    console.log("after: ", requiredStudent);
  

    














