const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const validate=document.getElementById("validate");
const output1=document.getElementById("output1");
const output2=document.getElementById("output2");
let fn,ln;

class Person{
    constructor(firstname="",lastname=""){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    set firstname(newfirstname){
        if(newfirstname.match(/^[a-zA-Z]+$/)){
            this._firstname=newfirstname;
            output1.textContent="Valid first name";
        }else{
            output1.textContent="Invalid Valid first name";
            console.error("Invalid Valid first name");
        }
    }
    set lastname(newlastname){
        if(newlastname.match(/^[a-zA-Z]+$/)){
            this._lastname=newlastname;
            output2.textContent="Valid last name";
        }else{
            output2.textContent="Invalid Valid last name";
            console.error("Invalid Valid last name");
        }
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
}

const p=new Person();

validate.onclick=function(){
    fn=fname.value;
    ln=lname.value;

    p.firstname=fn;
    p.lastname=ln;

    /* if(p.firstname && p.lastname){
    output1.textContent=`valid first name`;
    output2.textContent=`valid last name`;
    } */
}
console.log(p.firstname,p.lastname);

