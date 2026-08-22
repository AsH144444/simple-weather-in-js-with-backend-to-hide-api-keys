    const input = document.getElementById("input")
    input.addEventListener("keydown" , (event)=>{
        if(event.key ==="Enter"){
            search()
        }
    })

function search(){

    const name =input.value
    console.log(name)
}