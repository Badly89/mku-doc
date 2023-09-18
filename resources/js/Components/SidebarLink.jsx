import { Link } from "@inertiajs/react";
export default function SidebarLink({ active = false, className = '', children, ...props }) {
    return (
        <Link  {...props} className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active
            ? 'px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-orange-600 to-cyan-400'
            : 'px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'
            }text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`} >
            {children}
        </ Link >
    );
}
