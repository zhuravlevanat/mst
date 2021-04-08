import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getUsers = async () => {
    const data = await axios.get(url);

    return data.data;
}
