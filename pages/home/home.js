// pages/home/home.js
var util = require('../../utils/util.js');
const app = getApp()
var QQMapWX = require('../../lib/sdk/map/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    t:1,
    t1:[],
    topic:[
      { title:"推荐", value: 'TJ'},
      { title: "最新", value: 'ZX'},
      { title: "同城", value: 'TC'},
      { title: "美女", value: 'CN'}
    ],
    currentTopItem: 0,
    currentTitleItem:0,
    isClick:false,
    tabVal: 'TJ',
    list: [],
    loadText: '加载中...',
    loadState: true,
    pageIndex: '1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    qqmapsdk = new QQMapWX({
      key: 'FWRBZ-U3WWU-DDLV2-BFF75-DXKOF-3PFWQ',
    });

    this.getListApi()

    this.setData({
      isClick:true
    });


  },
  //点击选项刷新数据
  onKindTap: function (event) {
    this.data.pageIndex = 1
    var currentIndex = event.currentTarget.dataset.idx;
    this.data.tabVal = this.data.topic[currentIndex].value

    this.setData({
      currentTopItem:currentIndex
    })
    
    this.getListApi()  
   
  },
  // 点击话题筛选
  onTitleTap: function (event){
    console.log(event)
    var currentIndex = event.currentTarget.dataset.idx;
    this.setData({
      currentTitleItem: currentIndex
    })
  },
  //点击评论
  onClickCommentEvent: function (event) {
    var index = event.currentTarget.dataset.index;

    wx.navigateTo({
      url: '/pages/home/comment-detail/comment-detail?commentId=' + index,
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
    let than = this
    wx.getLocation({
      type: 'wgs84',
      altitude: 'true',
      success(res) {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        than.getLocal(latitude, longitude)
      }
    })

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
   * 测试上传
   */
  goToApply: function () {

    wx.navigateTo({
      url: '../home/publishedInfo/publishedInfo',
    })
  },

  // 获取位置
  getLocal:(latitude, longitude) => {
    console.log(latitude, longitude)
    let that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude,
      },
      success: res => {
        console.log(res, '1111')
        console.log(res.result.ad_info.city, '0000')
        app.globalData.aa = "bb"
        console.log(app.globalData)
        // globalData
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  // 接口
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

    util.xczBaseRequest({
      loadingText: '加载中...',
      contentType: '',
      url: 'v1/home/query',
      params: params,
      methods: 'post',
      success: res => {
        console.log(res)
        this.setData({
          list: res.data.summarys
        })
      },
      fail: err => {
        // console.log(err)
      }
    })
  },

  goPublish(){
    wx.navigateTo({
      url: '../publish/publishedInfo/publishedInfo',
    })
  },

  // 下啦刷新
  // onPullDownRefresh(){
  //   console.log(23)
  //   wx.showNavigationBarLoading()
  // },
  //上啦
  onReachBottom(){
    this.data.pageIndex++
    this.getListApi()
    wx.stopPullDownRefresh()
  },
})