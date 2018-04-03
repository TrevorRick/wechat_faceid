var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    localFilePath: ''  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.chooseVideo({  
      compressed: true, 
      sourceType: ['camera'],
      maxDuration: 60,
      camera:'front',
      success: function (res) {
        //  app.startOperating("保存中")
        var tempFilePath = res.tempFilePath
        var session_key = wx.getStorageSync('session_key')
        
        // const uploadTask = wx.uploadFile({
        //   url: app.globalData.url + '/home/upload/uploadFile/session_key/' + session_key, 
        //   filePath: tempFilePath,
        //   name: 'video',
        //   success: function (res) {
        //     //  app.stopOperating();
        //     var data = JSON.parse(res.data);
        //     if (parseInt(data.status) === 1) {
        //       // do something
        //     } else {
        //       // do something
        //     }
        //   }
        // })

        // //对uploadFile返回的uploadTask对象，调用onProcessUpdate方法可以监听上传进度变化事件,uploadTask.abort()-->取消上传任务
        // uploadTask.onProgressUpdate((res) => {
        //   console.log('上传进度', res.progress)
        //   console.log('已经上传的数据长度', res.totalBytesSent)
        //   console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        // })
      },

      complete: function () {
        wx.redirectTo({
          url: '../convas/convas',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
    
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