import React, { useMemo } from "react";
import Heading from "../../../../components/Heading/Heading";
import Spacer from "../../../../components/Spacer/Spacer";
import EditableTable from "../../../../components/EditableTable/EditableTable";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { getUsers, updateUserData } from "../../userImportSlice";
import { UsersValidationResult, validateUsers } from "../../../../utils/usersValidation";

const UserImportLoadedData: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(getUsers);
    const usersValidationResult = useMemo<UsersValidationResult>(
        () => validateUsers(users),
        [users]
    );

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
                            {
                                value: user.email,
                                invalid: !usersValidationResult.isValid(index, "email")
                            },
                            {
                                value: user.firstName,
                                invalid: !usersValidationResult.isValid(index, "firstName")
                            },
                            {
                                value: user.lastName,
                                invalid: !usersValidationResult.isValid(index, "lastName")
                            },
                            {
                                value: user.phone,
                                invalid: !usersValidationResult.isValid(index, "phone")
                            },
                            {
                                value: user.role,
                                invalid: !usersValidationResult.isValid(index, "role")
                            },
                            {
                                value: user.location,
                                invalid: !usersValidationResult.isValid(index, "location")
                            }
                        ]
                    }
                })}
            />
        </>
    );
}

export default UserImportLoadedData;