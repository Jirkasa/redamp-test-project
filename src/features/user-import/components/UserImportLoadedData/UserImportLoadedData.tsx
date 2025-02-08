import React from "react";
import Heading from "../../../../components/Heading/Heading";
import Spacer from "../../../../components/Spacer/Spacer";
import EditableTable from "../../../../components/EditableTable/EditableTable";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { getUsers, updateUserData } from "../../userImportSlice";

const UserImportLoadedData: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(getUsers);

    const handleTableEdit = (rowKey: string, columnKey: string, value: string) => {
        dispatch(updateUserData({
            index: parseInt(rowKey),
            key: columnKey,
            value
        }));
    }

    return (
        <>
            <Heading>Loaded data</Heading>
            <Spacer size={6} />
            <EditableTable
                onEdit={handleTableEdit}
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