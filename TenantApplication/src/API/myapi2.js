const URL = "https://jsonplaceholder.typicode.com";

export const getLandlordDetail = async () => {
    console.log("api hitted")
    try {
        const response = await fetch(`${URL}/posts`, {
            method: 'GET'
        })
        if (response.status === 200) {
            const result = await response.json();
            console.log(result, "api result")
            return result;
        }
        return []
    } catch (err) {
        console.log(err)
    }
}