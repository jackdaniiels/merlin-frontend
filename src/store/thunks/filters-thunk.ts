import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { FiltersOptionsData } from '../../models/filters.interface';


export const fetchFilters = createAsyncThunk<FiltersOptionsData>(
    '/cloudSpendFilters',
    async () => {
        const response = await axios.get<FiltersOptionsData>(`${API_BASE_URL}/cloudSpendFilters`);
        return response.data;
    }
);
