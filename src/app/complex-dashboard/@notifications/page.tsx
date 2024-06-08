import Card from "@/src/components/card";
import Link from "next/link";

export default function Notifications() {
    return (
        <Card>
            <div>Notifications page</div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
    )
}