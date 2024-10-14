import {POST} from "./Fetch";

export const PostLogin = async (data) => {
    try {
        let rsp = await POST("login", data);
        return rsp;
    }
    catch (error) {
        console.error("Error en Api Login", error.message);
        return null;
    }
}

