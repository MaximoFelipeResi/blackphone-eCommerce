import { NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/utils/firebaseConfig';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}
