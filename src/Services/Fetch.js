import { backendurl } from "../env.jsx";

export async function POST(url, data) {
    try {
        const respuesta = await fetch(backendurl + url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })

        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`);
        }

        const rsp = await respuesta.json();
        return rsp;
    }
    catch (err) {
        console.error("Error en la solicitud POST:", err.message);
        throw err;
    }
};

export async function GET(url, data) {

    let objString = '?';
    if (Array.isArray(data)) {
        data.forEach((el, index) => {
            objString = objString + `array[${index}][id]=${el.id}&`;
        })
    } else {
        objString = objString + new URLSearchParams(data).toString();
    }

    return await fetch(backendurl + url + objString, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then((res) => res.json())
        .then((res) => res);
};

export async function PATCH(url, data) {
    return await fetch(backendurl + url, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function DELETE(url, params) {
    let queryString = new URLSearchParams(params).toString();
    return await fetch(backendurl + url + '?' + queryString, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then((res) => res.json())
    .then((res) => res);
}

export async function POSTU(url, file) {

    let data = new FormData();
    data.append('file', file);

    return await fetch(backendurl + url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: data
    })
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => { console.log(err) });
}
