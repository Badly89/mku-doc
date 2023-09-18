import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, documents }) {

    console.log(documents);

    return (


        <AdminLayout user={auth.user}>
            <Head title="Реестр документов" />

        </AdminLayout>
    );

}
