import { GET, POST } from "./Fetch";

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

export const PostNotas = async (data) => {
    try {
        let rsp = await POST("Crear",data)
        return rsp;
    }
    catch (error) {
        console.error("Error Api Crear:", error.message);
        return null;
    }
}

export const GetNotas = async (data) => {
    try {
        let rsp = await GET("Mostrar/",data.usuario_id)
        return rsp;
    }
    catch (error) {
        console.error("Error Api Mostrar:", error.message);
        return null;
    }
}

export const DeleteNotas = async (id_nota,usuario_id) => {
    try {
        let rsp = await DELETE(`Eliminar/${id_nota}`, { usuario_id });
        return rsp;
    }
    catch (error) {
        console.error("Error Api Eliminar:", error.message);
        return null;
    }
}

