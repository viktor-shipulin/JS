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
        selectedId: null 
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
            if (item) {
                item.price = newPrice;
            }
        }
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

export const { selectItem, resetSelection, deleteItem, updatePrice } = noodleSlice.actions;
export default noodleSlice.reducer;