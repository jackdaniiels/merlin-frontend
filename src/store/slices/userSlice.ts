// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
}

interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter((u) => u.id !== action.payload);
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
