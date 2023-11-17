import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';


const initialState = {
    data: null,
    loading: true,
    error: false
}

export const fetchAuth = createAsyncThunk(
    'auth/fetchAuth',
    async (params) => {
        const { data } = await axios.post('/auth/login', params);
        return data
    }
)

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async (params) => {
        const { data } = await axios.post('/auth/register', params);
        return data
    }
)

export const fetchAuthMe = createAsyncThunk(
    'auth/fetchAuthMe',
    async () => {
        const { data } = await axios.get('/auth/me');
        return data
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuth.pending, (state, action) => {
            state.loading = true;
            state.data = null;
            state.error = false;
        });
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        });
        builder.addCase(fetchAuth.rejected, (state, action) => {
            state.error = true;
            state.data = null;
            state.loading = false;
        });

        builder.addCase(fetchAuthMe.pending, (state, action) => {
            state.loading = true;
            state.data = null;
            state.error = false;
        });
        builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        });
        builder.addCase(fetchAuthMe.rejected, (state, action) => {
            state.error = true;
            state.data = null;
            state.loading = false;
        });

        builder.addCase(fetchRegister.pending, (state, action) => {
            state.loading = true;
            state.data = null;
            state.error = false;
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        });
        builder.addCase(fetchRegister.rejected, (state, action) => {
            state.error = true;
            state.data = null;
            state.loading = false;
        });
    }
});

export const authReducer = authSlice.reducer;
export const selectIsAuth = (state) => Boolean(state.auth.data)
export const { logout } = authSlice.actions;