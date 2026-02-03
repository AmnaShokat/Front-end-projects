const password=document.getElementById("password");
let lengt = prompt("How many digits do you want in your password?");

const length=lengt;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number= "0123456789";
const symbol="!@#$%&*()-_+[]{}|<>?~";

const allpwd=uppercase+lowercase+symbol+number;

function createpwd(){
    let pwd= "";
    pwd=pwd+uppercase[Math.floor(Math.random() * uppercase.length)];
    pwd=pwd+lowercase[Math.floor(Math.random() * lowercase.length)];
    pwd=pwd+number[Math.floor(Math.random() * number.length)];
    pwd=pwd+symbol[Math.floor(Math.random() * symbol.length)];

    while(length>pwd.length){
       pwd=pwd+allpwd[Math.floor(Math.random() * allpwd.length)];
    }
    password.value=pwd;
}
