const URL = "https://jsonplaceholder.typicode.com";

export const getLandlordDetail = async () => {
    try {
        const response = await fetch(`${URL}/posts`, {
            method: 'GET'
        })
        if (response.status === 200) {
            const result = await response.json();
            return result;
        }
        return []
    } catch (err) {
        console.log(err)
    }
}

export const postLandlord = async (userId, title, body) => {
    console.log("api")
    const data = {
        userId,
        title,
        body
    }
    try {
        const response = fetch(`${URL}/posts`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
              },
            body: JSON.stringify(data)
        })
        if(response.status === 200){
            let result = response.json();
            return result;
        }
    } catch (error) {
        console.log(error)
    }
}