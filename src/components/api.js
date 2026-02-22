import axios from 'axios';


export default async function fetchImages(word) {
    try {
        const response = await axios.get(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(word)}`);

        return response.data?.thumbnail?.source ?? null;

    } catch (error) {
        console.log("error:", error)
    }

}




