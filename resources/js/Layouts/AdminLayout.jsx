import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import SidebarLink from '@/Components/SidebarLink';
import { Link } from '@inertiajs/react';

export default function AdminLayout({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (

        <>
            <div className="w-full h-full">
                <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                    <div>
                        <div className='-mx-6 px-6  py-6'>
                            {user.name}
                        </div>
                        <ul className='space-y-2 -tracking-wide mt-8'>
                            <li>
                                <SidebarLink href={route("dashboard")} active={route().current('dashboard')}>
                                    <i class="bi bi-grid fill-current group-hover:text-orange-500"></i>

                                    <span className="-mr-1 font-medium group-hover:text-orange-500">Dashboard</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href={route("users.index")} active={route().current('users.index')}>
                                    <i class="bi bi-people group-hover:text-orange-500"></i>

                                    <span className="-mr-1 font-medium group-hover:text-orange-500">Users</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href={route("roles.index")} active={route().current('roles.index')}>
                                    <i class="bi bi-wrench-adjustable-circle group-hover:text-orange-500"></i>

                                    <span className="-mr-1 font-medium group-hover:text-orange-500">Роли доступа</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href={route("permissions.index")} active={route().current('permissions.index')}>
                                    <i class="bi bi-fingerprint mr-3 group-hover:text-orange-500"></i>

                                    <span className="-mr-1 font-medium group-hover:text-orange-500">Доступы</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href={route("documents.index")} active={route().current('documents.index')}>
                                    <i class="bi bi-journals group-hover:text-orange-500"></i>

                                    <span className="-mr-1 font-medium group-hover:text-orange-500">Документы</span>
                                </SidebarLink>
                            </li>
                        </ul>
                    </div>
                    <div className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'>
                        <Link href={route('logout')} method="post" as="button">
                            <i className="bi bi-box-arrow-right mr-2 group-hover:text-orange-500"></i>
                            <span className="group-hover:text-red-400">Logout</span>
                        </Link>
                    </div>
                </aside>
                <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                    <div className='px-6 pt-6 2xl:container'>{children}</div>
                </div>



            </div>
        </>
    )
}
