// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankBackgroundUrl: "http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg",

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

  /**
   * 点击cell
   */
  didSelectItem: function (e) {

    if (e.target.dataset.keyword === '本周') {
      console.log("本周");

      wx.navigateTo({
        url: "../rank/detailRank/detailRank",
      })
    } else if (e.target.dataset.keyword === "城市") {
      console.log("城市");
      wx.navigateTo({
        url: "../rank/city/city",
      })
    } else {
      console.log("年度");
      wx.navigateTo({
        url: "../rank/year/year",
      })
    }
  }
})