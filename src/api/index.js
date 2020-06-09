import axios from "axios"
import { HEADERS, TIMEOUT } from "../utils/configs"

export async function getSomething() {
    try {
        const response = await axios({
            method: "GET",
            url: "https://www.google.com",
            params: null,
            data: null,
            headers: HEADERS,
            responseType: "json",
            timeout: TIMEOUT,
        })
        return response.data
    } catch (err) {
        return err
    }
}
