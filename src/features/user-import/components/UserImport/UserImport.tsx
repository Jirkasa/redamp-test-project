import React, { useMemo, useState } from "react";
import Tile from "../../../../components/Tile/Tile";
import StepsNavigation from "../../../../components/StepNavigation/StepsNavigation";
import Spacer from "../../../../components/Spacer/Spacer";
import DialogButtonsContainer from "../../../../components/DialogButtonsContainer/DialogButtonsContainer";
import Button from "../../../../components/Button/Button";
import UserImportInitialForm from "../UserImportInitialForm/UserImportInitialForm";
import { useAppSelector } from "../../../../hooks/redux";
import { getImportName, getUploadedFileName, getUsers } from "../../userImportSlice";
import UserImportDropFile from "../UserImportDropFile/UserImportDropFile";
import UserImportLoadedData from "../UserImportLoadedData/UserImportLoadedData";
import { UsersValidationResult, validateUsers } from "../../../../utils/usersValidation";
import UserImportRecapitulation from "../UserImportRecapitulation/UserImportRecapitulation";
import Message from "../../../../components/Message/Message";

const UserImport: React.FC = () => {
    const importName = useAppSelector(getImportName);
    const uploadedFileName = useAppSelector(getUploadedFileName);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const users = useAppSelector(getUsers);
    const usersValidationResult = useMemo<UsersValidationResult>(
        () => validateUsers(users),
        [users]
    );
    const [importFinished, setImportFinished] = useState<boolean>(false);

    if (importFinished) {
        return (
            <Tile>
                <Message>Import has been successfully processed.</Message>
            </Tile>
        );
    }

    let enabledStepsCount = 1;
    if (importName.trim().length > 0) {
        enabledStepsCount = 2;

        if (uploadedFileName !== null) {
            enabledStepsCount = 3;

            if (!usersValidationResult.containsErrors()) {
                enabledStepsCount = 4;
            }
        }
    }

    return (
        <>
            <Tile>
                <StepsNavigation
                    stepsCount={4}
                    enabledStepsCount={enabledStepsCount}
                    currentStep={currentStep}
                    onClick={setCurrentStep}
                />
                <Spacer size={6} />
                {currentStep === 1 && <UserImportInitialForm />}
                {currentStep === 2 && <UserImportDropFile />}
                {currentStep === 3 && <UserImportLoadedData usersValidationResult={usersValidationResult} />}
                {currentStep === 4 && <UserImportRecapitulation />}
            </Tile>
            <Spacer size={6} />
            <DialogButtonsContainer>
                <Button outlined disabled={currentStep === 1} onClick={() => setCurrentStep(currentStep-1)}>Back</Button>
                {currentStep === 4 ? (
                    <Button onClick={() => setImportFinished(true)}>Submit</Button>
                ) : (
                    <Button disabled={currentStep >= enabledStepsCount} onClick={() => setCurrentStep(currentStep+1)}>Next</Button>
                )}
            </DialogButtonsContainer>
        </>
    )
}

export default UserImport;