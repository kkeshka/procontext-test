import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tree: {
      'list 1': {
        sortedArray: [],
        show: false,
        anyChecked: true,
        allChecked: false,
        data: {
          'item 1': {
            value: 12,
            color: '#eb3e31',
            checked: true,
          },
          'item 2': {
            value: 15,
            color: '#2e73f2',
            checked: true,
          },
          'item 3': {
            value: 17,
            color: '#f0b01a',
            checked: true,
          },
          'item 4': {
            value: 21,
            color: '#4cf51d',
            checked: false,
          },
        },
      },
      'list 2': {
        sortedArray: [],
        show: false,
        anyChecked: true,
        allChecked: false,
        data: {
          'item 1': {
            value: 18,
            color: '#eb3e31',
            checked: false,
          },
          'item 2': {
            value: 11,
            color: '#2e73f2',
            checked: false,
          },
          'item 3': {
            value: 28,
            color: '#f0b01a',
            checked: true,
          },
          'item 4': {
            value: 74,
            color: '#4cf51d',
            checked: true,
          },
        },
      },
      'list 3': {
        sortedArray: [],
        show: false,
        anyChecked: true,
        allChecked: false,
        data: {
          'item 1': {
            value: 45,
            color: '#eb3e31',
            checked: false,
          },
          'item 2': {
            value: 17,
            color: '#2e73f2',
            checked: true,
          },
          'item 3': {
            value: 78,
            color: '#f0b01a',
            checked: true,
          },
          'item 4': {
            value: 5,
            color: '#4cf51d',
            checked: false,
          },
        },
      },
      'list 4': {
        sortedArray: [],
        show: false,
        anyChecked: true,
        allChecked: false,
        data: {
          'item 1': {
            value: 16,
            color: '#eb3e31',
            checked: false,
          },
          'item 2': {
            value: 42,
            color: '#2e73f2',
            checked: false,
          },
          'item 3': {
            value: 7,
            color: '#f0b01a',
            checked: true,
          },
          'item 4': {
            value: 16,
            color: '#4cf51d',
            checked: false,
          },
        },
      },
      'list 5': {
        sortedArray: [],
        show: false,
        anyChecked: true,
        allChecked: false,
        data: {
          'item 1': {
            value: 12,
            color: '#eb3e31',
            checked: false,
          },
          'item 2': {
            value: 15,
            color: '#2e73f2',
            checked: false,
          },
          'item 3': {
            value: 17,
            color: '#f0b01a',
            checked: false,
          },
          'item 4': {
            value: 21,
            color: '#4cf51d',
            checked: false,
          },
        },
      },
    },
  },
  mutations: {
    /**
     * Перемешивание цветов
     * @param {object} state стейт
     * @param {object} index индекс листа
     */
    mixList(state, index) {
      const listData = Object.keys(state.tree[index].data);
      const сolorArray = [];

      listData.forEach((item) => {
        const [value] = [state.tree[index].data[item].value];
        const [color] = [state.tree[index].data[item].color];
        const [checked] = [state.tree[index].data[item].checked];

        if (checked) {
          for (let i = 0; i < +value; i += 1) {
            сolorArray.push(color);
          }

          сolorArray.sort(() => 0.5 - Math.random());
        }
      });

      state.tree[index].sortedArray = сolorArray;
    },

    /**
     * Удаление айтема
     * @param {object} state стейт
     * @param {object} object объект с индексом листа, цветом
     */
    removeItem(state, object) {
      const itemKeys = Object.keys(state.tree[object.index].data);
      itemKeys.forEach((item) => {
        if (state.tree[object.index].data[item].color === object.color) {
          state.tree[object.index].data[item].value -= 1;
        }
      });

      state.tree[object.index].sortedArray = state.tree[object.index].sortedArray.filter(
        (value, index) => index !== object.i,
      );
    },

    /**
     * Изменение состояния показа листа
     * @param {object} state стейт
     * @param {string} index индекс листа
     */
    showList(state, index) {
      state.tree[index].show = !state.tree[index].show;
    },

    /**
     * Изменение состояния чекбокса листа (включить все/выключить все)
     * @param {object} state стейт
     * @param {string} index индекс листа
     */
    checkAll(state, index) {
      const listData = Object.keys(state.tree[index].data);
      let isChecked = false;
      state.tree[index].allChecked = !state.tree[index].allChecked;

      listData.forEach((item) => {
        state.tree[index].data[item].checked = state.tree[index].allChecked;

        if (state.tree[index].data[item].checked === true) isChecked = true;
      });

      state.tree[index].anyChecked = isChecked;

      this.commit('mixList', index);
    },

    /**
     * Проверка состояния чекбоксов
     * @param {object} state стейт
     * @param {string} index индекс листа
     */
    checkCurrentCheckbox(state, index) {
      const listData = Object.keys(state.tree[index].data);
      let isChecked = false;
      let allChecked = true;

      listData.forEach((item) => {
        if (state.tree[index].data[item].checked === true) isChecked = true;
        if (state.tree[index].data[item].checked === false) allChecked = false;
      });

      state.tree[index].anyChecked = isChecked;
      state.tree[index].allChecked = allChecked;

      this.commit('mixList', index);
    },
  },
  actions: {
    /**
     * Экшен на перемешивание
     * @param {*} param0
     * @param {string} index индекс листа
     */
    mixList({ commit }, index) {
      commit('mixList', index);
    },

    /**
     * Экшен на уменьшение значения айтема
     * @param {*} param0
     * @param {string} index индекс листа
     */
    removeItem({ commit }, index) {
      commit('removeItem', index);
    },

    /**
     * Экшен на изменение состояние показа листа
     * @param {*} param0
     * @param {string} index индекс листа
     */
    showList({ commit }, index) {
      commit('showList', index);
    },

    /**
     * Экшен на изменение состояния чекбокса листа
     * @param {*} param0
     * @param {string} index индекс листа
     */
    checkAll({ commit }, index) {
      commit('checkAll', index);
    },

    /**
     * Экшен на проверку состояния чекбоксов
     * @param {*} param0
     * @param {string} index индекс листа
     */
    checkCurrentCheckbox({ commit }, index) {
      commit('checkCurrentCheckbox', index);
    },
  },
  modules: {
  },
});
