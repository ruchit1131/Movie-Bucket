import axios from 'axios';
const KEY = 'AIzaSyB0g1FKb5pLOvChNR465pClWdmvS2GkeRc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
})