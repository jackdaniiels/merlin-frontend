// filtersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilters } from '../thunks/filters-thunk';
import { FiltersState } from '../../models/filters.interface';
import { fetchFiltersDependent } from '../thunks/filters-dependent-thunk';


const initialState: FiltersState = {
    type: 'Histórico',
    vertical: 'Retail',
    area: '',
    initiative: '',
    service: '',
    options: {
        type: ['Histórico', 'Proyección', 'Histórico y Proyección'],
        verticals: [],
        areas: [],
        initiatives: [],
        services: [],
    },
    loading: false,
    error: null,
};

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.loading = false;
                const { verticals, areas, initiatives, services } = action.payload;
                state.options.areas = areas;
                state.options.initiatives = initiatives;
                state.options.services = services;
                state.options.verticals = verticals;
            })
            .addCase(fetchFilters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch filters';
            })
            .addCase(fetchFiltersDependent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFiltersDependent.fulfilled, (state, action) => {
                state.loading = false;
                const field = action.meta.arg.field;

                switch (field) {
                    case 'vertical':
                        state.options.verticals = action.payload;
                        break;
                    case 'area':
                        state.options.areas = action.payload;
                        break;
                    case 'initiative':
                        state.options.initiatives = action.payload;
                        break;
                    case 'service':
                        state.options.services = action.payload;
                        break;
                    default:
                        break;
                }
            })
            .addCase(fetchFiltersDependent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch filters';
            });
    },
});

export const { setType, setVertical, setArea, setInitiative, setService, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
