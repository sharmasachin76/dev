console.log("Hi");
let num1 = 5;
let sum = num1;

const arr = [20, 30,45, 55,67, 71];

const sac = "new const";
let ijk = "bad variables";

let upper = sac.toUpperCase();

const square = function (x){
    return x*x ;
}

const kill = function(){
    console.log("kill...");
}

function calltwice(kill){
kill();
kill();

}

function multiplyBy(num){

    return function (x){
        return x* num;

    }

}
arr.forEach(function(a){
   a + 2;

})

//arr.forEach(function(num,index){

//console.log( num, index);

//})

const arr5 = [20, 30,45, 55,67, 71];

const arr4 = arr5.map(x=> x+5);



const arr2 = arr.map(function(num){

    return num*2;
})

const arrobj = arr.map (function(n){

return {
    val: n,
    isEven : n%2===0

    }

})

const arrobj2 = arr.map ((n)=> {

    return {
        val: n,
        isOdd : n%2!==0
    
        }
    
    })

  /* arr.forEach((num,index)=>{

        console.log( num, index);
        
        })
    */
