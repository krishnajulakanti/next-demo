"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter();

    const logout = () => {
        console.log("Logged out!");
        router.push("/");
    }
    return (
        <div style={{padding: "30px 0px"}}>
        <button style={{ backgroundColor: "red"}} onClick={logout}>Logout</button>
        </div>
    )
}