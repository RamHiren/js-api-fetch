let url = "https://catfact.ninja/fact"
let btn = document.querySelector('button');
let result = document.querySelector('#result')
let btn2 = document.querySelector('.btn2');
let img = document.querySelector('#result2')


btn.addEventListener('click',async ()=>{
    let fact =await getFacts();
    console.log(fact);
    result.innerText = fact
})
/* 
method 1
fetch(url)
.then((res)=>{
    // console.log(res);
    return res.json()
    })
.then((data)=>{
        console.log("data 1 =",data.fact);
        return fetch(url);
})
.then((res)=>{
    return res.json(); 
})
.then((data2)=>{
    console.log("data2 =",data2.fact);
})
.catch((err)=>{
    console.log('Error:', err);
}) */


/* method 2
async function getFacts(){
    try{
    let res = await fetch(url);
    let data = await res.json();
    console.log("data 1 =",data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log('data 2',data2.fact); 
    }catch(err){
        console.log('Error:', err);
    }
} */

//method 3
async function getFacts(params) {
    try{
    let res = await axios.get(url);
    return res.data.fact;    
    }catch(e){
        console.log('Error:', e);
        return "fact not fount"
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener('click', async ()=>{
    let link = await getImg();
    
    img.setAttribute("src",link);

})

async function getImg(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(e){
        console.log('Error:', e);
        return "/"
    }
}

