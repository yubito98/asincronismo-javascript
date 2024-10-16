

function fetchData(data){
    return new Promise((resolve, reject) =>{
        if(data){
            resolve(`Your information: ${data}`)
        }else{
            reject("Error feching data")
        }
    })
}

async function test(data) {
    
    let response = await fetchData(data)
    console.log(response)
    console.log("This is the function")
}


test("yubito Molina")

console.log("Message outside and after the function");
