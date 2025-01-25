import axios from "axios"; 
import * as Config from "../../Utils/Config";


// LOGIN-USER
export async function get_LastFive_Students_Resistered(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}lastfive-student`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

 

 
 