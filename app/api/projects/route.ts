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
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// POST: Create a new project
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword || body.password !== adminPassword) {
      return NextResponse.json({ success: false, error: "Wrong Password" }, { status: 401 });
    }

    // Remove password before saving
    const { password: _password, ...projectData } = body;
    void _password;
    
    // Save to Firestore "projects" collection
    const docRef = await addDoc(collection(db, "projects"), {
      ...projectData,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}