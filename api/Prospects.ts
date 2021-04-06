import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users';

export const getProspects = async () => {
    const data = await axios.get(url);

    return data.data;
}
