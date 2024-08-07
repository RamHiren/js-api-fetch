let url = "http://universities.hipolabs.com/search?name="

// let country = "nepal";

let btn = document.querySelector('button');

btn.addEventListener('click', async()=>{
    let country = document.querySelector('input').value;
    console.log(country);
    let colArr = await getColleges(country);
    console.log(colArr);
    show(colArr)
});

function show (colleges){
    let list=document.querySelector('#list')
    list.innerHTML = ''; 
    for(col of colleges){
       
        console.log(col.name);
        let item = document.createElement('li');
        item.innerText = col.name;
        item.style.marginLeft="40vw"
        list.appendChild(item)
    }
}

async function getColleges(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(err){
        console.log('Error',err);
        return [];
    }
}

