<template>
  <a-layout>
    <a-layout-header style="background-color:white;">
     导航栏
    </a-layout-header>

    <a-layout-content>
      <a-layout>
      <a-layout-sider style="background-color:white;">
        菜单，列出当前所有时间
      </a-layout-sider>
        <a-layout-content style="background-color:white;">
          <a-typography v-for="news in newsList.result">
            <a-typography-title :level="5">{{news.content.title}}</a-typography-title>
            <a-typography-paragraph>
              {{news.content.abstract}}
            </a-typography-paragraph>
          </a-typography>

          <a-pagination
              v-model:current="current"
              v-model:page-size="pageSize"
              :page-size-options="pageSizeOptions"
              :total="total"
              show-size-changer
              @showSizeChange="onShowSizeChange">
          </a-pagination>
        </a-layout-content>
      </a-layout>
    </a-layout-content>

    <a-layout-footer>
      底部
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import {reactive, ref, toRefs} from "vue";
import result from '../api/index';
const state = reactive({
  selectedKeys: [],
  openKeys: [],
});
const handleClick = menuInfo => {
  console.log('click ', menuInfo);
};
const newsList=result

const pageSizeOptions = ref(['10', '20', '30', '40', '50']);
const current = ref(1);
const pageSize = ref(10);
const total = ref(50);
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
  pageSize.value = pageSize;
};

const {selectedKeys,openKeys}=toRefs(state)
</script>

<style scoped>

</style>