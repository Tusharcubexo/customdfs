import axios from 'axios';
import data from "bootstrap/js/src/dom/data";
// import {Redirect} from "react-router";


export default class API {
    baseUrl = 'https://o2ygn3a3h3.execute-api.us-east-2.amazonaws.com'

    async setToken(token) {
        try {
            await localStorage.setItem('token', token)
        } catch (error) {
            console.log(error);
        }
    }

    async GetApi(url, payload) {
        // let token = localStorage.getItem('token')
        try {
            let response = axios.post(
                this.baseUrl + url,
                 payload

            )
                .then((res) => {
                    return res
                })
                .catch((error) => {
                    return error.response
                })
            return response
        } catch (error) {
            console.log(error);
        }
    }

    async PostApi(data, url) {
        try {
            let response = axios.post(
                this.baseUrl + url,
                data
            )
                .then((res) => {
                    return res
                })
                .catch((error) => {
                    return error
                })
            return response
        } catch (error) {
            return error
        }
    }

    async PostWithParamsApi(url, params, data) {
        this.baseUrl=''
        try {
            let response = axios.post(
                this.baseUrl + url,
                data,
                {
                    params:params
                }
            )
                .then((res) => {
                    return res
                })
                .catch((error) => {
                    return error.response
                })
            return response
        } catch (error) {
            console.log(error);
        }
    }



};