<template>
  <a-layout>
    <a-layout>
      <a-layout-sider id="a-layout-sider">
       <Sider></Sider>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background-color:white;">
          导航栏
        </a-layout-header>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
      </a-layout>
    <a-layout-footer>
      <Footer></Footer>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import Sider from "../components/Sider.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
#a-layout-sider{
  height: 620px;
  background-color: #fff;
}
</style>