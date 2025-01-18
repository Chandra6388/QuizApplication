import axios from "axios"; 
// import * as Config from "../../Utils/Config";


// LOGIN-USER
export async function SIGN_IN_USER(data, token) {
    try {
        const res = await axios.post(`/login`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

 