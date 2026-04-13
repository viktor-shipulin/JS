import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNoodlesApi } from "../../api/noodleApi";

export const getItems = createAsyncThunk("noodle/getItems", async () => {
    return await fetchNoodlesApi();
});

const noodleSlice = createSlice({
    name: "noodle",
    initialState: {
        items: [],
        status: "idle",
        selectedId: null,
        likes: {},      
        favorites: {},  
        ratings: {},   
    },
    reducers: {
        selectItem: (state, action) => {
            state.selectedId = action.payload;
        },
        resetSelection: (state) => {
            state.selectedId = null;
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            if (state.selectedId === action.payload) state.selectedId = null;
        },
        updatePrice: (state, action) => {
            const { id, newPrice } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) item.price = newPrice;
        },

        addLike: (state, action) => {
            const id = action.payload;                 
            if (state.likes[id] === undefined) {        
                state.likes[id] = 0;
            }
            state.likes[id] += 1;                       
        },

        toggleFavorite: (state, action) => {
            const id = action.payload;
            if (state.favorites[id] === undefined) {    
                state.favorites[id] = false;
            }
            state.favorites[id] = !state.favorites[id]; 
        },

        addRating: (state, action) => {
            const { id, rating } = action.payload;      
            if (!state.ratings[id]) {                   
                state.ratings[id] = [];
            }
            state.ratings[id].push(rating);            
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItems.pending, (state) => { state.status = "loading"; })
            .addCase(getItems.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            });
    }
});

export const {
    selectItem, resetSelection, deleteItem, updatePrice,
    addLike, toggleFavorite, addRating  
} = noodleSlice.actions;

export default noodleSlice.reducer;