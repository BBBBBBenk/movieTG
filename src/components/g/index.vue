<template>
  <div class="g">
    <section class="content-header">
      <h1>新手指南</h1>

      <ol class="breadcrumb">
        <li>
          <a href="index.aspx"><i class="fa fa-home"></i>桌面</a>
        </li>
        <li><a href="help.aspx">新手指南</a></li>
      </ol>
    </section>
    <section class="content">
      <div class="box box-danger">
        <div class="box-header">
          <h3
            class="box-title"
            style="font-weight: bold; font-size: 20px; color: #F00;"
          >
            关于推广
          </h3>
        </div>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info"
              >Q1: 加盟后如何运作</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span
                  >A：加盟入口有2个<br />&nbsp;&nbsp;&nbsp;&nbsp;1、注册会员即可成为准代理，准代理需要下载APP获取推广链接。<br />&nbsp;&nbsp;&nbsp;&nbsp;2、单独的代理注册入口。</span
                >
              </div>
              <div class="box-body">
                <span
                  >B：成为代理后，系统会自动分配给您编号与推广链接，当您通过此链接推广时，若有会员成功注册，该会员将归属到您的代理账户下，后续该会员的所有消费行为都算您的业绩，不会有所转移。</span
                >
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-2">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info"
              >Q2: 如何使用推广链接</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-2"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span>A：代理后台->推广链接，可以看到您的专属推广链接。</span>
              </div>
              <div class="box-body">
                <span
                  >B：推广链接分“普通链接”和“微信/QQ防封链接”，请根据实际需要来推广。</span
                >
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info"
              >Q3: 如何发展子代理？</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-3"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span
                  >A：所有通过您推广链接注册的用户，都可能成为您的子代理。</span
                >
              </div>
              <div class="box-body">
                <span>B：准代理，只要升级为专业代理，就算您的子代理。</span>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
        <div class="box-header">
          <h3
            class="box-title"
            style="font-weight: bold; font-size: 20px; color: #F00;"
          >
            关于等级
          </h3>
        </div>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordiona-1 variant="info"
              >Q1：代理等级有什么用处？</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordiona-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span
                  >A：通过您的推广链接注册并消费的用户，您将终身享有该用户的充值分成，根据实际提成系统自动评定不同代理等级，不同等级享用不同分成，等级越高分成越高。</span
                >
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-2">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordiona-2 variant="info"
              >Q2: 代理等级分成</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordiona-2"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span>A: 代理等级和分成规则见以下列表：</span>
                <table class="table table-striped text-nowrap">
                  <thead>
                    <tr>
                      <th></th>
                      <th>准代理</th>
                      <th>普通</th>
                      <th>高级</th>
                      <th>超级</th>
                      <th>至尊</th>
                      <th>特约</th>
                      <th style="color:#F00">金牌（特权）</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>首充</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>60%</td>
                      <td>70%</td>
                      <td>80%</td>
                      <td>80%</td>
                      <td style="color:#F00">待上线</td>
                    </tr>
                    <tr>
                      <td>续费</td>
                      <td>30%</td>
                      <td>30%</td>
                      <td>30%</td>
                      <td>30%</td>
                      <td>40%</td>
                      <td>60%</td>
                      <td style="color:#F00">待上线</td>
                    </tr>
                    <tr>
                      <td>缓存点</td>
                      <td>0%</td>
                      <td>30%</td>
                      <td>30%</td>
                      <td>30%</td>
                      <td>40%</td>
                      <td>50%</td>
                      <td style="color:#F00">待上线</td>
                    </tr>
                    <tr>
                      <td>G点视频</td>
                      <td>0%</td>
                      <td>5%</td>
                      <td>6%</td>
                      <td>7%</td>
                      <td>8%</td>
                      <td>10%</td>
                      <td style="color:#F00">待上线</td>
                    </tr>
                    <tr>
                      <td>团队</td>
                      <td>0%</td>
                      <td>3%</td>
                      <td>3%</td>
                      <td>3%</td>
                      <td>4%</td>
                      <td>5%</td>
                      <td style="color:#F00">待上线</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordiona-3 variant="info"
              >Q3: 代理等级评定</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordiona-3"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span
                  >A：按照每位代理区间提成额自动评定代理等级，区间提成见列表：</span
                >

                <table class="table table-striped text-nowrap">
                  <thead>
                    <tr>
                      <th>代理等级</th>
                      <th>区间提成</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>准代理</td>
                      <td>提成总额￥200</td>
                    </tr>
                    <tr>
                      <td>普通代理</td>
                      <td>￥0≤普通￥50</td>
                    </tr>
                    <tr>
                      <td>高级代理</td>
                      <td>￥50≤高级￥200</td>
                    </tr>
                    <tr>
                      <td>超级代理</td>
                      <td>￥200≤超级￥500</td>
                    </tr>
                    <tr>
                      <td>至尊代理</td>
                      <td>￥500≤至尊￥2000</td>
                    </tr>
                    <tr>
                      <td>特约代理</td>
                      <td>特约≥￥2000</td>
                    </tr>
                    <tr style="color: #F00;">
                      <td>金牌代理</td>
                      <td>待上线</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>

        <div class="box-header">
          <h3
            class="box-title"
            style="font-weight: bold; font-size: 20px; color: #F00;"
          >
            关于佣金
          </h3>
        </div>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordionb-1 variant="info"
              >Q1：业绩相关</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordionb-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span>A：代理后台首页可以实时查看目前业绩状态。</span>
              </div>
              <div class="box-body">
                <span>B：业绩报表可以查看具体销售业绩。</span>
              </div>
              <div class="box-body">
                <span>C：业绩=个人业绩+团队业绩。</span>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-2">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordionb-2 variant="info"
              >Q2: 可以领取多少佣金？如何领取佣金？</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordionb-2"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span>A：请务必正确填写账户资料汇款信息，以便提款顺利。</span>
              </div>
              <div class="box-body">
                <span
                  >B：准代理200，专业代理500，达到额度可实时提现，每天提现1次。</span
                >
              </div>
              <div class="box-body">
                <span
                  >C：佣金=个人业绩提成+团队业绩提成（子代理升级为专业代理以后，之前的销售额会一起算到您的团队业绩）。</span
                >
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordionb-3 variant="info"
              >Q3: 提现金额不对，或者账号不存在？</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordionb-3"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <div class="box-body">
                <span
                  >A：请参照佣金规则来比对，有疑问联系<span
                    onclick="GoToChat();"
                    style="cursor: pointer; color: #f00;"
                    >【在线商务】</span
                  >。</span
                >
              </div>
              <div class="box-body">
                <span
                  >B：为了您的安全，系统不定时清理已提现数据，长期没有业绩可能会注销您的代理账号。如果需要继续推广，可以重新注册账号。</span
                >
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
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
