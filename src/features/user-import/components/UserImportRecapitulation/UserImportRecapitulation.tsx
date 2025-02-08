import React from "react";
import Heading from "../../../../components/Heading/Heading";
import Spacer from "../../../../components/Spacer/Spacer";
import RecapitulationDisplay from "../../../../components/RecapitulationDisplay/RecapitulationDisplay";
import { getImportName, getUsersCount } from "../../userImportSlice";
import { useAppSelector } from "../../../../hooks/redux";

const UserImportRecapitulation: React.FC = () => {
    const importName = useAppSelector(getImportName);
    const usersCount = useAppSelector(getUsersCount);

    return (
        <>
            <Heading>Confirm import</Heading>
            <Spacer size={6} />
            <RecapitulationDisplay>
                <RecapitulationDisplay.Item label="Import name" value={importName} />
                <RecapitulationDisplay.Item label="User count" value={usersCount.toString()} />
            </RecapitulationDisplay>
        </>
    );
}

export default UserImportRecapitulation;