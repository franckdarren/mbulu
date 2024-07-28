'use client';

import { useRouter } from 'next/navigation';

const ActiveLink = ({ href, children }) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`block py-2 px-3 rounded transition-colors duration-300 ${isActive ? 'text-[#093741] md:hover:bg-transparent md:border-0' : 'text-white md:border-0 md:hover:text-[#22AAC6]'
                }`}
        >
            {children}
        </a>
    );
};

export default ActiveLink;
