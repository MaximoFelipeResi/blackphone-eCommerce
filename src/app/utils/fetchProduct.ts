import { db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export async function fetchProduct(productId: string) {
  try {
    const productRef = doc(db, 'productos', productId);
    const docSnap = await getDoc(productRef);
    if (docSnap.exists()) {
      console.log('Product data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}
