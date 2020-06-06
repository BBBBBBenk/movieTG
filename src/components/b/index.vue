<template>
  <div class="b">
    <section class="content-header">
      <h1>账号资料</h1>

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
        *交易采用最高加密技术，安全无忧。<br />
        *请正确填写您的“汇款信息”，才能顺利给您汇款！<br />
        *一旦保存收款信息，无法修改！需要修改，请联系在线商务！！
      </div>

      <ol class="breadcrumb">
        <li>
          <a href="/index.aspx"><i class="fa fa-home"></i>桌面</a>
        </li>
        <li><a href="/user.aspx">账号资料</a></li>
      </ol>
    </section>
    <section class="content">
        <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
                <li :class="`${tag_index===1? 'active': ''}`"><a href="javascript:void(0)" @click="tag_index=1" data-toggle="tab">账号资料</a></li>
                <li :class="`${tag_index===2? 'active': ''}`"><a href="javascript:void(0)" @click="tag_index=2" data-toggle="tab">汇款信息</a></li>
            </ul>
            <div class="tab-content">
                <div :class="`${tag_index===1? 'active': ''} tab-pane`" v-if="tag_index===1" id="account_info">
                    <form class="form-horizontal" method="post" >
                        <div class="box-body no-padding">
                            <table class="table borderless" style="width:initial; max-width:initial;">
                                <tbody>
                                    <tr>
                                        <td>代理ID：</td>
                                        <td v-cloak>{{UserInfo.UserID}} </td>
                                    </tr>
                                    <tr>
                                        <td >账号：</td>
                                        <td>
                                            <input v-if="uinfo.Email==null||uinfo.Email==''" type="text" name="account" id="account" value="" size="30">
                                            <span v-else v-cloak>{{UserInfo.Email+((UserInfo.Phone==""||UserInfo.Phone==null)?"":"("+UserInfo.Phone+")")}}</span>
                                        </td>
                                    </tr>
                                    <tr v-if="uinfo.Email==null||uinfo.Email==''">
                                        <td>验证码：</td>
                                        <td>
                                            <input type="text" name="code" id="code" size="6" style="width: 150px;"> 
                                            <button type="button" id="codesend" onclick="sendcode()" class="btn btn-success" style="height: 25px;line-height: 10px;margin-bottom: 3px;margin-left: 8px;">发送</button>
                                        </td>
                                    </tr>
                                    <tr v-if="uinfo.Email==null||uinfo.Email==''">
                                        <td>密码：</td>
                                        <td>
                                            <input type="password" name="password" id="password" value="" size="30">
                                        </td>
                                    </tr>
                                    <tr v-if="uinfo.Email==null||uinfo.Email==''">
                                        <td>确认密码：</td>
                                        <td>
                                            <input type="password" name="pass_confirm" id="pass_confirm" value="" size="30">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>代理类型：</td>
                                        <td id="agent_levelname" v-cloak>{{uinfo.LevelName}}</td>
                                    </tr>
                                    <tr>
                                        <td>加入时间：</td>
                                        <td id="agent_addtime" v-cloak>{{uinfo.AddTime}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="box-footer" v-if="UserInfo.Email==null||UserInfo.Email==''">
                                <button type="button" class="btn btn-success pull-left" onclick="bindemail()">保存</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div  :class="`${tag_index===2? 'active': ''} tab-pane`" v-else id="paymeny_info">
                    <form class="form-horizontal" method="post" >
                        <div class="box-body">
                            <div class="form-group">
                                <label for="b_name" class="col-sm-2 control-label">户名</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="UserName" name="UserName" placeholder="如：张三"  />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="method" class="col-sm-2 control-label">选择金流</label>
                                <div class="col-sm-6">
                                    <select class="form-control" id="method" name="method">
                                        <option value="0">银行</option>
                                        <option value="1">支付宝</option>
                                        <option value="2">比特币地址</option>
                                    </select>
                                </div>
                            </div>

                            <div id="b_bank" class="form-group">
                                <label for="bank" class="col-sm-2 control-label">银行名称</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="bank" name="bank" placeholder="如：中国建设银行" />
                                </div>
                            </div>

                            <div id="b_branch" class="form-group">
                                <label for="branch" class="col-sm-2 control-label">分行名称</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="branch" name="branch" placeholder="如：北京朝阳北路支行" />
                                </div>
                            </div>

                            <div id="b_b_account" class="form-group">
                                <label for="account" class="col-sm-2 control-label">银行账号</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="b_account" name="b_account" placeholder="如：6227033012341234123" />
                                </div>
                            </div>

                            <div id="b_ali_pay" class="form-group" style="display: none;">
                                <label for="account" class="col-sm-2 control-label">支付宝账号</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="ali_pay" name="ali_pay" placeholder="如：xxxxxx@qq.com或13888888888" />
                                </div>
                            </div>
                            <div id="b_coin_pay" class="form-group" style="display: none;">
                                <label for="account" class="col-sm-2 control-label">比特币地址</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="coin" name="coin" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div class="box-footer">
                            <button type="button" id="bankbtn" class="btn btn-success pull-left" onclick="UpdateAgentBank()">保存</button>
                        </div>
                    </form>
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
      UserInfo: {},
      uinfo: {},
      tag_index: 1,
    };
  }
};
</script>
<style lang="less" scoped></style>
