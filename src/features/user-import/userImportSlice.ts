import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserImportState {
    importName: string;
    note: string;
}

const initialState: UserImportState = {
    importName: "",
    note: ""
};

const userImportSlice = createSlice({
    name: "userImport",
    initialState,
    reducers: {
        setImportName(state, action: PayloadAction<string>) {
            state.importName = action.payload;
        },
        setNote(state, action: PayloadAction<string>) {
            state.note = action.payload;
        }
    }
});

export const {
    setImportName,
    setNote
} = userImportSlice.actions;

export const getImportName = (state: RootState) => state.userImport.importName;

export default userImportSlice.reducer;