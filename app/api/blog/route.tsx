import { NextResponse } from 'next/server';
import {db} from "@/app/utils/firebase"
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  const snap = await getDocs(collection(db,'blog'));
  const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  return NextResponse.json(data);
}
