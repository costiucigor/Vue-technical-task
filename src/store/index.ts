import { createStore, Commit } from 'vuex';
import loginModal from "@/store/login-modal";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  counter: number;
}

interface State {
  loginModal: any;
  cart: Product[];
  cartOpen: boolean;
}

const state: State = {
  loginModal: {
    showModal: false,
  },
  cart: [],
  cartOpen: false,
};

const mutations = {
  addToCart(state: State, product: Product) {
    const existingProduct = state.cart.find((item: Product) => item.name === product.name);
    if (existingProduct) {
      existingProduct.counter++;
    } else {
      state.cart.push({ ...product, counter: 1 });
    }
  },
  removeFromCart(state: State, productId: string) {
    state.cart = state.cart.filter((product) => product.id !== productId);
  },
  setCartOpen(state: State, value: boolean) {
    state.cartOpen = value;
    console.log(state.cartOpen);
  },
};

const actions = {
  addToCart({ commit }: { commit: Commit }, product: Product) {
    commit('addToCart', product);
  },
  removeFromCart({ commit }: { commit: Commit }, productId: string) {
    commit('removeFromCart', productId);
  },
  toggleCart({ commit, state }: { commit: Commit; state: State }) {
    const isOpen = !state.cartOpen;
    commit('setCartOpen', isOpen);
  },
};

const getters = {
  getProductPrice: (state: State) => (productId: string) => {
    const product = state.cart.find((item: Product) => item.id === productId);
    return product ? product.price : 0;
  }
};

export default createStore<State>({
  modules: {
    loginModal
  },
  state,
  mutations,
  actions,
  getters,
});