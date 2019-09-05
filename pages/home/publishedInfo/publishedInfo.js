Page({

  data: {
    topicArray: ["寄情山水总是情", "复仇者联盟", "端午节就是要吃"],
    topicIndex: 0,
    topicFn: "selectTopicEvent",
    publishTitle: "",
    publishTitleTip: "请输入标题",
    publishSubtitleTip: "（标题最多12个字符）",
    coverArray: [],
    fn: "selectAlbumImage",
    indexTag: 0,
    tagsArray: ['七言律诗', '七言绝句', '乡土', '五言律诗', '现代诗', '校园', '五言绝句', '...更多'],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 选择话题
   */
  selectTopicEvent: function (e) {
    this.data.topicIndex = this.data.topicArray.indexOf(e.currentTarget.dataset.keyword);
    this.setData({
      topicIndex: this.data.topicIndex,
    });
  },

  /**
   * 选择标签
   */
  selectedByTag: function (e) {
    this.data.indexTag = this.data.tagsArray.indexOf(e.currentTarget.dataset.keyword);
    this.setData({
      indexTag: this.data.indexTag
    });
  },
  selectAlbumImage: function (e) {

    var that = this;
    wx.chooseImage({
      count: 1,
      sourceType: ["album", "camera"],
      success: function(res) {

        var tempFilePath = res.tempFilePaths[0];
        that.setData({
          coverArray: [tempFilePath]
        })
      },
    })
  },
  previewImageEvent: function(e) {

    var data = e.currentTarget.dataset;
    var that = this;
    wx.previewImage({
      urls: that.data.coverArray,
    })
  },
  publishTitleChangeEvent: function(e) {

    var content = e.detail.value;
    this.data.publishTitleTip = (content.length > 0) ? "" : "请输入标题";
    this.data.publishSubtitleTip = (content.length > 0) ? "" : "（标题最多12个字符";
    
    this.setData({
      publishTitleTip: this.data.publishTitleTip,
      publishSubtitleTip: this.data.publishSubtitleTip,
    });
  },

  submitReleaseEvent: function (e) {

    wx.navigateTo({
      url: '../readDetail/readDetail',
    })
  }
})