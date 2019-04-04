var isShowLoginBox = false;

var zhichi_str = `  <div class="zhichi-position-grid">
<div class="zhichi-content-gird">
  <div class="server-side-btn">
    <img src="./static/images/zhichi-phone.svg" alt="电话" />
    <button class="zhi-pte-phone">电话沟通</button>
    <div class="zhichi-side-container">
      热线：400-101-9155
    </div>
  </div>
  <div class="server-side-btn zhiCustomBtn">
    <img src="./static/images/zhichi-message.svg" alt="信息" />
    <button class="zhichi-pte-server">在线咨询</button>
    <div class="zhichi-side-container zhiCustomBtn">
      联系大班长
    </div>
  </div>
  <div class="server-side-btn">
    <img src="./static/images/zhichi-data.svg" alt="电话" />
    <button id="btn">免费资料</button>
    <div class="zhichi-side-container">
      <p style="text-align: center;padding-bottom: 10px;">扫二维码领取资料</p>
      <img src="./static/images/unified-baidu-statistics.jpg" />
    </div>
  </div>
  <!-- <div class="server-side-btn">
    <img src="./static/images/zhichi-TV.svg" alt="tryListen" />
    <button>申请试听</button>
  </div> -->
</div>
</div>`;



$(function () {
  var isMobile = window.navigator.userAgent.indexOf("Mobile") >= 0;
  if (!isMobile) {
    console.log(isMobile);
    $('body').append(`` + zhichi_str + ``);
  }
  layui.use(['carousel', 'form'], function(){
    var carousel = layui.carousel

    //设定各种参数
    

    carousel.render({
      elem: '#test3'
      ,width: '100%'
      ,height: '740px'
      ,interval: 5000
    });


  })

  $('.loginWebSite').click(function(){
    console.log('dsadasd');
    loginWebSite()
  })



  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    console.log('微信浏览器');
  } else {
    isChrome();
  }

  $('#app').on('click', '.navbar-toggle.close-toggle', function () {
    $('#J-navbar-collapse').hide();
  })

  $('#app').on('click', '.navbar-toggle.collapsed', function () {
    $('#J-navbar-collapse').show();
  })

  $('#app').on('click', '.examDiscount', function () {
    var t = null;
    clearTimeout(t);
    $('.Discount-warn-box').animate({
      opacity: 1,
      zIndex: 9999
    }, 500);
    t = setTimeout(function () {
      $('.Discount-warn-box').animate({
        opacity: 0,
        zIndex: -1
      })
    }, 1500);
  })

  // $('#app').on('click', '.Developmenting', function () {
  //   var t = null;
  //   clearTimeout(t);
  //   $('.warn-box').animate({
  //     opacity: 1,
  //     zIndex: 9999
  //   }, 500);
  //   t = setTimeout(function () {
  //     $('.warn-box').animate({
  //       opacity: 0,
  //       zIndex: -1
  //     })
  //   }, 1500);
  // })


  //点击课程咨询  弹出会话窗口
  $('body').on('click', '.meiqia-dig tr td:last-child', function () {
    $('#MEIQIA-PANEL-HOLDER').css({
      'visibility': 'visible',
      'z-index': '2147483647'
    });
    $('#MEIQIA-IFRAME').show();
  })


  //点击关注公众号
  $('#app').on('click', '.follow-Public-number', function () {
    $('.erweima-download-modal-wrapper .download-title').html('<p>扫描二维码添加pte大班长微信</p> <p>立即免费领取pte全套备考资料</p>');
    $('.erweima-download-modal-wrapper .download-code').attr('src', './static/images/unified-baidu-statistics.jpg');
    $('.erweima-J-down-load-app').show();
  });

  //点击关注小程序
  $('#app').on('click', '.follow-Small-program', function () {
    $('.erweima-download-modal-wrapper .download-title').html('<p>扫描二维码添加pte大班长微信</p> <p>回复“加群”立即加入pte备考交流群</p>');
    $('.erweima-download-modal-wrapper .download-code').attr('src', './static/images/unified-baidu-statistics.jpg');
    $('.erweima-J-down-load-app').show();
  });



  //隐藏关注的框
  $('#app').on('click', '.erweima-download-modal-bg', function () {
    $('.erweima-J-down-load-app').hide();
  })


  //点击联系我们
  $('#app').on('click', '#showPCall', function () {
    $('.erweima-download-modal-wrapper .download-title').html('关注大班长微信号，获取更多新鲜资讯');
    $('.erweima-download-modal-wrapper .download-code').attr('src', './static/images/pteblacktech5.png');
    $('.erweima-J-down-load-app').show();
  });

  $('#app').on('click', '#is_chrome .chrome-close', function () {
    $('#is_chrome').remove();
  });

});

