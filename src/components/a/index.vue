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
        <div v-html="notice"> 

        </div>
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
                      >¥{{ personDetail.info.todaySelf.totalProxyProfit }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >首充盈利
                    <span class="pull-right text-aqua" id="todayfirstcharge"
                      >¥{{ personDetail.info.todaySelf.todayFirstChargeProfit }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >续费盈利
                    <span class="pull-right" id="todaycharge">¥{{ personDetail.info.todaySelf.todayContinueProfit }}</span></a
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
                      >¥{{ personDetail.data.profit || 0 }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >个人业绩
                    <span class="pull-right text-green" id="todaysingleperfosum"
                      >¥{{ personDetail.data.profit || 0 }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理业绩
                    <span class="pull-right text-green" id="todaychildperfosum"
                      >¥{{ personDetail.info.today.totalProxyProfit }}</span
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
                      >{{ personDetail.info.today.todayRegister }}人</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >充值笔数<span
                      class="pull-right text-green"
                      id="todatvipcount"
                      >{{ personDetail.info.today.todayOrderCount }}笔</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >首充笔数
                    <span
                      class="pull-right text-green"
                      id="todayfirstchargecount"
                      >{{ personDetail.info.today.todayIsFirstChargeNum }}笔</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >续费笔数<span
                      class="pull-right text-green"
                      id="todaychargecount"
                      >{{ personDetail.info.today.todayContinueChargeNum }}笔</span
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
                      >¥{{ personDetail.info.halfMonthSelf.totalProxyProfit }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >首充总盈利
                    <span class="pull-right text-aqua" id="totalfirstcharge"
                      >¥{{ personDetail.info.halfMonthSelf.totalFirstChargeProfit }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >续费总盈利
                    <span class="pull-right" id="totalcharge">¥{{ personDetail.info.halfMonthSelf.totalContinueProfit }}</span></a
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
                      >¥{{ personDetail.info.halfMonthAgo.totalProxyProfit }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >个人总业绩<span
                      class="pull-right text-green"
                      id="totalsingleperfosum"
                      >¥{{ personDetail.data.profit || 0 }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理总业绩<span
                      class="pull-right text-green"
                      id="totalchildperfosum"
                      >¥{{ personDetail.info.halfMonthAgo.totalProxyProfit }}</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >子代理总数<span
                      class="pull-right text-green"
                      id="totalchildcount"
                      >{{ personDetail.info.halfMonthAgo.totalProxyNumber }}人</span
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
                      >{{ personDetail.info.halfMonthAgo.halfMonthAgoRegister }}人</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >Vip会员总数<span
                      class="pull-right text-green"
                      id="totalvipcount"
                      >{{ personDetail.info.halfMonthAgo.totalOpenVip }}人</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >首充总笔数<span
                      class="pull-right text-green"
                      id="totalfirstchargecount"
                      >{{ personDetail.info.halfMonthAgo.halfMonthAgoIsFirstChargeNum }}笔</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    >续费总笔数<span
                      class="pull-right text-green"
                      id="totalchargecount"
                      >{{ personDetail.info.halfMonthAgo.halfMonthAgoContinueChargeNum }}笔</span
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
    return {
      notice: '',
      personDetail: {
        data: {},
        info: {
          todaySelf: {
            totalProxyProfit: 0,
            todayContinueProfit: 0,
            todayFirstChargeProfit: 0
          },
          halfMonthSelf: {
            totalProxyProfit: 0,
            totalContinueProfit: 0,
            totalFirstChargeProfit: 0
          },
          today: {
            totalProxyProfit: 0,
            totalRegister: 0,
            todayOrderCount: 0,
          },
          halfMonthAgo: {
            totalProxyProfit: 0,
            totalRegister: 0,
            halfMonthAgoOrderCount: 0
          }
        },
        currentRow: {},
      }
    };
  },
  created() {
    this.showDetail();
    this.getNotice()
  },
  methods: {
    async getNotice() {
      let { data: res } = await this.$http.get('notice');
      this.notice = res.data[0].content
    },
    showDetail() {
      this.$http.get('user/get/self/proxy/profit').then(res => {
        this.personDetail.data = res.data.data;
        let today = {
          totalProxyProfit: 0,
          todayRegister: res.data.data.todayRegister[0].totalRegister,
          todayOrderCount: 0,
          todayIsFirstChargeNum: 0,
          todayContinueChargeNum: 0,
          totalProxyNumber: 0,
          totalOpenVip: 0,
        };
        let halfMonthAgo = {
          totalProxyProfit: 0,
          halfMonthAgoRegister: res.data.data.halfMonthAgoRegister[0].totalRegister,
          halfMonthAgoOrderCount: 0,
          halfMonthAgoIsFirstChargeNum: 0,
          halfMonthAgoContinueChargeNum: 0,
          totalProxyNumber: 0,
          totalOpenVip: 0,
        }

        /* 今日自己的利润 */
        this.personDetail.data.todaySelf.wallet.walletlogs.map(proxyUserWalletLog => {
          this.personDetail.info.todaySelf.totalProxyProfit += Number(proxyUserWalletLog.changeAmount);
          if(proxyUserWalletLog.otherType === 2){
            this.personDetail.info.todaySelf.todayContinueProfit += Number(proxyUserWalletLog.otherAmount);
          }
          if(proxyUserWalletLog.otherType === 1) {
            this.personDetail.info.todaySelf.todayFirstChargeProfit += Number(proxyUserWalletLog.otherAmount);
          }

        });

        /* 半个月来自己的利润 */
        this.personDetail.data.halfMonthSelf.wallet.walletlogs.map(proxyUserWalletLog => {
          this.personDetail.info.halfMonthSelf.totalProxyProfit += Number(proxyUserWalletLog.changeAmount);
          if(proxyUserWalletLog.otherType === 2){
            this.personDetail.info.halfMonthSelf.totalContinueProfit += Number(proxyUserWalletLog.otherAmount);
          }
          if(proxyUserWalletLog.otherType === 1) {
            this.personDetail.info.halfMonthSelf.totalFirstChargeProfit += Number(proxyUserWalletLog.otherAmount);
          }
        });

        today.totalProxyNumber = res.data.data.today.length;
        today.totalOpenVip = res.data.data.today.filter(proxyItem => proxyItem.proxy.VIPId !== null).length;
        halfMonthAgo.totalOpenVip = res.data.data.halfMonthAgo.filter(proxyItem => proxyItem.proxy.VIPId !== null).length;
        halfMonthAgo.totalProxyNumber = res.data.data.halfMonthAgo.length;

        /* 当天数据 */
        this.personDetail.data.today.map(proxyUser => {
          /* 充值订单 */
          today.todayOrderCount += Number(proxyUser.proxy.orders.filter(orderItem => orderItem.orderType === 1).length);
          /* 首充笔数 */
          today.todayIsFirstChargeNum += Number(proxyUser.proxy.orders.filter(orderItem => orderItem.isFirstCharge === 1).length);
          /* 续费订单 */
          today.todayContinueChargeNum += Number(proxyUser.proxy.orders.filter(orderItem => orderItem.orderType === 3).length);
          proxyUser.proxy.wallet.walletlogs.map(proxyUserWalletLog => {
            today.totalProxyProfit += Number(proxyUserWalletLog.changeAmount);
          });
        });
        /* 半月转化数据 */
        this.personDetail.data.halfMonthAgo.map(proxyUser => {
          halfMonthAgo.halfMonthAgoOrderCount += Number(proxyUser.proxy.orders.filter(orderItem => orderItem.orderType === 1).length);
          /* 首充笔数 */
          halfMonthAgo.halfMonthAgoIsFirstChargeNum += Number(proxyUser.proxy.orders.filter(orderItem => orderItem.isFirstCharge === 1).length);
          /* 续费订单 */
          halfMonthAgo.halfMonthAgoContinueChargeNum += Number(proxyUser.proxy.orders.filter(orderItem => orderItem.orderType === 3).length);
          proxyUser.proxy.wallet.walletlogs.map(proxyUserWalletLog => {
            halfMonthAgo.totalProxyProfit += Number(proxyUserWalletLog.changeAmount);
          });
        });
        this.personDetail.info.today = today;
        this.personDetail.info.halfMonthAgo = halfMonthAgo;
        console.log(this.personDetail.info);
      });

    }
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
