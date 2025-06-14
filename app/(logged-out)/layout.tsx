import { LightDarkToogle } from "@/components/ui/light-dark-toogle";

export default function LoggedOutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex flex-col gap-4 min-h-screen p-24  items-center justify-center">
                {children}
            </div>
            <LightDarkToogle className="fixed right-0 top-1/2" />
        </>
    )
}