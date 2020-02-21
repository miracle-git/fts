<template>
  <a-tabs>
    <a-tab-pane key="computed" tab="计算属性">
      <computed/>
    </a-tab-pane>
    <a-tab-pane key="watch" tab="监听器">
      <watcher/>
    </a-tab-pane>
    <a-tab-pane key="computed-vs-watch" tab="计算属性 vs 监听器">
      <computed-watcher/>
    </a-tab-pane>
    <a-tab-pane key="watcher-pro" tab="防抖版">
      <watcher-pro/>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
  import Computed from '@/views/1.5/computed'
  import Watcher from '@/views/1.5/watcher'
  import ComputedWatcher from '@/views/1.5/computed-watcher'
  import WatcherPro from '@/views/1.5/watcher-pro'

  export default {
    components: {
      Computed,
      Watcher,
      ComputedWatcher,
      WatcherPro
    }
  }
</script>
