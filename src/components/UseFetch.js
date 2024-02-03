import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../apiFetch"

export default function UseFetch(endpoints) {
    const [data, setData] = useState()

    useEffect(() => {
        GetApiData()
    }, [endpoints])

    const GetApiData = async () => {
        const res = await fetchDataFromApi(endpoints)
        setData(res)
    }
    return {data}

}
