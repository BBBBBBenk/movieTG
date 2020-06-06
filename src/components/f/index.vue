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
      <div
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
      </div>
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
            onclick="GetDrow()"
          >
            我要结帐
          </button>
          <div class="box box-danger">
            <div class="box-body table-responsive no-padding">
              <table id="drowList" class="table table-hover">
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
              </table>
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
    return {};
  }
};
</script>
<style lang="less" scoped></style>
