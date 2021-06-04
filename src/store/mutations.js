export default {
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
};