function isChrome() {
  $('#is_chrome').remove();
  var ua = navigator.userAgent.toLocaleLowerCase();
  var browserType = null;
  if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
    browserType = "IE";
    browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
  } else if (ua.match(/firefox/) != null) {
    browserType = "火狐";
  } else if (ua.match(/ubrowser/) != null) {
    browserType = "UC";
  } else if (ua.match(/opera/) != null) {
    browserType = "欧朋";
  } else if (ua.match(/bidubrowser/) != null) {
    browserType = "百度";
  } else if (ua.match(/metasr/) != null) {
    browserType = "搜狗";
  } else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
    browserType = "QQ";
  } else if (ua.match(/maxthon/) != null) {
    browserType = "遨游";
  } else if (ua.match(/LBBROWSER/) != null) {
    browserType = "猎豹";
  } else if (ua.match(/explorer/) != null) {
    browserType = "混合游览器";
  } else if (ua.match(/chrome/) != null) {
    var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");

    function _mime(option, value) {
      var mimeTypes = navigator.mimeTypes;
      for (var mt in mimeTypes) {
        if (mimeTypes[mt][option] == value) {
          return true;
        }
      }
      return false;
    }
    if (is360) {
      browserType = '360';
    } else {}
  } else if (ua.match(/safari/) != null) {
    browserType = "Safari";
  }


  function getChromeVersion() {
    var arr = navigator.userAgent.split(' ');
    var chromeVersion = '';
    for (var i = 0; i < arr.length; i++) {
      if (/chrome/i.test(arr[i]))
        chromeVersion = arr[i]
    }
    if (chromeVersion && browserType !== '360') {
      return Number(chromeVersion.split('/')[1].split('.')[0]);
    } else {
      return false;
    }
  }
  if (getChromeVersion()) {
    var version = getChromeVersion();
    if (version < 54) {
      alert('您使用的谷歌浏览器版本过低，为了更好地体验请将浏览器升级到最新版本！');
    }
  }

  if (browserType) {
    $('#app').prepend(`<div id="is_chrome">
    <div class="ischrome-grid">
      <span class="chrome-info">!</span><a href="https://www.google.cn/chrome/" target="_black"><p class="chrome-warn">点击使用最新版谷歌浏览器 体验网站全部功能</p></a>
    </div>
    <div class="chrome-close disabled-choosed">+</div>
  </div>
</div>`);
  }
}



function loginWebSite(){
  $('#login_box.login-J-down-load-app').show();
  $.ajax({
    type:'GET',
    url:"https://stg-pteppp.leanapp.cn/weblogin/getqr/",
    data:{},
    async:true,
    success:function(res){
        $('.login-download-modal-wrapper .login-content .erweima').attr('src',res.qr);
        that.obtainLoginState(res.session);
    },
    error:function(error){
        console.log(error);
    }
})
}

function obtainLoginState(id){
  var timer = null;
  clearTimeout(timer);
  let that = this;
  $.ajax({
      type:"Get",
      url:"https://stg-pteppp.leanapp.cn/weblogin/update/"+id+"",
      data:{},
      async:true,
      success:function(res){
          let state = res.state;
          console.log(state);
          if(state ==='normal'){
              if(isShowLoginBox){
                  timer = setTimeout(() => {
                  that.obtainLoginState(id);
                  },1000);
              }
          }else if(state ==='scan'){
              if(isShowLoginBox){
                  timer = setTimeout(() => {
                  that.obtainLoginState(id);
                  },1000);
              }
              $('.login-download-modal-wrapper .login-content .erweima').attr('src','./static/images/load.gif');
              that.loginState = '已扫码';
              that.isShowLoginState = true;
          }else if(state == 'auth'){
              that.loginState = '正在登录';
              that.userLogin(res)
          }else if(state == 'invalid'){
              that.loginState = '已失效';
          }
      },
      error:function(){
          that.loginState = '登录失败，请重试';
          that.isShowLoginState = true;
      }
  })
}

function userLogin(res){
  let that = this;
  try {
      let auth = res.auth
      this.onSession(res)
      .then(user => {
          // window.userJSON = JSON.parse(JSON.stringify(user))
          window.userJSON = user.toJSON();
          // commit to vuex
          this.$store.dispatch('user_login', window.userJSON)
          return this.LoginVerifyData()
      })
      .then(() =>{
          this.loginEvent()
      })
      .catch(err => {
          this.WarnError(err);
      })
  } catch (error) {
      this.WarnError(error);
  }
}