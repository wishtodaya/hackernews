<template>
  <div id="sider">
    <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        v-model:open-keys="openKeys"
        @click="selectItem">


      <a-sub-menu :key="'sub'+month" v-for="{month,days} in dataList">
        <template #title>{{ month }}</template>
        <a-menu-item
            :key="month+'item'+index"
            v-for="(day,index) in days"
        >{{ day }}</a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>
</template>
<script setup>
import {reactive, toRefs } from 'vue';
import {getDataList} from "../api/index.js";
import router from "../router/index.js";
    const dataList= getDataList();
    const state = reactive({
      openKeys: [],
      selectedKeys: [],
    });
    const selectItem = (item) => {
      router.push({ path: '/', query: {date: item.key } })
    };
   const { openKeys, selectedKeys } = toRefs(state);
</script>
<style scoped>
#sider {
  height: 100%;
}
</style>