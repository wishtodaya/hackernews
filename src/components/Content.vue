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
import {onMounted, reactive, toRefs} from "vue";
const state = reactive({
  contentList: [],
  current: 1,
  pageSize: 5,
  total: 0
});

const fetchData =(current,pageSize)=>{
  console.log("获取数据："+current)
  const result =getContentList(current,pageSize);
  console.log(result)
  state.contentList =result.contentList;
  state.total = result.total;
}
onMounted(() => {
fetchData(1,5)
});
const onChange = (page) => {
  current.value = page;
  fetchData(page,pageSize)
};
const {current, pageSize, total,contentList} = toRefs(state);
</script>

<style scoped>

</style>