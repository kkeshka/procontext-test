<template>
  <div class="sort--item">
    <h3 class="sort--header" @click="showList">
      {{index}}
    </h3>
    <div class="sort--inner" v-show="list.show">
      <button class="sort--button" @click="mixList">{{ isSort | isSortFilter }}</button>
      <div v-if="!isSort" class="sort--body">
        <div
          class="sort--list"
          v-for="(item, i) in list.data"
          :key="i"
          v-show="item.checked"
        >
          <span
            v-for="(span, i) in +item.value"
            :key="i"
            class="sort--list-item"
            :style="{backgroundColor: item.color}"
            @click="removeItem(index, i, item.color)"
            >
          </span>
        </div>
      </div>
      <div class="sort--list" v-else>
        <span
          class="sort--list-item"
          v-for="(color, i) in list.sortedArray"
          :key="i"
          :color="color"
          :style="{backgroundColor: color}"
          @click="removeItem(index, i, color)"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'index',
    'list',
    'sortData',
  ],
  data() {
    return {
      showBody: false,
      isSort: false,
    };
  },
  methods: {
    removeItem(index, i, color) {
      this.$store.dispatch('removeItem', { index, i, color });
    },

    mixList() {
      if (this.isSort === false) {
        this.$store.dispatch('mixList', this.index);
      }

      this.isSort = !this.isSort;
    },

    showList() {
      this.$store.dispatch('showList', this.index);
    },
  },
  filters: {
    isSortFilter(value) {
      return value === true ? 'Сортировать' : 'Перемешать';
    },
  },
};
</script>

<style scoped lang="scss">
  .sort--item {
    position: relative;
    margin: 10px 15px;
    padding: 5px;

    border: 1px solid #000;

    .sort--header {
      margin: 0;

      cursor: pointer;
      user-select: none;
    }

    .sort--inner {
      margin-top: 20px;

      .sort--button {
        position: absolute;
        top: 5px;
        right: 5px;

        padding: 5px 10px;

        border: none;
        border-radius: 5px;
        background-color: #34c3eb;
        color: #fff;

        cursor: pointer;
      }
      .sort--list {
        display: block;
        height: auto;

        .sort--list-item {
          display: inline-block;
          margin: 0 2px 10px;
          width: 10px;
          height: 10px;

          cursor: pointer;
        }
      }
    }
  }
</style>
