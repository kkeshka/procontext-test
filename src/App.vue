<template>
  <div class="container">
    <div class="tree">
      <List
       v-for="(list, listIndex) in tree"
       :key="listIndex"
       :listIndex="listIndex"
       :list="list"
       />
    </div>
    <div class="sort">
      <Sort
       v-for="(list, index) in tree"
       :key="index"
       :index="index"
       :list="list"
       />
    </div>
  </div>
</template>

<script>
import List from './components/List.vue';
import Sort from './components/Sort.vue';

export default {
  name: 'App',
  components: {
    List,
    Sort,
  },
  computed: {
    tree() {
      return this.$store.state.tree;
    },
  },
};
</script>

<style lang="scss">
  @font-face {
    font-family: 'PT Sans';
    src: url('./assets/fonts/PTSans-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT Sans';
    src: url('./assets/fonts/PTSans-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;

    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    color: #2c3e50;
  }

  .container {
    display: flex;
    padding: 30px;

    justify-content: space-between;
  }

  .tree {
    width: 40%;
    padding: 20px 40px;

    border: 1px solid #000;
  }

  .sort {
    width: 40%;
    padding: 20px;

    border: 1px solid #000;
  }
</style>
