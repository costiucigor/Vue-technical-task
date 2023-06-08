import { Module } from 'vuex';

interface LoginModalState {
    showModal: boolean;
}

const module: Module<LoginModalState, any> = {
    namespaced: true,
    state: {
        showModal: false,
    },
    mutations: {
        setShowModal(state, value: boolean) {
            state.showModal = value;
        },
    },
    actions: {
        toggleModal({ commit, state }) {
            commit('setShowModal', !state.showModal);
        },
    },
};

export default module;