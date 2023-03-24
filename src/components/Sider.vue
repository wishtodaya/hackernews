<template>
  <div id="sider">
    <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        v-model:open-keys="openKeys"
        @openChange="onOpenChange">


      <a-sub-menu :key="'sub'+month" v-for="{month,days} in dataList">
        <template #title>{{ month }}</template>
        <a-menu-item :key="'item'+index" v-for="(day,index) in days">{{ day }}</a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>
</template>
<script setup>
import {reactive, toRefs } from 'vue';
import {getDataList} from "../api/index.js";
    const dataList= getDataList();
    const state = reactive({
      rootSubmenuKeys: [],
      openKeys: [],
      selectedKeys: [],
    });
    const onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };
   const { openKeys, selectedKeys } = toRefs(state);
</script>
<style scoped>
#sider {
  height: 100%;
}
</style>