import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from '@vercel/postgres';
export async function POST( request:Request) {



    try {
        const {email, username, password}= await request.json();
        console.log({email, password,username});
        const hashPassword= await hash(password, 10)
        const response = await sql`
INSERT INTO users (username, email, password) 
  
`


    } catch (error) {
        console.log({error});
     
        
        
    }
    return NextResponse.json({message:"success"});
}