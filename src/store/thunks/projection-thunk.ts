import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { ProjectionData } from '../../models/projection.interface';


interface FetchProjectionParams {
    area?: string;
    vertical?: string;
    initiative?: string;
    service?: string;
}


export const fetchProjection = createAsyncThunk<ProjectionData, FetchProjectionParams>(
    '/cloudSpendProjection',
    async (params) => {
        const response = await axios.get<ProjectionData>(
            `${API_BASE_URL}/cloudSpendProjection`,
            { params: params }
        );
        return response.data;
    }
);
