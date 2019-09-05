// pages/rank/rank.js
var util = require('../../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    lastWeek: [],  //上周
    myWeek: {},   // 我的
    week: [],    // 本周
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

    let params = {
        "clientId": app.globalData.clientId,
        "param": {
        "pageIndex": 1,
        "pageSize": 10,
        "userId": app.globalData.userId,
      }
    }     
    
    util.xczBaseRequest({
      loadingText: '加载中...', 
      contentType: '', 
      url: 'v1/charts/week/query', 
      params: params,
      methods: 'post', 
      success:res=>{
        console.log(res)
        this.setData({
          lastWeek: res.data.lastWeekCharts,
          myWeek: res.data.myWeekChart,
          week: res.data.weekCharts,
        })
      }, 
      fail:err=>{
        // console.log(err)
      }     
    }) 

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
  
  }

  
   
})