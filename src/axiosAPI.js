import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'http://api.tvmaze.com/search/shows?q=csi'
});

export default axiosAPI;