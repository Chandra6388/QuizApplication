import axios from "axios"; 
import * as Config from "../../Utils/Config";


// LOGIN-USER
export async function All_Question(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}getAllQuestions`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

export async function Add_Question(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}addQuestion`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

export async function delete_Question(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}deleteQuestionByID`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

 