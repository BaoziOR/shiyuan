

module.exports = {
  BaseURL: "https://admin.doooly.com/yoya-api/",
  getTopic(){
    let that = this
    util.xczBaseRequest({
      loadingText: '加载中.b..',
      contentType: '',
      url: '/v1/home/week-topic/query',   
      params: {},
      methods: 'get',
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
}