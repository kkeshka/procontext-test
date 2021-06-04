export default {
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
   * Экшен на проверку состояния чекбоксов айтемов
   * @param {*} param0
   * @param {string} index индекс листа
   */
  checkCurrentCheckbox({ commit }, index) {
    commit('checkCurrentCheckbox', index);
  },
};
