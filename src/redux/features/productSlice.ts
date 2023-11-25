import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('product/fetchProducts', async ({ page }: any) => {
  const response = await fetch(`http://localhost:3001/data/?page=${!page ? 1 : page}&perPage=5`);
  const data = await response.json();
  return data;
});

export const addProduct = createAsyncThunk('product/addProduct', async ({ productoInfo }: any, thunkAPI) => {
  const response = await fetch('http://localhost:3001/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productoInfo),
  });
  const data = await response.json();
  return data;
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async ({ id, currentPage }: any, thunkAPI) => {
  const response = await fetch(`http://localhost:3001/data/${id}/?page=${currentPage}&perPage=5`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

export const updateProduct = createAsyncThunk('product/updateProduct', async ({ id, productoInfo }: any, thunkAPI) => {
  const response = await fetch(`http://localhost:3001/data/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productoInfo.productoInfo)
  });
  const data = await response.json();
  return data;
});

export const changeLanguage = createAction<string>('product/changeLanguage');

const initialState: any = {
  products: [],
  page: 1,
  currentPage: 1,
  totalPages: 1,
  language: "ESP",
  arrayPages: [],
  totalProducts: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.dataFound;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.arrayPages = action.payload.numbersArray;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = action.payload.dataAfterDeletion;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.arrayPages = action.payload.numbersArray;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = action.payload.data
      })
      .addCase(changeLanguage, (state, action) => {
        state.language = action.payload;
      });
  },
});

export const selectProducts = (state: any) => state.product.products;

export default productSlice.reducer;