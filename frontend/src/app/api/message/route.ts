import { NextResponse } from "next/server";

export async function GET() {
    const baseUrl = process.env.FASTAPI_BASE_URL;
    console.log(baseUrl)
    try {
        const res = await fetch(`${baseUrl}/api/message`)
        const data = await res.json();
        console.log(data)
        return NextResponse.json(data)
    } catch (err) {
        return NextResponse.json(
            {
            error: `Failed to fetch health from backend: ${err}`
            },
            {
                status: 500
            }
        )
    }
}