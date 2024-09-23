import { POST } from "./Fetch";

export const PostApi = async (data) => {
    try {
        let rsp = await POST("login", data);
        return rsp;
    }
    catch (error) {
        console.error("Error en la Api:", error.message);
        return null;
    }
}

