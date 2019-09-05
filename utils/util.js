const config = require("config.js");

const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

//网络请求

//jsonRequest
function xczCommonLoadingRequest(url, params, success, fail) {
  xczBaseRequest("数据加载中...", 0, url, params, "POST", success, fail);
}
function xczCommonRequest(url, params, success, fail) {
  xczBaseRequest("", 0, url, params, "POST", success, fail);
}
//更新数据
function xczUpdateRequest(url, params, success, fail) {
  xczBaseRequest("正在保存", 1, params, "POST", success, fail);
}

//BaseRequest
function xczBaseRequest({
  loadingText,
  contentType,
  url,
  params,
  methods,
  success,
  fail
}) {
  if (loadingText.length > 0) {
    wx.showToast({
      title: loadingText,
      icon: "loading"
    });
  }
  var contentStatus = [
    { "content-type": "application/json" },
    {
      "content-type": "multipart/form-data"
    },
    { "content-type": "application/x-www-form-urlencoded" }
  ];

  wx.request({
    url: config.BaseURL + url,
    data: params,
    header: contentStatus[contentType],
    method: methods,
    success: function(res) {
      // console.log(res)
      if (loadingText.length > 0) {
        wx.hideLoading();
      } else {
        wx.showLoading();
      }

      if (res.statusCode == 200) {
        success(res.data);
      } else {
        fail();
      }
    },

    //系统失败
    fail: function(res) {
      if (loadingText.length > 0) {
        wx.hideLoading();
      } else {
        wx.showLoading();
      }
      fail();
    }
  });
}

//模块导出
module.exports = {
  formatTime: formatTime,
  xczCommonLoadingRequest: xczCommonLoadingRequest,
  xczCommonRequest: xczCommonRequest,
  xczUpdateRequest: xczUpdateRequest,

  xczBaseRequest: xczBaseRequest
};
