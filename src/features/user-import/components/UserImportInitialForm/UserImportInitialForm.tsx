import React, { useId } from "react";
import Heading from "../../../../components/Heading/Heading";
import Spacer from "../../../../components/Spacer/Spacer";
import InputsContainer from "../../../../components/InputsContainer/InputsContainer";
import Label from "../../../../components/Label/Label";
import Input from "../../../../components/Input/Input";
import TextArea from "../../../../components/TextArea/TextArea";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { getImportName, setImportName } from "../../userImportSlice";

const UserImportInitialForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const importNameInputId = useId();
    const noteInputId = useId();

    const importName = useAppSelector(getImportName);

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setImportName(event.target.value));
    }

    return (
        <>
            <Heading>User import</Heading>
            <Spacer size={6} />
            <InputsContainer>
                <Label htmlFor={importNameInputId}>Import name</Label>
                <Input id={importNameInputId} type="text" value={importName} onChange={handleNameInputChange} />
                <Spacer size={6} />
                <Label htmlFor={noteInputId}>Note</Label>
                <TextArea id={noteInputId} rows={5} />
            </InputsContainer>
        </>
    );
}

export default UserImportInitialForm;