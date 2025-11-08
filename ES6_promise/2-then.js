export default function handleResponseFromAPI(promise){
    return promise.then((data) =>{
        console.log('Got a response from the API')
        return {
            "status":200,
            "body":'success'
        }
    }).catch((data) =>{
        console.log('Got a response from the API')
        return new Error()
    })
    
}
