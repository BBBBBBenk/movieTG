<template>
  <div class="e">
    <form method="GET" name="frmSearch" id="frmSearch">
      <section
        class="content-header bg-gray-active responsive-lg"
        style="padding: 14px;"
      >
         <div class="row">
          <div class="col-xs-12" style="line-height: 27px;display: flex;">
            <b-form-datepicker id="datepicker-valid" v-model="date"></b-form-datepicker>
            <div >
              <b-button variant="info" @click="search">搜索</b-button>
            </div>
          </div>
        </div>
      </section>
    </form>

    <section class="content-header">
      <h1>会员业绩</h1>
      <ol class="breadcrumb">
        <li>
          <a href="index.aspx"><i class="fa fa-home"></i>桌面</a>
        </li>
        <li><a href="performance.aspx">会员业绩</a></li>
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
                    <th>用户ID</th>
                    <th>消费记录</th>
                    <th>消费日期</th>
                    <th>提成</th>
                    <th>消费金额</th>
                    <th>消费类型</th>
                    <th>提成比例</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                  <tr>
                    <td><b>合计:</b></td>
                    <td colspan="2"></td>
                    <td><span id="sumPay" style="color: #32CD32;"></span></td>
                    <td><span id="sumPay2" style="color:#0094ff;"></span></td>
                    <td colspan="3"></td>
                  </tr>
                </tfoot>
              </table>-->
              <b-table striped hover :items="items" :fields="fields">
                <template v-slot:cell(order.orderType)="data">
                  {{data.item.order.orderType === 1? '开通VIP' : data.item.order.orderType === 3? '续费VIP': '其他消费'}}
                </template>
                <template v-slot:cell(order.orderStatus)="data">
                  {{data.item.order.orderStatus === 1? '未支付' : '已支付'}}
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "",
      items: [],
      fields: [
        {
          key: 'order.userId',
          label: '用户ID',
          sortable: false
        },
        {
          key: 'order.user.nickname',
          label: '昵称',
          sortable: false
        },
        {
          key: 'proxy.nickname',
          label: '消费记录',
          sortable: false
        },
        {
          key: 'order.payTime',
          label: '消费日期',
          sortable: false,
        },
        {
          key: 'changeAmount',
          label: '提成',
          sortable: false,
        },
        {
          key: 'order.orderAmount',
          label: '消费金额',
          sortable: false,
        },
        {
          key: 'order.orderType',
          label: '消费类型',
          sortable: false,
        },
        {
          key: 'order.proxyShare',
          label: '提成比例',
          sortable: false,
        },
        {
          key: 'order.orderStatus',
          label: '状态',
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
      const { data: res } = await this.$http.get('user/proxy/member/order/get', { params: { pageSize: 10, pageNum: 1 } });
      console.log(res.data.proxyMemberOrderList);
      this.items = res.data.proxyMemberOrderList.walletlogs;
      this.total = res.data.total
    }

  }
};
</script>
<style lang="less" scoped></style>
