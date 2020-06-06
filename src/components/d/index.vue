<template>
  <div class="d">
    <form method="GET" name="frmSearch" id="frmSearch">
      <section
        class="content-header bg-gray-active responsive-lg"
        style="padding: 14px;"
      >
        <div class="row">
          <div class="col-xs-12" style="line-height: 27px;">
            <div style="float: left; padding-right: 15px; width: 270px;">
              <div class="input-group">
                <input
                  type="text"
                  name="starttime"
                  class="form-control input-sm"
                  id="starttime"
                  placeholder="起始日期"
                />
                <span class="input-group-addon">至</span>
                <input
                  type="text"
                  name="endtime"
                  class="form-control input-sm"
                  id="endtime"
                  placeholder="结束日期"
                />
              </div>
            </div>
            <div style="float: left;">
              <button
                type="button"
                class="btn btn-danger btn-sm"
                onclick="$('#frmSearch').submit();"
              >
                <i class="fa fa-search"></i>搜索
              </button>
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
              <table id="orderList" class="table table-striped text-nowrap">
                <thead>
                  <tr>
                    <th>子代理ID</th>
                    <th>昵称</th>
                    <th>代理等级</th>
                    <th>加入时间</th>
                    <th>业绩综合</th>
                  </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                  <tr>
                    <td><b>合计:</b></td>
                    <td colspan="3"></td>
                    <td><span id="sumPay" style="color: #32CD32;"></span></td>
                  </tr>
                </tfoot>
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
