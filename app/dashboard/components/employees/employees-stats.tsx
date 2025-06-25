import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheckIcon, LaptopIcon, PartyPopperIcon, UserCheck2Icon, UserIcon } from "lucide-react";
import Link from "next/link";
import WorkLocationTrends from "./work-location-trends";

export default function EmployeesStats() {
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Total employees</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between">
                        <div className="flex gap-2">
                            <UserIcon />
                            <div className="text-5xl font-bold">100</div>
                        </div>
                        <div>
                            <Button size="xs" asChild>
                                <Link href="/dashboard/employees">View all</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Employees present</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            <UserCheck2Icon />
                            <div className="text-5xl font-bold">80</div>
                        </div>
                        <span className="text-xs text-green-500 flex gap-1 items-center">
                            <BadgeCheckIcon />
                            80% of employees are present
                        </span>
                    </CardContent>
                </Card>
                <Card className="border-pink-500 flex flex-col">
                    <CardHeader>
                        <CardTitle>Employees of the month</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-2">
                        <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-2xl">John Doe</span>
                    </CardContent>
                    <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
                        <PartyPopperIcon className="text-pink-500" />
                        <span>Congratulations, John!</span>
                    </CardFooter>
                </Card>
            </div>
            <Card className="my-4">
                <CardHeader>
                    <CardTitle className="text-lg flex gap-2 items-center">
                        <LaptopIcon />
                        <span>Employees work location trends</span>
                        <WorkLocationTrends />
                    </CardTitle>
                </CardHeader>
            </Card>
        </>
    )

}