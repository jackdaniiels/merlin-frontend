// slices/projectionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProjection } from '../thunks/projection-thunk';
import { Projection, ProjectionData } from '../../models/projection.interface';

interface ProjectionState {
    loading: boolean;
    error: string | null;
    data: Projection[];
    message: string | null;
}

const initialState: ProjectionState = {
    loading: false,
    error: null,
    data: [],
    message: null,
};

const projectionSlice = createSlice({
    name: 'projection',
    initialState,
    reducers: {
        clearProjectionData: (state) => {
            state.data = [];
            state.loading = false;
            state.error = null;
            state.message = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjection.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            })
            .addCase(fetchProjection.fulfilled, (state, action: PayloadAction<ProjectionData>) => {
                state.loading = false;
                state.data = action.payload.data;
                state.message = action.payload.message;
            })
            .addCase(fetchProjection.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch projection data';
            });
    },
});

export const { clearProjectionData } = projectionSlice.actions;
export default projectionSlice.reducer;
