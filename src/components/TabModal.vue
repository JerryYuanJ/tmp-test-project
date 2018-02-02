<!--
    @CreationDate:2018/2/2
    @Author:Joker
    @Usage:测试popup不能遮住mt-tabbar的问题
-->
<template>
  <div class="tab-modal">

    <mt-button @click="popupVisible=true" style="width: 100%">打开Picker</mt-button>

    <mt-popup
      style="width: 100%"
      v-model="popupVisible"
      position="bottom">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>

    <mt-tabbar fixed v-model="selectTab">
      <mt-tab-item id="text">
        文本
      </mt-tab-item>
      <mt-tab-item id="data">
        数据
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data(){
      return {
        selectTab: 'text',
        popupVisible: false,
        slots: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      }
    },
    methods: {
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      }
    }
  }
</script>
