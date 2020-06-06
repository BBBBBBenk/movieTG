<template>
  <div class="a">
    <section class="content-header">
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
        C、5月31日1点：虚拟币下发前期暂免手续费！！！<br />
        B、4月22日13点：推广链接3和4已经更换，请代理们及时更换，以免造成损失！！！<br />
        A、4月17日21点：由于代理老板们多次反馈数据个人量显示过大，现修改为显示2周统计数据，不是删除了数据只是总体数据做了隐藏，并不影响后续会员充值返现。如发现数据不对请及时联系在线商务帮您查询！<br />
        <br />------------商务合作请点击<span
          onclick="GoToChat();"
          style="cursor: pointer; color: rgb(0, 255, 255);"
          >【在线商务】</span
        >，代理唯一投诉邮箱：hanxiucao6@gmail.com，含羞草，感谢一路有你！------------
      </div>
    </section>
    <section class="content-header">
      <h1>今日统计<small>实时统计</small></h1>
    </section>
    <section class="content-header">
      <div class="row">
        <div class="col-md-4">
          <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user-2">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-yellow">
              <div class="widget-user-image">
                <i
                  class="fa fa-bar-chart fa-4x"
                  style="width: 65px; height: auto; float: left; display: block;"
                ></i>
              </div>
              <!-- /.widget-user-image -->
              <h3 class="widget-user-username">今日利润</h3>
              <h5 class="widget-user-desc">Today Profit</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li>
                  <a href="#"
                    >总盈利
                    <span class="pull-right text-green" id="todaychargesum"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >首充盈利
                    <span class="pull-right text-aqua" id="todayfirstcharge"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >续费盈利
                    <span class="pull-right" id="todaycharge">￥0</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理提成
                    <span class="pull-right" id="todaychildcharge">￥0</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- /.widget-user -->
        </div>
        <!-- /.col -->
        <div class="col-md-4">
          <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user-2">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-aqua-active">
              <div class="widget-user-image">
                <i
                  class="fa fa-send fa-4x"
                  style="width: 65px; height: auto; float: left; display: block;"
                ></i>
              </div>
              <!-- /.widget-user-image -->
              <h3 class="widget-user-username">今日业绩</h3>
              <h5 class="widget-user-desc">Today Performance</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li>
                  <a href="#"
                    >总业绩
                    <span class="pull-right text-green" id="todayperfosum"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >个人业绩
                    <span class="pull-right text-green" id="todaysingleperfosum"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理业绩
                    <span class="pull-right text-green" id="todaychildperfosum"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理提成比<span
                      class="pull-right text-green"
                      id="todaychildrate"
                      >0%</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- /.widget-user -->
        </div>

        <!-- /.col -->
        <div class="col-md-4">
          <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user-2">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-green">
              <div class="widget-user-image">
                <i
                  class="fa fa-pie-chart fa-4x"
                  style="width: 65px; height: auto; float: left; display: block;"
                ></i>
              </div>
              <!-- /.widget-user-image -->
              <h3 class="widget-user-username">今日转化</h3>
              <h5 class="widget-user-desc">Today Transformation</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li>
                  <a href="#"
                    >注册人数<span
                      class="pull-right text-green"
                      id="todayusercount"
                      >0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >充值笔数<span
                      class="pull-right text-green"
                      id="todatvipcount"
                      >0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >首充笔数
                    <span
                      class="pull-right text-green"
                      id="todayfirstchargecount"
                      >0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >续费笔数<span
                      class="pull-right text-green"
                      id="todaychargecount"
                      >0</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- /.widget-user -->
        </div>
        <!-- /.col -->
      </div>
    </section>
    <section class="content-header">
      <h1>两周统计 <small>14天内统计</small></h1>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-md-4">
          <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user-2">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-yellow">
              <div class="widget-user-image">
                <i
                  class="fa fa-bar-chart fa-4x"
                  style="width: 65px; height: auto; float: left; display: block;"
                ></i>
              </div>
              <!-- /.widget-user-image -->
              <h3 class="widget-user-username">利润统计</h3>
              <h5 class="widget-user-desc">Profit Statistics</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li>
                  <a href="#"
                    >盈利总计
                    <span class="pull-right text-green" id="totalchargesum"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >首充总盈利
                    <span class="pull-right text-aqua" id="totalfirstcharge"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >续费总盈利
                    <span class="pull-right" id="totalcharge">￥0</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理总提成
                    <span class="pull-right text-green" id="totalchildcharge"
                      >￥0</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- /.widget-user -->
        </div>
        <!-- /.col -->
        <div class="col-md-4">
          <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user-2">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-aqua-active">
              <div class="widget-user-image">
                <i
                  class="fa fa-send fa-4x"
                  style="width: 65px; height: auto; float: left; display: block;"
                ></i>
              </div>
              <!-- /.widget-user-image -->
              <h3 class="widget-user-username">业绩统计</h3>
              <h5 class="widget-user-desc">Performance Statistics</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li>
                  <a href="#"
                    >业绩总计<span
                      class="pull-right text-green"
                      id="totalperfosum"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >个人总业绩<span
                      class="pull-right text-green"
                      id="totalsingleperfosum"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理总业绩<span
                      class="pull-right text-green"
                      id="totalchildperfosum"
                      >￥0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理总数<span
                      class="pull-right text-green"
                      id="totalchildcount"
                      >0</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- /.widget-user -->
        </div>
        <!-- /.col -->
        <div class="col-md-4">
          <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user-2">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-green">
              <div class="widget-user-image">
                <i
                  class="fa fa-pie-chart fa-4x"
                  style="width: 65px; height: auto; float: left; display: block;"
                ></i>
              </div>
              <!-- /.widget-user-image -->
              <h3 class="widget-user-username">转化统计</h3>
              <h5 class="widget-user-desc">Transformation Statistics</h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li>
                  <a href="#"
                    >注册总人数<span
                      class="pull-right text-green"
                      id="totalusercount"
                      >0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >Vip会员总数<span
                      class="pull-right text-green"
                      id="totalvipcount"
                      >0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >首充总笔数<span
                      class="pull-right text-green"
                      id="totalfirstchargecount"
                      >0</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >续费总笔数<span
                      class="pull-right text-green"
                      id="totalchargecount"
                      >0</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- /.widget-user -->
        </div>
        <!-- /.col -->
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
<style lang="less" scoped>

ul {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  li {
    width: 100%;
    a {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    }
  }
}
.content-header {
  position: relative;
  padding: 15px 15px 0 15px;
  .box-widget {
    border: none;
    position: relative;
  }
  .box {
    border-radius: 3px;
    background: #ffffff;
    border-top: 3px solid #d2d6de;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    .widget-user-2 .widget-user-header {
      padding: 20px;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      //   .widget-user-2 .widget-user-username {
      //     margin-top: 5px;
      //     margin-bottom: 5px;
      //     font-size: 25px;
      //     font-weight: 300;
      //   }
    }
  }
}
</style>
