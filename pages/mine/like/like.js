// pages/mine/like/like.js
var util = require('../../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {}
    ],
    pageIndex: 1,
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

  // getApi
  getListApi() {
    let that = this
    let params = {
      "clientId": app.globalData.clientId,
      "param": {
        "pageIndex": this.data.pageIndex,
        "pageSize": 10,
        userId: app.globalData.userId,
      },
    }

    util.xczBaseRequest({
      loadingText: '加载中...',
      contentType: '',
      url: 'v1/user/production/like/list',
      params: params,
      methods: 'post',
      success: res => {
        console.log(res)
        this.setData({
          list: res.data.likeDetails
        })
      },
      fail: err => {
        // console.log(err)
      }
    })
  },
})