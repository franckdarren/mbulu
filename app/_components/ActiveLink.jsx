'use client';

import { usePathname } from 'next/navigation';

const ActiveLink = ({ href, children }) => {
    const pathname = usePathname();

    // Normalise les chemins en supprimant les barres obliques finales pour une comparaison cohérente
    const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const normalizedHref = href.endsWith('/') ? href.slice(0, -1) : href;

    const isActive = normalizedPathname === normalizedHref;

    return (
        <a
            href={href}
            className={`block py-2 px-3 rounded transition-colors duration-300 ${isActive ? 'text-[#093741] md:hover:bg-transparent md:border-0' : 'text-white md:border-0 md:hover:text-[#22AAC6]'
                }`}
        >
            {children}
        </a>
    );
};

export default ActiveLink;
