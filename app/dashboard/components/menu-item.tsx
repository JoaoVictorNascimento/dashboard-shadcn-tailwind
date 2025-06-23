"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return <li>
        <Link href={href}
            className={cn("block p-2 mt-1 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground"
                , isActive && "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-foreground text-foreground")}>
            {children}
        </Link>
    </li>;
}