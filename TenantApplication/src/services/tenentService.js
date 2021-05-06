const URL = "https://jsonplaceholder.typicode.com";

export const getTenantDetail = async () => {
    try {
        let response = await fetch(URL,{
            method: 'GET'
        })
        if(response.status === 200){
            const result = await response.json();
            console.log(result,"api result")
        }
    } catch (error) {
        console.log(error)
    }
}