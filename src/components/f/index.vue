<template>
  <div class="f">
    <section class="content-header">
      <h1>结帐记录 <small>以下币种为CNY</small></h1>
      <div
        class="alert alert-danger alert-dismissible"
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
        *实时出账单，提现按照整点结算数据提现。<br />
        *每天仅提现1次，12小时左右结算完毕。<br />
        *准代理200可申请提现，专业代理500可申请提现。
      </div>
      <!-- <div
        class="alert alert-danger alert-dismissible"
        style="margin-top: 10px;background-color: #3c8dbc !important;border-color:#3c8dbc !important;"
      >
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <strong style="font-size:18px;"
          >虚拟币下发，提现！<span style="font-size:14px;font-weight:normal;"
            >为什么要用虚拟币下发</span
          ></strong
        ><br />
        *多级洗白，确保您的资金绝对安全。<br />
        *提现便捷，告别买卡烦恼。<br />
        *随时可提，到账时间22：00到次日上午10：00<br />
        <a target="_blank" href="http://usdt.hxcdr.com">点击查看提现流程</a>
      </div> -->
      <ol class="breadcrumb">
        <li>
          <a href="index.aspx"><i class="fa fa-home"></i>桌面</a>
        </li>
        <li><a href="check.aspx">结账记录</a></li>
      </ol>
    </section>
    <section class="content">
      <div class="nav-tabs-custom" style="position: relative;">
        <ul class="nav nav-tabs">
          <li class="active"><a href="#">结账记录</a></li>
        </ul>
        <div class="tab-content">
          <span
            style="position: absolute; top: 13px; right: 105px; font-weight: bold; color: #F00;"
            id="UnDrowCommision"
          ></span>
          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            data-target="#modal"
            style="position: absolute; top: 9px; right: 15px;"
            @click="refund"
          >
            我要结帐
          </button>
          <div class="box box-danger">
            <div class="box-body table-responsive no-padding">
              <!--<table id="drowList" class="table table-hover">
                <thead>
                  <tr>
                    <th>订单编号</th>
                    <th>总提成</th>
                    <th>个人提成</th>
                    <th>团队提成</th>
                    <th>申请状态</th>
                    <th>申请时间</th>
                    <th>计算截止</th>
                    <th>处理时间</th>
                    <th>备注</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>-->
              <b-table striped hover :items="refundOrderList" :fields="fields">
                <template v-slot:cell(payTime)="data">
                  {{data.item.payTime === null? '未处理' : data.item.payTime }}
                </template>
                <template v-slot:cell(orderStatus)="data">
                  {{
                      data.item.orderStatus === 1? '待处理' :
                      data.item.orderStatus === 3? '提现成功' :
                      data.item.orderStatus === 4? '管理员已驳回' : ''
                  }}
                </template>
                <template v-slot:cell(operator)="data">
                  <b-button @click="continueRefund(data.item.id)" v-if="data.item.orderStatus === 4" variant="primary">再次提交</b-button>
                  <span v-else-if="data.item.orderStatus === 1">等待管理员审核</span>
                  <span v-else-if="data.item.orderStatus === 3">提现成功</span>
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
  created() {
    this.getRefundOrderList();
  },
  data() {
    return {
      refundOrderList: [],
      pageNum: 1,
      pageSize: 30,
      total: 0,
      fields: [
        {
          key: 'tradeNo',
          label: '订单编号',
          sortable: false
        },
        {
          key: 'orderAmount',
          label: '提现金额',
          sortable: false
        },
        {
          key: 'orderStatus',
          label: '申请状态',
          sortable: false,
        },
        {
          key: 'reason',
          label: '理由',
          sortable: false,
        },
        {
          key: 'createTime',
          label: '申请时间',
          sortable: false,
        },
        {
          key: 'payTime',
          label: '处理时间',
          sortable: false,
        },
        {
          key: 'operator',
          label: '操作',
          sortable: false,
        }
      ]
    };
  },
  methods: {
    async continueRefund(orderId) {
      const { data: res } = await this.$http.post('order/refund/continue', { orderId });
      if(res.status === 1) {
        this.$message.success('再次发起成功');
        await this.getRefundOrderList();
      }
    },
    async refund() {
      const { data: res } = await this.$http.post('order/refund');
      if(res.status === 1) {
        this.$message.success('发起提现成功');
        await this.getRefundOrderList();
      }
    },
    async getRefundOrderList() {
      const { data: res } = await this.$http.get('order/get/refund', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      });
      if(res.status === 1) {
        this.refundOrderList = res.data.rows.reduce((total, item)=>{
          let obj = Object.assign(item, {reason: item.walletlogs.length>0? item.walletlogs[0].logContent: '无'})
          total.push(obj)
          return total
        }, [])
        this.total = res.data.count;
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
