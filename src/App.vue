<!--每个组件分为三个部分，template，script和style-->
<template>
  <div>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{ path: '/goods' }">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{ path: '/ratings' }">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{ path: '/seller' }">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6"></script>

<!-- <style lang="stylus" rel="stylesheet/stylus">
.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex: 1
    text-align: center
    & > a
      display: block
      font-size: 14px
      color: rgb(77, 85, 93)
      &.active
        color: rgb(240, 20, 20)
</style> -->
