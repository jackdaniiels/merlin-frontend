// filtersSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface FiltersState {
    type: 'Histórico' | 'Proyección' | 'Histórico y Proyección';
    vertical: string;
    area: string;
    initiative: string;
    service: string;
    options: {
        type: string[];
        verticals: string[];
        areas: string[];
        initiatives: string[];
        services: string[];
    };
    loading: boolean;
    error: string | null;
}



const initialState: FiltersState = {
    type: 'Histórico',
    vertical: '',
    area: '',
    initiative: '',
    service: '',
    options: {
        type: ['Histórico', 'Proyección', 'Histórico y Proyección'],
        verticals: ['1', '2', '3'],
        areas: ['4', '5', '6'],
        initiatives: ['7', '8', '9'],
        services: ['10', '11', '12'],
    },
    loading: false,
    error: null,
};

// export const fetchVerticals = createAsyncThunk<string[]>('filters/fetchVerticals', async () => {
//     const response = await axios.get('/api/verticals');
//     return response.data;
// });

// export const fetchAreas = createAsyncThunk<string[]>('filters/fetchAreas', async () => {
//     const response = await axios.get('/api/areas');
//     return response.data;
// });

// export const fetchInitiatives = createAsyncThunk<string[]>('filters/fetchInitiatives', async () => {
//     const response = await axios.get('/api/initiatives');
//     return response.data;
// });

// export const fetchServices = createAsyncThunk<string[]>('filters/fetchServices', async () => {
//     const response = await axios.get('/api/services');
//     return response.data;
// });

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<FiltersState['type']>) => { state.type = action.payload; },
        setVertical: (state, action: PayloadAction<string>) => { state.vertical = action.payload; },
        setArea: (state, action: PayloadAction<string>) => { state.area = action.payload; },
        setInitiative: (state, action: PayloadAction<string>) => { state.initiative = action.payload; },
        setService: (state, action: PayloadAction<string>) => { state.service = action.payload; },
        clearFilters: (state) => {
            state.type = 'Histórico';
            state.vertical = '';
            state.area = '';
            state.initiative = '';
            state.service = '';
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         // Verticals
    //         .addCase(fetchVerticals.pending, (state) => { state.loading = true; })
    //         .addCase(fetchVerticals.fulfilled, (state, action: PayloadAction<string[]>) => {
    //             state.options.verticals = action.payload;
    //             state.loading = false;
    //         })
    //         .addCase(fetchVerticals.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.error.message || 'Failed to fetch verticals';
    //         })
    //         // Areas
    //         .addCase(fetchAreas.fulfilled, (state, action: PayloadAction<string[]>) => {
    //             state.options.areas = action.payload;
    //         })
    //         // Initiatives
    //         .addCase(fetchInitiatives.fulfilled, (state, action: PayloadAction<string[]>) => {
    //             state.options.initiatives = action.payload;
    //         })
    //         // Services
    //         .addCase(fetchServices.fulfilled, (state, action: PayloadAction<string[]>) => {
    //             state.options.services = action.payload;
    //         });
    // },
});

export const { setType, setVertical, setArea, setInitiative, setService, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
