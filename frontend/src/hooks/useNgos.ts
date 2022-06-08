import {useEffect, useState} from "react";
import {Ngo} from "../model/Ngo";
import {getAllNgos, postNgo, putNgo, removeNgo} from "../service/NgoApiService";
import {toast} from "react-toastify";


export default function useNgos() {
    const [ngos, setNgos] = useState<Ngo[]>([]);

    useEffect(() => {
        getAllNgos()
            .then(allNgos => setNgos(allNgos))
            .catch(() => toast.error("Connection failed! Please try again."))
    }, [])

    const addNgo = (newNgo: Omit<Ngo, "id">) => {
        postNgo(newNgo)
            .then(addedNgo => setNgos([...ngos, addedNgo]))
            .then(() => {toast.success("NGO successfully added.");})
            .catch(() => toast.error("Could not add NGO. Please try again."))
    }

    const deleteNgo = (id: string) => {
        removeNgo(id)
            .then(() => setNgos(ngos.filter(ngos => ngos.id !== id)))
            .then(() => toast.success("NGO successfully removed."))
            .catch(() => toast.error("Could not remove NGO. Please try again."))
    }

    const updateNgo = (ngoToUpdate: Ngo) => {
        return putNgo(ngoToUpdate)
            .then(updatedNgo => {
                setNgos(ngos.map(singleNgo => singleNgo.id === updatedNgo.id? updatedNgo: singleNgo))
                toast.success("NGO "+ updatedNgo.name + " successfully updated.")
                return updatedNgo})
            .catch(() => {
                toast.error("Could not update NGO. Please try again.")
            })
    }

    return {ngos, addNgo, deleteNgo, updateNgo}

}

