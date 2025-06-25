import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ListChecksIcon, PieChartIcon, StarIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import TeamsDistributionChart from "./teams-distribution-chart";
import SupportTicketsResolved from "./support-tickets-resolved";

const teamsLeaders = [
    {
        firstName: "John",
        lastName: "Doe",
        avatar: "JD"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        avatar: "JD"
    },
    {
        firstName: "Kevin",
        lastName: "Smith",
        avatar: "KS"
    },
    {
        firstName: "Sarah",
        lastName: "Johnson",
        avatar: "SJ"
    },
    {
        firstName: "Michael",
        lastName: "Brown",
        avatar: "MB"
    },
    {
        firstName: "Emily",
        lastName: "Davis",
        avatar: "ED"
    },
    {
        firstName: "Daniel",
        lastName: "Wilson",
        avatar: "DW"
    }
]

export default function TeamsStats() {
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Total teams</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between">
                        <div className="flex gap-2">
                            <UserIcon />
                            <div className="text-5xl font-bold">8</div>
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
                        <CardTitle className="text-base flex justify-between">
                            <span>Team leaders</span>
                            <StarIcon className="text-yellow-500" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {teamsLeaders.map((leader) => (
                            <TooltipProvider key={`${leader.firstName}-${leader.lastName}`}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Avatar>
                                            <AvatarFallback>{leader.avatar}</AvatarFallback>
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>{leader.firstName} {leader.lastName}</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-0">
                        <CardTitle className="text-base flex justify-between items-center">
                            <span>Team distribution</span>
                            <PieChartIcon />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-2">
                        <TeamsDistributionChart />
                    </CardContent>
                </Card>
            </div>
            <Card className="my-4">
                <CardHeader>
                    <CardTitle className="text-lg flex gap-2 items-center">
                        <ListChecksIcon />
                        <span>Support tickets resolved</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="pl-0">
                    <SupportTicketsResolved />
                </CardContent>
            </Card>
        </>
    )
}