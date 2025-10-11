import axios from "axios";
import { CloudSpendProjectionResponse } from "../interfaces/projection.interface";
import { CloudSpendResponse } from "../interfaces/historical.interface";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },
});


export const getHistoricalData = async () => {
    const { data } = await api.get<CloudSpendResponse>("/cloudSpend");
    return data;
};

export const getProjectionData = async () => {
    const { data } = await api.get<CloudSpendProjectionResponse>("/cloudSpendProjection");
    return data;
};
