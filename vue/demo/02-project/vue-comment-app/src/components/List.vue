<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="!items.length">暂无评论，请点击左侧添加评论！</h2>
    <ul class="list-group">
      <item
        v-for="(item, index) in items"
        :item="item"
        :deleteComment="() => deleteComment(index)"
        :key="index"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item'

  export default {
    props: ['items', 'deleteComment'],
    components: {
      Item
    }
  }
</script>

<style>
  .reply {
    margin-top: 0;
  }
</style>
