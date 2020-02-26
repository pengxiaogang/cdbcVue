<template>
  <div class="home">
    <el-container>
      <el-header>
        <TopNav/>
      </el-header>
      <el-container style="margin-top: 20px">
        <el-aside width="300px" style="background: #909399">
          <br><br><br><br><br><br><br><br><br><br><br>
          Aside
          <br><br><br><br><br><br><br><br>
        </el-aside>
        <el-main  style="background: cyan">

          <br><br><br><br><br><br><br><br><br><br><br>
          Main
          <br><br><br><br><br><br><br><br>
        </el-main>

      </el-container>
      <el-footer>
        <p>&copy; 2020 中国石油塔里木油田分公司</p>
        <p>&copy; 2020 Schlumber Inc.</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'Home',
  components: {
    TopNav
  }
}
</script>
<style>
  .home{
    width: 1440px;
    margin: 0 auto;
  }
</style>