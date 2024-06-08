'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./styles.css";
import { useState } from 'react';
import React from 'react';

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Logout", href: "/logout" }
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const [input, setInput] = useState("");

    return (
        <div>
            <div>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}  />
            </div>
            {
                navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link href={link.href} key={link.name} className={isActive ? "text-blue-500 font-bold mr-4" : "mr-4"}>
                        {link.name}
                        </Link>
                    )
                })
            }
            {children}
        </div>
    )
}
