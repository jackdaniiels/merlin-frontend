import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../config';


interface FetchFiltersDependentParams {
    field: string;
    area?: string;
    vertical?: string;
    initiative?: string;
    service?: string;
}

export const fetchFiltersDependent = createAsyncThunk<string[], FetchFiltersDependentParams>(
    '/cloudSpendDependentFilters',
    async (params) => {
        const response = await axios.get<string[]>(
            `${API_BASE_URL}/cloudSpendDependentFilters`,
            { params: params }
        );
        return response.data;
    }
);