import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// GET: Fetch all projects
export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    // Convert Firebase docs to a simple array
    const projects = querySnapshot.docs.map(doc => ({
      _id: doc.id,
      ...doc.data()
    }));
    
    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Create a new project
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ success: false, error: "Wrong Password" }, { status: 401 });
    }

    // Remove password before saving
    const { password, ...projectData } = body;
    
    // Save to Firestore "projects" collection
    const docRef = await addDoc(collection(db, "projects"), {
      ...projectData,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}