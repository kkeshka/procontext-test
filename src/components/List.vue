<template>
  <div class="tree--item">
    <div class="list">
      <img
        @click="showList"
        v-if="!list.show"
        src="../assets/img/chevron-right-solid.svg"
        alt=""
      >
      <img
        @click="showList"
        v-else
        src="../assets/img/chevron-down-solid.svg"
        alt=""
      >
      <input
        :id="listIndex"
        class="list--checkbox"
        type="checkbox"
        :checked="list.allChecked"
        @click="checkAll"
      >
      <label
       :class="{'any-checked' : this.list.anyChecked, 'all-checked' : this.list.allChecked}"
       class="list--label"
       :for="listIndex"
      >
        {{ listIndex }}
      </label>
      <ListItem
        v-show="list.show"
        v-for="(item, index) in list.data"
        :item="item"
        :key="index"
        :index="index"
        @mixList="mixList"
        @checkCurrentCheckbox="checkCurrentCheckbox"
      />
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  components: {
    ListItem,
  },
  props: [
    'listIndex',
    'list',
  ],
  data() {
    return {
      editOpen: false,
    };
  },
  methods: {
    mixList() {
      this.$store.dispatch('mixList', this.listIndex);
    },
    showList() {
      this.$store.dispatch('showList', this.listIndex);
    },
    checkAll() {
      this.$store.dispatch('checkAll', this.listIndex);
    },
    checkCurrentCheckbox() {
      this.$store.dispatch('checkCurrentCheckbox', this.listIndex);
    },
  },
};
</script>

<style lang="scss">
  .tree--item {
    display: flex;
    position: relative;
    width: 100%;

    list-style-type: none;

    img {
      margin-right: 10px;

      cursor: pointer;
    }

    .list {
      position: relative;
      width: inherit;

      user-select: none;

      .list--checkbox {
        position: absolute;
        opacity: 0;
      }

      .list--label {
        &:before {
          display: inline-block;
          content: '';
          margin-right: 5px;
          width: 10px;
          height: 10px;

          border: 1px solid #000;
        }
      }

      .list--checkbox:checked+.list--label {
        &:before {
          background: url('../assets/img/check-solid.svg') no-repeat center;
        }
      }

      .list--checkbox+.list--label.any-checked {
        &:before {
          background: url('../assets/img/circle-solid.svg') center no-repeat;
        }
      }

      .list--checkbox+.list--label.any-checked.all-checked {
        &:before {
          background: url('../assets/img/check-solid.svg') no-repeat center;
        }
      }
    }
  }
</style>
