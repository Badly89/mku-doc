import AdminLayout from "@/Layouts/AdminLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Index({ auth }) {
    return (
        <AdminLayout
            user={auth.user}

        >
            <Head title="Админ панель" />

            Ghjdtj
        </AdminLayout>
    )
}
