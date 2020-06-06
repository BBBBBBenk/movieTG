<template>
  <div class="c">
    <section class="content-header">
      <h1>专属推广链接</h1>

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
        *点击相应链接，即可自动复制推广链接。<br />
        *“微信和QQ”推广链接，请点击专属推广链接。<br />
        *如果需要单独的安卓APK包，请联系商务开通。
      </div>

      <ol class="breadcrumb">
        <li>
          <a href="/Index/Desktop"><i class="fa fa-home"></i>桌面</a>
        </li>
        <li><a href="/Marketing/List">专属推广链接</a></li>
      </ol>
    </section>
    <section class="content" id="app">
      <div class="box box-danger">
        <div class="box-header">
          <h3 class="box-title">推广链接</h3>
        </div>
        <div class="box-body table-responsive no-padding">
          <table class="table">
            <tbody>
              <tr>
                <th style="width: 10px">#</th>
                <th>链接类型</th>
                <th>连接地址</th>
                <th>二维码</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>
                  网站<small
                    >（<i class="fa fa-weixin"></i>&nbsp;<i class="fa fa-qq"></i
                    >&nbsp;专属推广）</small
                  >
                </td>
                <td>
                  <a href="javascript:;" onclick="copyUrl(this)">{{
                    shortUrl.home
                  }}</a>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn bg-purple btn-sm"
                    :onclick="'ShowQrcode(vm.shortUrl.home,\'link_web_bg\')'"
                  >
                    <i class="fa fa-weixin"></i>&nbsp;&nbsp;二维码
                  </button>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>
                  APP下载<small
                    >（<i class="fa fa-weixin"></i>&nbsp;<i class="fa fa-qq"></i
                    >&nbsp;专属推广）</small
                  >
                </td>
                <td>
                  <a href="javascript:;" onclick="copyUrl(this)">{{
                    shortUrl.app
                  }}</a>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn bg-purple btn-sm"
                    :onclick="'ShowQrcode(vm.shortUrl.app,\'link_app_bg\')'"
                  >
                    <i class="fa fa-weixin"></i>&nbsp;&nbsp;二维码
                  </button>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>网站<small>（论坛、其他）</small></td>
                <td>
                  <a href="javascript:;" onclick="copyUrl(this)">{{
                    shortUrl.agent
                  }}</a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>4.</td>
                <td>APP下载<small>（论坛、其他）</small></td>
                <td>
                  <a href="javascript:;" onclick="copyUrl(this)">{{
                    shortUrl.agentapp
                  }}</a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>5.</td>
                <td>安卓独享APK包</td>
                <td>
                  <a href="javascript:;" onclick="copyUrl(this)">{{
                    shortUrl.package == "" ? "未开通" : shortUrl.package
                  }}</a>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shortUrl: {}
    };
  }
};
</script>
<style lang="less" scoped></style>
