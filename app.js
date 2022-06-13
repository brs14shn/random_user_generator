const button=document.querySelector("#btn");


const  innerContainer=document.querySelector(".inner-container");

button.addEventListener("click",()=>{
const getPersondata=async()=>{

    try{
        const url=`https://randomuser.me/api`
        let res=await fetch(url)
        let data=await res.json()
        console.log(data);
        createPerson(data);

    }catch(error){
        alert(error)

    }
}
getPersondata();
})