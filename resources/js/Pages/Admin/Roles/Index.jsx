import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, roles }) {

    console.log(auth);

    return (
        <AdminLayout user={auth.user}>
            <Head title="Список ролей" />

        </AdminLayout>
    );

}
