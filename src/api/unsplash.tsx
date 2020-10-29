import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -PlM0W_SS05YgUuBpIh9lv_6F4vo9xBfolQUiIYKmNQ'
    }
});