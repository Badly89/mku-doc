import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function Index({ users, auth }) {

    console.log(users.data);
    const { userList, setUserList } = useState();

    return (


        <AdminLayout user={auth.user}>
            <Head title="Список юзверов" />
            {users.data.map((useritem) => {
                <Card >
                    <Card.Body>
                        {useritem.name}
                        {console.log(useritem)}
                    </Card.Body>
                </Card>
            })

            }

        </AdminLayout>
    );

}
