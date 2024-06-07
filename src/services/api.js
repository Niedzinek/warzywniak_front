export const fetchData = async(url, options = {}) =>{
    try{
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error("Network response wasn't ok " + response.statusText);
        }
        const data = await response.json();
        console.log(data);
        return data;
    }catch (error) {
        console.error('There has been a problem with fetch operation ', error);
        throw error;
    }
}