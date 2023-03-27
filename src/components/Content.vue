<template>
  <a-typography v-for="content in contentList">
    <a-typography-title :level="5">{{content.title}}</a-typography-title>
  <a-typography-paragraph>
    <pre>{{content.abstract}}</pre>
  </a-typography-paragraph>
  </a-typography>
  <a-pagination
      v-model:page-size="pageSize"
      v-model:current="current"
      :total="total"
      :show-total="total => `共 ${total} 条`"
      @change="onChange"/>
</template>

<script setup>
import {getContentList} from "../api/index.js";
import { onMounted, reactive, toRefs,} from "vue";
import {onBeforeRouteUpdate} from "vue-router";

//获取路由参数，根据参数请求数据
let date=null;
onBeforeRouteUpdate((to, from, next) => {
  date= to.query.date;
  fetchData(state.current,state.pageSize,date)
  next();
});
const state = reactive({
  contentList: [],
  current: 1,
  pageSize: 5,
  total: 0,
});
//路由参数解析
const fetchData =(current, pageSize,date)=>{
  const result = getContentList(current,pageSize,date);
  state.contentList =result.contentList;
  state.total = result.total;
}
onMounted(() => {
fetchData(1,5,date)
});
const onChange = (page) => {
  current.value = page;
  fetchData(page,state.pageSize,date)
};
const {current, pageSize, total,contentList} = toRefs(state);
</script>

<style scoped>

</style>