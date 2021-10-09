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

interface ShopState {
    items: any[],
    addedToCart: any[],
    total: number
}

interface ShopItem {
    name: string;
    id: number,
    title: string,
    price: number,
    src: string
}

const initialState: ShopState = {
    items: [
        {name: '1', id: 1, title: 'Burgundy set', price: '$40', src: img1},
        {name: '2', id: 2, title: 'Jacket', price: '$35', src: img2},
        {name: '3', id: 3, title: 'Shirt', price: '$20', src: img3},
        {name: '4', id: 4, title: 'Sweater', price: '$25', src: img4},
        {name: '5', id: 5, title: 'Coat', price: '$50', src: img5},
        {name: '6', id: 6, title: 'Black set', price: '$35', src: img6},
        {name: '7', id: 7, title: 'Trousers', price: '$30', src: img7},
        {name: '8', id: 8, title: 'Skirt', price: '$30', src: img8},
        {name: '9', id: 9, title: 'Dress', price: '$40', src: img9}
    ],
    addedToCart: [],
    total: 0
}


export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ShopItem>) => {
            let clickedToAddItem = state.items.find( item => item.id === action.payload.id);
            if (clickedToAddItem) {
                return {
                    ...state,
                    addedToCart: [...state.addedToCart, action.payload],
                    total: state.total + action.payload.price
                }
            }
        }
    }
});


export const { addToCart } = shopSlice.actions;

export default shopSlice.reducer;

