// pages/mine/personalInfo/personalInfo.js
const util = require("../../../utils/util.js");
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexArray: ["男", "女"],
    userInfo:{
      address:'',
      userName: "服务器获取",
      sexArray: ["男", "女"],
      sexIndex: 0,
      motto:'',
      personalHeadUrl: "https://upload.jianshu.io/users/upload_avatars/2135562/3976a3173aa7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserApi();

    // wx.getSetting({
    //   success: res => {
    //     console.log(res)
    //     if (!res.authSetting['scope.userLocation']){
    //       wx.showModal({
    //         title: '提示',
    //         content: '你没有授权获取地址位置，请去设置开启',
    //         success: res=>{
    //           if(res.confirm){
                
    //           }
    //         }
    //       })
    //     }
    //   },
    // })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
 

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 更换头像
   */
  changeHeadImageEvent: function (e) {
    let that = this;
    wx.chooseImage({
      count: 1,
      sourceType: ["album", "camera"],
      success: function (res) {

        var tempFilePath = res.tempFilePaths[0];
        that.setData({
          'userInfo.personalHeadUrl': tempFilePath
        })
      },
    })
  },

  nickNameChange: function (e) {
    this.setData({
      'userInfo.userName': e.detail.value,
    })
    //console.log("昵称发生变化: ", e.detail.value);
  },
  /*
  * 选择性别
  */
  bindSexPickerChange: function (e) {
    this.setData({
      'userInfo.sexIndex': e.detail.value,
    });
    console.log(e);
  },
  /*
  * 保存信息
  */
  formSubmit: function (e) {
    console.log('携带数据为：',e.detail.value);
    let params = {
      "clientId": "string",
      "param": {
        "address": "string",
        "headImgUrl": "string",
        "motto": "string",
        "nickName": "string",
        "phone": "string",
        "sex": "M:男",
        "userId": 0
      },
      "sign": "string",
      "timestamp": 0
    }

    util.xczBaseRequest({
      loadingText: '加载中...',
      contentType: '',
      url: 'v1/user/update',
      params: params,
      methods: 'post',
      success: res => {
        console.log(res, '--------')
        // this.setData({
        //   'userInfo.userName': res.data.nickName,
        //   'userInfo.personalHeadUrl': res.data.headImgUrl,
        //   'userInfo.sexIndex': res.data.sex === 'M' ? 0 : 1,
        //   'userInfo.motto': res.data.motto,
        //   'userInfo.address': res.data.address

        // })
      },
      fail: err => {
        // console.log(err)
      }
    })
  },
  // getApi
  getUserApi() {
    let that = this
    let params = {
      "clientId": app.globalData.clientId,
      "param": {
        "address": "string",
        "headImgUrl": "string",
        "motto": "string",
        "nickName": "string",
        "phone": "string",
        "sex": "M:男",
        "userId": app.globalData.userId,
      },
      "sign": "string",
      "timestamp": 0
    }

    util.xczBaseRequest({
      loadingText: '加载中...',
      contentType: '',
      url: 'v1/user/query',
      params: params,
      methods: 'post',
      success: res => {
        console.log(res,'--------')
        this.setData({
          'userInfo.userName': res.data.nickName,
          'userInfo.personalHeadUrl':res.data.headImgUrl,
          'userInfo.sexIndex': res.data.sex==='M'?0:1,
          'userInfo.motto':res.data.motto,
          'userInfo.address': res.data.address

        })
      },
      fail: err => {
        // console.log(err)
      }
    })
  },
})