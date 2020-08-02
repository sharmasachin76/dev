const tech = [
{
    type:"front",
    name:"React"

},

{
    type:"server",
    name:"Java"

},

{
    type:"backend",
    name:"Oracle"

}

];


const form = document.querySelector('#techSearch'); 
const p = document.createElement('p')
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
let btclick=true;
const a=5;


form.addEventListener('submit',function(e){
e.preventDefault();
console.log(this.technology.value);
p.innerHTML= this.technology.value;
document.body.appendChild(p);

});


p.addEventListener('click', function(e){

    if (btclick) {
        btclick = false;
        p.classList.toggle('over');
        console.log("mouse click");
        p1.classList.add('child1');
        p2.classList.add('child2');
        p3.classList.add('chiled1');
        p1.innerHTML="Oracle";
        p2.innerHTML="My SQL";
        p3.innerHTML="DB2";
        document.body.appendChild(p1);
        document.body.appendChild(p2);
        document.body.appendChild(p3);
    }
    else{
        btclick = true;
        document.body.removeChild(p1);
        document.body.removeChild(p2);
        document.body.removeChild(p3);

    }

})
p.addEventListener('mouseover', function(e){

    p.classList.toggle('over');
   // console.log("mouse over");

})

p.addEventListener('mouseleave', function(e){

    p.classList.toggle('leave');
   // console.log("mouse leave");

})
