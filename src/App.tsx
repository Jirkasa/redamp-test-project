import React from "react"
import Page from "./components/Page/Page";
import UserImport from "./features/user-import/components/UserImport/UserImport";

const App: React.FC = () => {
    return (
        <Page>
            <UserImport />
        </Page>
    );
}

export default App;