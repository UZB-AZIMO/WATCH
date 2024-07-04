const title = document.querySelector(".title")

function clock(){ 
    let date = new Date()
    let month = date.getMonth()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let secunt = date.getSeconds()
    let result =[hour,minute,secunt,].map(i=>i.toString().padStart(2,"0")).join(":")
    console.log(result)
    title.textContent = result
}
clock()
setInterval(()=>{
    clock()
},1000)
