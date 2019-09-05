// pages/rank/rank.js
var util = require('../../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    span: false,
    time: '',
    rank: 'NO1',
    requestUrl: '',
    city: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(options)
    
    setInterval(
      function(){
        var time = util.formatTime(new Date());
        // 再通过setData更改Page()里面的data，动态更新页面的数据
        that.setData({
          time: time
        });
      },1000);

    this.swichTbas()
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

  // 切换tabs
  swichTbas() {
    this.data.span = !this.data.span
    this.data.span ?
      // 城市
      this.data.requestUrl = 'v1/charts/city/query' :
      // 同城
      this.data.requestUrl = 'v1/charts/intra-city/query'

    console.log(this.data.requestUrl)

    this.getCityApi()
    this.setData({
      span: this.data.span,
      requestUrl: this.data.requestUrl,
    })
  },

  getCityApi() {
    let that = this
    let params = {
      "clientId": app.globalData.clientId,
      "param": {
        "cityName": app.globalData.cityName,
        "pageIndex": 1,
        "pageSize": 10,
        "userId": app.globalData.userId,
        "year": new Date().getFullYear(),
      }
    }

    util.xczBaseRequest({
      loadingText: '加载中...',
      contentType: '',
      url: that.data.requestUrl,
      params: params,
      methods: 'post',
      success: res => {
        console.log(res)
        this.setData({
          city: res.data.cityChartsDetails
          // lastWeek: res.data.lastWeekCharts,
          // myWeek: res.data.myWeekChart,
          // week: res.data.weekCharts,
        })
      },
      fail: err => {
        // console.log(err)
      }
    })
  },
   
})