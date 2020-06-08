<template>
  <div class="d">
    <form method="GET" name="frmSearch" id="frmSearch">
      <section
        class="content-header bg-gray-active responsive-lg"
        style="padding: 14px;"
      >
        <div class="row">
          <div class="col-xs-12" style="line-height: 27px;display: flex;">
            <b-form-datepicker id="datepicker-valid" v-model="date"></b-form-datepicker>
            <div style="width: 100px;">
              <b-button variant="info" @click="search">搜索</b-button>
            </div>
          </div>
        </div>
      </section>
    </form>

    <section class="content-header">
      <h1>子代理业绩</h1>

      <div
        class="alert alert-warning alert-dismissible"
        style="margin-top: 10px;"
      >
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        *数据较多，建议在电脑浏览器使用，体验更佳。<br />
        *只显示有销售额的代理业绩总额。
      </div>

      <ol class="breadcrumb">
        <li>
          <a href="index.aspx"><i class="fa fa-home"></i>桌面</a>
        </li>
        <li><a href="performance.aspx">子代理列表</a></li>
      </ol>
    </section>
    <section class="content">
      <div class="nav-tabs-custom" style="position: relative;">
        <div class="tab-content">
          <div class="box box-danger">
            <div class="box-body no-padding table-responsive">
              <!--<table id="orderList" class="table table-striped text-nowrap">
                <thead>
                  <tr>
                    <th>子代理ID</th>
                    <th>昵称</th>
                    <th>代理等级</th>
                    <th>加入时间</th>
                    <th>业绩综合</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="dataItem in tableData" :key="dataItem.id">
                    <td></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td><b>合计:</b></td>
                    <td colspan="3"></td>
                    <td><span id="sumPay" style="color: #32CD32;"></span></td>
                  </tr>
                </tfoot>
              </table>-->
              <b-table striped hover :items="items" :fields="fields"></b-table>
              <!--<el-table :data="tableData">
                <el-table-column label="子代理ID"></el-table-column>
                <el-table-column label="昵称"></el-table-column>
                <el-table-column label="代理等级"></el-table-column>
                <el-table-column label="加入时间"></el-table-column>
                <el-table-column label="业绩综合"></el-table-column>
              </el-table>-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-pagination
      v-model="currentPage"
      :total-rows="total"
      :per-page="pageSize"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: '',
      total: 0,
      pageSize: 10,
      currentPage: 1,
      items: [],
      fields: [
        {
          key: 'proxy.id',
          label: '子代理ID',
          sortable: false
        },
        {
          key: 'proxy.nickname',
          label: '昵称',
          sortable: false
        },
        {
          key: 'proxy.proxylevel.levelName',
          label: '代理等级',
          sortable: false,
        },
        {
          key: 'proxy.createTime',
          label: '加入时间',
          sortable: false,
        },
        {
          key: 'proxy.wallet.amount',
          label: '业绩综合',
          sortable: false,
        }
      ]
    };
  },
  created() {
    this.getProxyList();
  },
  methods: {
    search(){
    },
    async getProxyList() {
      const { data: res } = await this.$http.get('user/proxy/member/get', { params: { pageSize: 10, pageNum: 1 } });
      this.items = res.data.proxyMemberList;
      this.total = res.data.total
    }
  }
};
</script>
<style lang="less" scoped></style>
