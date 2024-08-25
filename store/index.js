import { createStore } from 'vuex';

const store = createStore({
  state: {
    cards: [],
  },
  mutations: {
    ADD_CARD(state, card) {
      state.cards.push(card);
    },
    DELETE_CARD(state, cardId) {
      state.cards = state.cards.filter(card => card.id !== cardId);
    },
  },
  actions: {
    addCard({ commit }, card) {
      // Generate a unique ID for the new card
      card.id = Date.now();
      commit('ADD_CARD', card);
    },
    deleteCard({ commit }, cardId) {
      commit('DELETE_CARD', cardId);
    },
  },
  getters: {
    allCards(state) {
      return state.cards;
    },
  },
});

export default store;