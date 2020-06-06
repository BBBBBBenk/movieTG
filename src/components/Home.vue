<template>
  <div class="home">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">加盟商推广系统</b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item >
            <router-link to="/a">首页</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/b">账户资料</router-link></b-nav-item>
          <b-nav-item href="#">
            <router-link to="/c">推广链接管理</router-link></b-nav-item>
          <b-nav-item href="#">
            <router-link to="/d">子代理业绩</router-link></b-nav-item>
          <b-nav-item href="#">
            <router-link to="/e">业绩报表</router-link></b-nav-item>
          <b-nav-item href="#">
            <router-link to="/f">结算中心</router-link></b-nav-item>
          <b-nav-item href="#">
            <router-link to="/g">新手指南</router-link></b-nav-item>
          <b-nav-item href="#">
            <router-link to="/a">返回官网</router-link></b-nav-item>
          <b-nav-item href="#">
            <router-link to="/a">登出</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="content">
       <!-- 路由占位符 -->
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 左侧菜单数据
      menuList: [
        {
          id: 125,
          authName: "用户管理",
          path: "users",
          children: [
            {
              id: 110,
              authName: "用户列表",
              path: "users",
              children: [],
              order: null
            }
          ],
          order: 1
        },
        {
          id: 103,
          authName: "交易流水",
          path: "rights",
          children: [
            {
              id: 111,
              authName: "交易记录",
              path: "roles",
              children: [],
              order: null
            }
          ],
          order: 2
        },
        {
          id: 101,
          authName: "视频管理",
          path: "goods",
          children: [
            {
              id: 104,
              authName: "视频列表",
              path: "goods",
              children: [],
              order: 1
            }
            // {
            //   id: 115,
            //   authName: "分类参数",
            //   path: "params",
            //   children: [],
            //   order: 2,
            // },
          ],
          order: 3
        },
        {
          id: 102,
          authName: "订单管理",
          path: "orders",
          children: [
            {
              id: 107,
              authName: "订单列表",
              path: "orders",
              children: [],
              order: null
            }
          ],
          order: 4
        }
        // {
        //   id: 145,
        //   authName: "数据统计",
        //   path: "reports",
        //   children: [
        //     {
        //       id: 146,
        //       authName: "数据报表",
        //       path: "reports",
        //       children: [],
        //       order: null,
        //     },
        //   ],
        //   order: 5,
        // },
      ],
      iconObj: {
        "125": "iconfont icon-user",
        "103": "iconfont icon-tijikongjian",
        "101": "iconfont icon-shangpin",
        "102": "iconfont icon-danju",
        "145": "iconfont icon-baobiao"
      },
      // 默认不折叠
      isCollapse: false,
      // 被激活导航地址
      activePath: ""
    };
  },
  created() {
    // this.getMenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 获取请求菜单
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.status !== 200) return this.$message.error(res.meta.msg);
      this.menuList = res.data;
      // console.log(res)
    },
    // 菜单的折叠与展开
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    // 保存连接的激活地址
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  a{
    color: white;
  }
  #content {
    max-width: 1180px;
    margin: 20px auto;
  }
  
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373f41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;

  .el-menu {
    border: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  // 鼠标放上去变成小手
  cursor: pointer;
}
</style>
