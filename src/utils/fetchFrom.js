import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {

    url: BASE_URL,
    params: {

        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'fb1459ada6mshe205b1f3769f96ap1e517ajsn0dae85c5a395',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const fetchFromApi = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;

}