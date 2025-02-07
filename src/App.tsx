import React, { useId } from "react"
import Page from "./components/Page/Page";
import Tile from "./components/Tile/Tile";
import StepsNavigation from "./components/StepNavigation/StepsNavigation";
import Spacer from "./components/Spacer/Spacer";
import Heading from "./components/Heading/Heading";
import InputsContainer from "./components/InputsContainer/InputsContainer";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import TextArea from "./components/TextArea/TextArea";
import DialogButtonsContainer from "./components/DialogButtonsContainer/DialogButtonsContainer";
import Button from "./components/Button/Button";

const App: React.FC = () => {
    const importNameInputId = useId();
    const noteInputId = useId();

    return (
        <Page>
            <Tile>
                <StepsNavigation stepsCount={4} enabledStepsCount={2} currentStep={1} />
                <Spacer size={6} />
                <Heading>User import</Heading>
                <Spacer size={6} />
                <InputsContainer>
                    <Label htmlFor={importNameInputId}>Import name</Label>
                    <Input id={importNameInputId} type="text" />
                    <Spacer size={6} />
                    <Label htmlFor={noteInputId}>Note</Label>
                    <TextArea id={noteInputId} rows={5} />
                </InputsContainer>
            </Tile>
            <Spacer size={6} />
            <DialogButtonsContainer>
                <Button outlined>Back</Button>
                <Button>Next</Button>
            </DialogButtonsContainer>
        </Page>
    );
}

export default App;