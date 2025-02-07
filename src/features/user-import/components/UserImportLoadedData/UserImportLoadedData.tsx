import React from "react";
import Heading from "../../../../components/Heading/Heading";
import Spacer from "../../../../components/Spacer/Spacer";
import EditableTable from "../../../../components/EditableTable/EditableTable";
import { useAppSelector } from "../../../../hooks/redux";
import { getUsers } from "../../userImportSlice";

const UserImportLoadedData: React.FC = () => {
    const users = useAppSelector(getUsers);

    return (
        <>
            <Heading>Loaded data</Heading>
            <Spacer size={6} />
            <EditableTable
                columns={[
                    { title: "Email", key: "email" },
                    { title: "First name", key: "firstName" },
                    { title: "Last name", key: "lastName" },
                    { title: "Phone", key: "phone" },
                    { title: "Role", key: "role" },
                    { title: "Location", key: "location" }
                ]}
                rows={users.map((user, index) => {
                    return {
                        key: index.toString(),
                        data: [
                            user.email,
                            user.firstName,
                            user.lastName,
                            user.phone,
                            user.role,
                            user.location
                        ]
                    }
                })}
            />
        </>
    );
}

export default UserImportLoadedData;