// pages/mine/fans/fans.js
var util = require('../../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {

      }
    ],
    state: true,
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

  //swich
  switchChange(e){
    console.log(e)
    let state = ''
    e.detail.value ? 
    state = '已关注' :
    state = '未关注' 
    this.setData({
      state: state
    })
  },
  //getApi
  getListApi() {
    let that = this
    let params = {
      "clientId": app.globalData.clientId,
      "param": {
        "cityName": app.globalData.cityName,
        "pageIndex": this.data.pageIndex,
        "pageSize": 10,
        "tag": this.data.tabVal,
      },
    }
    // console.log(app.globalData.userId)
    // /v1/user/follow/list/{ userId }
    util.xczBaseRequest({
      loadingText: '加载中...',
      contentType: '',
      url: 'v1/user/follow/list/' + app.globalData.userId,
      params: {},
      methods: 'post',
      success: res => {
        console.log(res)
        this.setData({
          list: res.data.myFollowers
        })
      },
      fail: err => {
        // console.log(err)
      }
    })
  },
})