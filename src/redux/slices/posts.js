import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';

export const fetchPosts = createAsyncThunk(
    'posts/featchPosts',
    async () => {
        const { data } = await axios.get('/posts');
        return data;
    }
);

const initialState = {
    posts: {
        items: [],
        loading: true,
        error: false
    },
    tags: {
        items: [],
        loading: true,
        error: false
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.posts.loading = true;
            state.posts.items = [];
            state.posts.error = false;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts.loading = false;
            state.posts.error = false;
            state.posts.items = action.payload;
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.posts.loading = false;
            state.posts.error = true;
        })
    }
});

export const postsReducer = postsSlice.reducer;
