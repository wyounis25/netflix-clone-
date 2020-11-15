import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// if you have a default you can now call it whatever in another file 