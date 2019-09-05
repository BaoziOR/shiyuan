// pages/mine/feedback/feedback.js
var util = require('../../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder: '欢迎向我们传达您的意见、建议或投诉，我们将尽快时间为您      进行解决或改进。',
    nodes: '',
    totalText: 300,
    result: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  changeState(e){
    let total = this.data.totalText - 1
    if (!total){
      wx.showToast({
        title: '超出可以输入长度。',
        icon: 'none',
      })
    }
    this.setData({
      totalText: total
    })
  },

  submit(){
    let that = this
    let params = {
      "clientId": app.globalData.clientId,
      "param": {
        "content": this.data.nodes,
        "userId": app.globalData.userId,
      },
    }

    util.xczBaseRequest({
      loadingText: '加载中...',
      contentType: '',
      url: 'v1/user/complaint-suggestion/insert',
      params: params,
      methods: 'post',
      success: res => {
        if(res.msgCode == 0){
          wx.showToast({
            title: '提交成功',
          })
          setTimeout(()=>{
            wx.navigateBack(-1)           
          },500)
        }
        console.log(res)
        
      },
      fail: err => {
        // console.log(err)
      }
    })
  },

})