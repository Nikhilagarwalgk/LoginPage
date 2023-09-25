import axios from 'axios';

// REACT_APP_FORMS = "https://lms-dev.synofin.tech/"

export const postSignUp = (data) => {
    // let data = {
    //     // "user_firstname": "mani",
    //     // "user_email": "mail@gmail.com",
    //     // "user_password": "12345",
    //     "user_phone": "123456789",
    //     "user_lastname": "Kumar",
    //     "user_city": "Jaipur",
    //     "user_zipcode": "500072",
    // }
    console.log(data)
    return axios({
        method: "POST",
        url: "https://snapkaro.com/eazyrooms_staging/api/user_registeration",
        data: data
    });
};

export const postLoginUp = (data) => {
   console.log(data)
    return axios({
        method: "POST",
        url: "https://snapkaro.com/eazyrooms_staging/api/userlogin",
        data: data
    });
};