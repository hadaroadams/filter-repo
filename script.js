let products = document.querySelector(".products")
let list = document.querySelectorAll("ul li")
let input = document.querySelector('input')
let text = document.querySelector('h6')

let database =[
    {
        id:1,
        category:"ikea",
        title:"High-Back Bench",
        price:"9.99",
    },
    {
        id:2,
        category:"marcos",
        title:"Albany Table",
        price:"77.99"
    },
    {
        id:3,
        category:"carsessa",
        title:"Accent Chair",
        price:"25.99"
    },
    {
        id:4,
        category:"carsessa",
        title:"Wooden Table",
        price:"45.99"
    },
    {
        id:5,
        category:"carsessa",
        title:"Dining Table",
        price:"6.99"
    },
    {
        id:6,
        category:"liddy",
        title:"Sofa Set",
        price:"69.99"
    },
    {
        id:7,
        category:"marcos",
        title:"Modern Bookshelf",
        price:"8.99"
    },
    {
        id:8,
        category:"liddy",
        title:"Emperor Bed",
        price:"21.99"
    },
    {
        id:9,
        category:"marcos",
        title:"Utopia Sofa",
        price:"39.95"
    },
    {
        id:10,
        category:"liddy",
        title:"Entertainment Center",
        price:"29.98"
    },
    {
        id:11,
        category:"ikea",
        title:"Albany Sectional",
        price:"10.99"
    },
    {
        id:12,
        category:"liddy",
        title:"Leather Sofa",
        price:"9.99"
    },
]

window.addEventListener('load',display)
input.addEventListener('input',search)

list.forEach((item)=>{
    item.onclick=()=>{
        switch(item.id){
            case 'all':
                products.innerHTML = ""
                input.value=''
                display(); 
                break; 
            case 'ikea':
                products.innerHTML=""
                input.value=''
                filt('ikea'); 
                break; 
            case 'marcos':
                products.innerHTML=""
                input.value=''
                filt('marcos'); 
                break;
            case 'carsessa':
                products.innerHTML=""
                input.value=''
                filt('carsessa'); 
                break;
            case 'liddy':
                products.innerHTML=""
                input.value=''
                filt('liddy'); 
                break
                       
        }
    }
})

function contentMakeUp(image, title,price){
    let content =`<img src="./assert/product-${image}.jpeg" alt="">
                        <p>${title}</p>
                        <h3>$${price}</h3>`

    let article = document.createElement('article')
    article.innerHTML=content
    return article
}

function display(){
    database.map((item)=>{
        let inner = contentMakeUp(item.id,item.title,item.price)
        products.appendChild(inner)
    })
}

function filt(categ){
    database.filter((item)=>{
        if(item.category==categ){
            let inner =contentMakeUp(item.id,item.title,item.price)
            products.appendChild(inner)
        }
    })
}

function search(e){
    products.innerHTML=''
    console.log(database)
    database.filter((item)=>{ 
        if(item.title.toUpperCase().includes(e.target.value.toUpperCase())){
            let inner =contentMakeUp(item.id,item.title,item.price)
            products.appendChild(inner)
            console.log(item)
            
        }else{
            console.log("heyya")
        }
        
    })
    if(products.innerHTML==""){
        products.innerHTML="<h6>Sorry, no product matched your search</h6>"
    }
}