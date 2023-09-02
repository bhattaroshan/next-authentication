
import {db} from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest){

    const {name,email} = await req.json();

    try{
        const user = await db.profile.create({
            data:{
                name: name,
                email: email
            }
        })
        return new NextResponse(JSON.stringify(user),{status:200});
    }catch(e){
        return new NextResponse(JSON.stringify(e),{status:400});
    }
}