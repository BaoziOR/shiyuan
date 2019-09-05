// pages/home/home.js

const util = require("../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex : 0,
    headUrl: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3243656821,2087705694&fm=173&app=25&f=JPEG?w=640&h=853&s=B7EFFB07E5BB3B8C3A49A126030030C3",
    swiperHeight:"0"
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

    var that = this;
    wx.getSystemInfo({
      success: function(res) {

        that.setData({
          swiperHeight: (res.windowHeight - 230)
        });
      },
    })
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
  /*
* 查看用户信息
*/
  goToPersonalPageEvent: function () {
    wx.navigateTo({
      url: '../personalInfo/personalInfo',
    })
  },

  bindChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    });
  },
  /**
   * 得到选项卡信息
   */
  getTabsInfo: function (e) {
    if (e.target.dataset.index) {
      this.setData({
        currentIndex: e.target.dataset.index
      })
    }
  },

  //加载更多操作
  loadMoreData: function () {
    console.log("加载更多");
  }

})