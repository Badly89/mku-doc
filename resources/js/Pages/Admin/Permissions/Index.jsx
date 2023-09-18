import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, permissions }) {

    console.log(permissions);

    return (


        <AdminLayout user={auth.user}>
            <Head title="Список доступов" />

        </AdminLayout>
    );

}
