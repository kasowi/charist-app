import axios from "axios";
import {Ngo} from "../model/Ngo";

const NGO_API_URL = 'http://localhost:8080/api/ngos';

export const postNgo: (newNgo: Omit<Ngo, "id">) => Promise<Ngo> = (newNgo) => {
    return axios.post(NGO_API_URL, newNgo)
        .then(response => response.data)
}

export const getAllNgos: () => Promise<Ngo[]> = () => {
    return axios.get(NGO_API_URL)
        .then(response => response.data)
}

export function getNgoById(id: string) {
    return axios.get(`/api/ngos/${id}`)
        .then(response => response.data)
}

export const putNgo: (updatedNgo: Ngo) => Promise<Ngo> = (updatedNgo) => {
    return axios.put("/api/ngos", updatedNgo)
        .then(response => response.data)
}

export const removeNgo: (id: string) => Promise<void> = (id: string) => {
    return axios.delete(`/api/ngos/${id}`)
}

