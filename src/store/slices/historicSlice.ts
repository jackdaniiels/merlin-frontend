import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Historic, HistoricData, Statics } from '../../models/historic.interface';
import { fetchHistoric } from '../thunks/historic-thunk';


interface HistoricState {
    loading: boolean;
    error: string | null;
    data: Historic[];
    statics: Statics[];
}

const initialState: HistoricState = {
    loading: false,
    error: null,
    data: [],
    statics: [],
};

const historicSlice = createSlice({
    name: 'historic',
    initialState,
    reducers: {
        clearHistoricData: (state) => {
            state.data = [];
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHistoric.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHistoric.fulfilled, (state, action: PayloadAction<HistoricData>) => {
                state.loading = false;
                state.data = action.payload.data;
                state.statics = action.payload.statics;
            })
            .addCase(fetchHistoric.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch historic data';
            });
    },
});

export const { clearHistoricData } = historicSlice.actions;
export default historicSlice.reducer;
