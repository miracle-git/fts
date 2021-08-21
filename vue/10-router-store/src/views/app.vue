<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/admin">管理</router-link>
    </nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
