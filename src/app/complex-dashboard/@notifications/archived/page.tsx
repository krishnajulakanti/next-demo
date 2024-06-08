import Card from "@/src/components/card";
import Link from "next/link";

export default function Archived() {
    return (
        <Card>
            <div>Archived page</div>
            <Link href="/complex-dashboard">Default </Link>
        </Card>
    )
}