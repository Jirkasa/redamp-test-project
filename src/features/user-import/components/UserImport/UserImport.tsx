import React from "react";
import Tile from "../../../../components/Tile/Tile";
import StepsNavigation from "../../../../components/StepNavigation/StepsNavigation";
import Spacer from "../../../../components/Spacer/Spacer";
import DialogButtonsContainer from "../../../../components/DialogButtonsContainer/DialogButtonsContainer";
import Button from "../../../../components/Button/Button";
import UserImportInitialForm from "../UserImportInitialForm/UserImportInitialForm";

const UserImport: React.FC = () => {
    return (
        <>
            <Tile>
                <StepsNavigation stepsCount={4} enabledStepsCount={2} currentStep={1} />
                <Spacer size={6} />
                <UserImportInitialForm />
            </Tile>
            <Spacer size={6} />
            <DialogButtonsContainer>
                <Button outlined>Back</Button>
                <Button>Next</Button>
            </DialogButtonsContainer>
        </>
    )
}

export default UserImport;