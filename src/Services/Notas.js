import {POST,GET,DELETE} from "../Services/Fetch"

export const PostNotas = async (data) => {
    try {
        let rsp = await POST("Crear", data)
        return rsp;
    }
    catch (error) {
        console.error("Error Api Crear:", error.message);
        return null;
    }
}

export const GetNotas = async (data) => {
    try {
        let rsp = await GET("Mostrar/", data.usuario_id)
        return rsp;
    }
    catch (error) {
        console.error("Error Api Mostrar:", error.message);
        return null;
    }
}

export const DeleteNotas = async (data) => {
    try {
        let rsp = await DELETE(`Notas/Eliminar/${data.id_nota}`, { usuario_id: data.usuario_id });
        return rsp;
    } catch (error) {
        console.error("Error Api Eliminar:", error.message);
        return null;
    }
}