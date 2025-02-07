import React from "react";
import Heading from "../../../../components/Heading/Heading";
import Spacer from "../../../../components/Spacer/Spacer";
import InputsContainer from "../../../../components/InputsContainer/InputsContainer";
import FileDragInput from "../../../../components/FileDragInput/FileDragInput";
import Loader from "../../../../components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { getCSVDataError, getProcessingCSVData, getUploadedFileName, getUsers, removeFile, uploadCSVFile } from "../../userImportSlice";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import FileRow from "../../../../components/FileRow/FileRow";

const UserImportDropFile: React.FC = () => {
    const dispatch = useAppDispatch();
    const processingCSVData = useAppSelector(getProcessingCSVData);
    const csvDataError = useAppSelector(getCSVDataError);
    const uploadedFileName = useAppSelector(getUploadedFileName);

    const handleFileUpload = (file: File) => {
        dispatch(uploadCSVFile(file));
    }

    const handleFileRemove = () => {
        dispatch(removeFile());
    }

    return (
        <>
            <Heading>Upload CSV File</Heading>
            <Spacer size={6} />
            {uploadedFileName !== null && (
                <InputsContainer>
                    <FileRow name={uploadedFileName} onRemove={handleFileRemove} />
                </InputsContainer>
            )}
            {processingCSVData && <Loader />}
            {!processingCSVData && uploadedFileName === null && (
                <InputsContainer>
                    <FileDragInput message="Drop file here." onFileUpload={handleFileUpload} />
                </InputsContainer>
            )}
            {csvDataError && (
                <>
                    <Spacer size={2} />
                    <ErrorMessage>{csvDataError}</ErrorMessage>
                </>
            )}
        </>
    )
}

export default UserImportDropFile;