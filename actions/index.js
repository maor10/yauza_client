import axios from 'axios';


export const createPayOffer = (price) => {

    axios.post('http://127.0.0.1:8000/api/pay_offers/',
        {
            price: price,
            user: "http://localhost:8000/api/users/1/"
        }
    ).then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.error(e);
    })
};


export const createHitOffer = (price) => {

    axios.post('http://127.0.0.1:8000/api/hit_offers/',
        {
            price: price,
            user: "http://localhost:8000/api/users/1/"
        }
    ).then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.error(e);
    })
};