import { CART_KEY } from '@/constants/local-storage-keys';
import { getStorageItemAsync, setStorageItemAsync } from './use-storage-state';

export async function getCartItems() {
  return JSON.parse((await getStorageItemAsync(CART_KEY)) || "[]");
}

export async function resetCartItems() {
  return await setStorageItemAsync(CART_KEY, "[]")
}

export async function addItemCart(item: any) {
  const cartItems = await getCartItems();
  cartItems.push(item)

  return setCartItems(cartItems);
}

export async function removeItemCart(id: number) {
  const all_items = await getCartItems()
  const new_items = []
  let removido = false

  for (let i = 0; i < all_items.length; i++) {
    if (removido || all_items[i].id != id) {
      new_items.push(all_items[i])
    } else if (all_items[i].id == id) {
      removido = true
    }
  }

  setCartItems(new_items);
}

async function setCartItems(cartItens: any[]) {
  await setStorageItemAsync(CART_KEY, JSON.stringify(cartItens));
}