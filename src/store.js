import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showModal: false, projectId: null },
  reducers: {
    modalConfig(state, action) {
      state.showModal = action.payload.showModal;
      state.projectId = action.payload.projectId
    },
  },
});

export const uiActions = uiSlice.actions;

const store = configureStore({ reducer: { ui: uiSlice.reducer } });
export default store;
