// pages/mine/mine.js
const util = require("../../utils/util.js");
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   

    this.getListApi()
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
    console.log(app.globalData)
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
  /*
  * 查看用户信息
  */
  goToPersonalDetail: function () {
    wx.navigateTo({
      url: '../mine/userdetail/home',
    })
  },

  goFollow(){
    wx.navigateTo({
      url: '../mine/follow/follow',
    })
  },

  goRate(){
    wx.navigateTo({
      url: '../mine/rate/rate',
    })
  },

  goLike(){
    wx.navigateTo({
      url: '../mine/like/like',
    })
  },

  goFans(){
    wx.navigateTo({
      url: '../mine/fans/fans',
    })
  },

  goSetting(){
    wx.openSetting({
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  },



  // getApi
  getListApi() {
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
    }

    util.xczBaseRequest({
      loadingText: '加载中...',
      contentType: '',
      url: 'v1/user/home',
      params: params,
      methods: 'post',
      success: res => {
        console.log(res)
        this.setData({
          userInfo: res.data
        })
      },
      fail: err => {
        // console.log(err)
      }
    })
  },
})