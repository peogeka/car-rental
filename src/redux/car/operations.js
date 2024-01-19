import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const baseURL = '';
axios.defaults.baseURL = baseURL;


const FETCH_ADVERTS = "adverts/fetchAll";

export const fetchAdverts = createAsyncThunk(
    FETCH_ADVERTS,
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/adverts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);