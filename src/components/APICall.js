import Axios from 'axios';

export const SearchTrip = (keyword, searchResultHandler) => {
    Axios.get(`http://localhost:5000/api/trips?keyword=${keyword}`)
    .then((res) => res.status===200? searchResultHandler(res.data) : console.log('somthings wrong!'))
    .catch((err) => console.log(err))
}

