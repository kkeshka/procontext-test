<template>
    <div class="list--item" @click.stop>
      <div>
        <input
          class="list--checkbox"
          :id="index"
          type="checkbox"
          v-model="item.checked"
          @change="changeCheckbox"
        >
        <label class="list--label" :for="index">{{ index }}</label>
      </div>
      <div class="list--item-edit">
        <input
          class="list--item-input"
          type="number"
          v-mask="mask"
          v-model="item.value"
          @change="$emit('mixList')"
        >
        <input
          class="list--item-input"
          type="color"
          v-model="item.color"
          @input="$emit('mixList')"
        >
      </div>
    </div>
</template>

<script>
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const inputNumberMask = createNumberMask({
  prefix: '',
  allowDecimal: true,
  allowNegative: false,
});

export default {
  props: [
    'item',
    'index',
  ],
  data() {
    return {
      mask: inputNumberMask,
      editOpen: false,
    };
  },
  methods: {
    /**
     * Экшены стора на проверку состояния чекбоксов айтемов
     * и перемешивания массива листа
     */
    changeCheckbox() {
      this.$emit('checkCurrentCheckbox');
      this.$emit('mixList');
    },
  },
};
</script>

<style lang="scss">
  .list--item {
    display: flex;
    position: relative;
    margin-left: 30px;

    align-items: center;

    div {
      margin: 5px 15px;

      .list--item-color {
        display: inline-block;
        margin-right: 15px;
        width: 10px;
        height: 10px;
      }
    }
    .list--item-edit {
        display: flex;
        height: 100%;

      .list--item-input {
        margin-right: 5px;
        height: initial;
      }
    }
  }
</style>
