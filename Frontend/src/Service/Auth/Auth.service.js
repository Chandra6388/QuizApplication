import axios from "axios"; 
import * as Config from "../../Utils/Config";


// LOGIN-USER
export async function Login(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}login`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

 