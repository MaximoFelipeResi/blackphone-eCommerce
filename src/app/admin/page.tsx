"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, collection, setDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '../utils/firebaseConfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

interface Product {
  id: string;
  model: string;
  price: string;
  description: string;
  prodImg: string;
  brand: string;
  quantity: number;
  stock: number;
}

const Admin = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchProducts();
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'productos'));
      const productsList: Product[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Product));
      setProducts(productsList);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products. Please try again later.');
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `product_images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error('Error uploading image:', error);
          setError('Error uploading image. Please try again.');
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

  const handleUpdateProduct = async () => {
    if (!editingProduct) return;

    setUploading(true);

    try {
      let imageUrl = editingProduct.prodImg;

      if (selectedImage) {
        imageUrl = await uploadImage(selectedImage);
      }

      const productRef = doc(db, 'productos', editingProduct.id);
      await updateDoc(productRef, {
        model: editingProduct.model,
        price: editingProduct.price,
        description: editingProduct.description,
        prodImg: imageUrl,
        brand: editingProduct.brand,
        quantity: editingProduct.quantity,
        stock: editingProduct.stock,
      });

      setSuccess('Product updated successfully.');
      fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
      setError('Error updating product. Please try again.');
    } finally {
      setUploading(false);
      setSelectedImage(null);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const productRef = doc(db, 'productos', id);
      await deleteDoc(productRef);
      setSuccess('Product deleted successfully.');
      fetchProducts();
      setModalVisible(false);
      setProductToDelete(null);
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Error deleting product. Please try again.');
    }
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
  };

  const handleModalConfirm = () => {
    if (productToDelete) {
      handleDeleteProduct(productToDelete);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen mt-24 mx-auto max-w-screen-xl p-4">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>

      {error && <div className="bg-red-500 text-white p-4 mb-4 rounded-lg">{error}</div>}
      {success && <div className="bg-green-500 text-white p-4 mb-4 rounded-lg">{success}</div>}

      {editingProduct && (
        <div className="p-4 border rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Editar Producto</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateProduct();
            }}
          >
            <input
              type="text"
              value={editingProduct.model}
              onChange={(e) => setEditingProduct({ ...editingProduct, model: e.target.value })}
              placeholder="Modelo"
              className="p-2 border rounded-lg mb-2 w-full"
            />
            <input
              type="text"
              value={editingProduct.price}
              onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
              placeholder="Precio"
              className="p-2 border rounded-lg mb-2 w-full"
            />
            <textarea
              value={editingProduct.description}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, description: e.target.value })
              }
              placeholder="Descripción"
              className="p-2 border rounded-lg mb-2 w-full"
            />
            <input
              type="text"
              value={editingProduct.prodImg}
              onChange={(e) => setEditingProduct({ ...editingProduct, prodImg: e.target.value })}
              placeholder="URL de Imagen"
              className="p-2 border rounded-lg mb-2 w-full"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border rounded-lg mb-2 w-full"
            />
            <input
              type="text"
              value={editingProduct.brand}
              onChange={(e) => setEditingProduct({ ...editingProduct, brand: e.target.value })}
              placeholder="Marca"
              className="p-2 border rounded-lg mb-2 w-full"
            />
            <input
              type="number"
              value={editingProduct.stock}
              onChange={(e) => setEditingProduct({ ...editingProduct, stock: parseInt(e.target.value) })}
              placeholder="Stock"
              className="p-2 border rounded-lg mb-2 w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              disabled={uploading}
            >
              {uploading ? 'Subiendo Imagen...' : 'Guardar Cambios'}
            </button>
            <button
              type="button"
              onClick={() => setEditingProduct(null)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg ml-2"
            >
              Cancelar
            </button>
          </form>
        </div>
      )}

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-black font-bold mb-4">Confirmar Eliminación</h2>
            <p className="text-black mb-4">¿Estás seguro de que deseas eliminar este producto?</p>
            <button
              onClick={handleModalConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Confirmar
            </button>
            <button
              onClick={() => setModalVisible(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg ml-2"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 text-white px-4 py-2 bg-gray-800">Modelo</th>
            <th className="border border-gray-300 text-white px-4 py-2 bg-gray-800">Precio</th>
            <th className="border border-gray-300 text-white px-4 py-2 bg-gray-800">Descripción</th>
            <th className="border border-gray-300 text-white px-4 py-2 bg-gray-800">Imagen</th>
            <th className="border border-gray-300 text-white px-4 py-2 bg-gray-800">Marca</th>
            <th className="border border-gray-300 text-white px-4 py-2 bg-gray-800">Stock</th>
            <th className="border border-gray-300 text-white px-4 py-2 bg-gray-800">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 text-white px-4 py-2">{product.model}</td>
              <td className="border border-gray-300 text-white px-4 py-2">{product.price}</td>
              <td className="border border-gray-300 text-white px-4 py-2">{product.description}</td>
              <td className="border border-gray-300 text-white px-4 py-2">
                <img src={product.prodImg} alt={product.model} className="w-16 h-16 object-cover" />
              </td>
              <td className="border border-gray-300 text-white px-4 py-2">{product.brand}</td>
              <td className="border border-gray-300 text-white px-4 py-2">{product.stock}</td>
              <td className="border border-gray-300 text-white px-4 py-2">
                <button
                  onClick={() => handleEditClick(product)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    setProductToDelete(product.id);
                    setModalVisible(true);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
