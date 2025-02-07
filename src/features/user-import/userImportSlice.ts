import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { User } from "../../types";
import { convertCSVDataToUsers, parseCSVFile } from "../../utils";

interface UserImportState {
    importName: string;
    note: string;
    processingCSVData: boolean;
    csvDataError: string | null;
    uploadedFileName: string | null;
    users: User[];
}

const initialState: UserImportState = {
    importName: "",
    note: "",
    processingCSVData: false,
    csvDataError: null,
    uploadedFileName: null,
    users: []
};

export const uploadCSVFile = createAsyncThunk(
    "userImport/uploadCSVFile",
    async (file: File, { rejectWithValue}) => {
        try {
            const data = await parseCSVFile(file);
            const users = convertCSVDataToUsers(data);

            if (users.length === 0) {
                return rejectWithValue("No data found in the CSV file.");
            }

            return {
                fileName: file.name,
                users: users
            };
        } catch {
            return rejectWithValue("Failed to process CSV data.");
        }
    }
)

const userImportSlice = createSlice({
    name: "userImport",
    initialState,
    reducers: {
        setImportName(state, action: PayloadAction<string>) {
            state.importName = action.payload;
        },
        setNote(state, action: PayloadAction<string>) {
            state.note = action.payload;
        },
        removeFile(state) {
            state.uploadedFileName = null;
            state.users = [];
        }
    },
    extraReducers: builder => {
        builder.addCase(uploadCSVFile.pending, state => {
            state.processingCSVData = true;
            state.csvDataError = null;
        });
        builder.addCase(uploadCSVFile.fulfilled, (state, action) => {
            state.processingCSVData = false;
            state.uploadedFileName = action.payload.fileName;
            state.users = action.payload.users;
        });
        builder.addCase(uploadCSVFile.rejected, (state, action) => {
            state.processingCSVData = false;
            state.csvDataError = action.payload as string;
        });
    }
});

export const {
    setImportName,
    setNote,
    removeFile
} = userImportSlice.actions;

export const getImportName = (state: RootState) => state.userImport.importName;
export const getNote = (state: RootState) => state.userImport.note;
export const getProcessingCSVData = (state: RootState) => state.userImport.processingCSVData;
export const getCSVDataError = (state: RootState) => state.userImport.csvDataError;
export const getUploadedFileName = (state: RootState) => state.userImport.uploadedFileName;
export const getUsers = (state: RootState) => state.userImport.users;

export default userImportSlice.reducer;