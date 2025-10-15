import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { HistoricData } from '../../models/historic.interface';

interface FetchHistoricParams {
    area?: string;
    vertical?: string;
    initiative?: string;
    service?: string;
}


export const fetchHistoric = createAsyncThunk<HistoricData, FetchHistoricParams>(
    '/cloudSpend',
    async (params) => {
        const response = await axios.get<HistoricData>(
            `${API_BASE_URL}/cloudSpend`,
            { params: params }
        );
        return response.data;
    }
);
