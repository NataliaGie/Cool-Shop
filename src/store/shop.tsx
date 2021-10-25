import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import img1 from '../images/item-1.jpg';
import img2 from '../images/item-2.jpg';
import img3 from '../images/item-3.jpg';
import img4 from '../images/item-4.jpg';
import img5 from '../images/item-5.jpg';
import img6 from '../images/item-6.jpg';
import img7 from '../images/item-7.jpg';
import img8 from '../images/item-8.jpg';
import img9 from '../images/item-9.jpg';

interface ShopItem {
    count: number,
    id: number,
    title: string,
    price: number,
    src: string
}

interface ShopState {
    items: ShopItem[],
    addedToCart: any[],
    totalPrice: number[]
}

const initialState: ShopState = {
    items: [
        {id: 1, count: 0, title: 'Burgundy set', price: 40, src: img1},
        {id: 2, count: 0, title: 'Jacket', price: 35, src: img2},
        {id: 3, count: 0, title: 'Shirt', price: 20, src: img3},
        {id: 4, count: 0, title: 'Sweater', price: 25, src: img4},
        {id: 5, count: 0, title: 'Coat', price: 50, src: img5},
        {id: 6, count: 0, title: 'Black set', price: 35, src: img6},
        {id: 7, count: 0, title: 'Trousers', price: 30, src: img7},
        {id: 8, count: 0, title: 'Skirt', price: 30, src: img8},
        {id: 9, count: 0, title: 'Dress', price: 40, src: img9}
    ],
    addedToCart: [],
    totalPrice: [0]
}


export const shopSlice: any = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state, action: any) => {
          let cart = {
              id: action.payload.id,
              count: 1,
              title: action.payload.title,
              price: action.payload.price,
              src: action.payload.src
          }

          let existedItem = state.addedToCart.find(item => action.payload.id === item.id);

          if (existedItem) {
            state.addedToCart.map((item, key) => {
                if (item.id == action.payload.id) {
                    state.addedToCart[key].count += 1;
                    return state.totalPrice + state.addedToCart[key].price;
                }
            })
          } else {
            state.addedToCart.push(cart);
          }
        },

        removeItemFromCart: (state, action: PayloadAction<ShopItem>) => {
            let updatedCart = state.addedToCart.filter(item => action.payload.id !== item.id)

            return {
                ...state,
                addedToCart: updatedCart,
                total: state.totalPrice
            }
        },

        incrementItem: (state, action: any) => {
            state.addedToCart[action.payload].count += 1;
        },

        decrementItem: (state, action: any) => {
            let quantity = state.addedToCart[action.payload].count;
            if (quantity > 1) {
                state.addedToCart[action.payload].count -= 1;
            }
        }
    }
});


export const { addToCart, removeItemFromCart, incrementItem, decrementItem } = shopSlice.actions;

export default shopSlice.reducer;

