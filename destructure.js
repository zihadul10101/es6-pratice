const person={ name:"mahie", age:15, gfName:"zihad",address:"shahumra",phone:01645554 }
//const bfName=person.bfName;
const {address,phone,gfName}=person;
const complexObject={
    name:'abc',
    info:{
        address:'kola bagan',
        leader:'tiger leader'
    }
}
const {leader}=complexObject.info;
//const gfName=person.gfName;
//const phone=person.phone;
//console.log(gfName,phone,address);
//console.log(gfName,phone,address);
const friends=['sakib khan','arman khan','amir khan','salman khan','sharukh khan'];
const [chotoFriend,...restFriend]=friends;
//console.log(chotoFriend,nextFriend);
//console.log(restFriend);