//var app = getApp()
//const qiniuUploader = require("../../utils/qiniuUploader");

Page({
  data: {
    imageURL: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.chooseImage({
      cout: 1,                              //最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有

      //sourceType: ['album',camera'],  //album 从相册选图，camera 使用相机，默认二者都有
      sourceType: ['camera'],
      camera: 'front',
      success: function (res) {
        //成功则返回图片的本地路径列表tempFilePaths
        //app.startOperating("保存中")
        var tempFilePath = res.tempFilePaths[0];   //返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        var session_key = wx.getStorageSync('session_key');
        //  功能：将上传上来的文件返回给后端，调用wx.uploadFile函数
        wx.uploadFile({
          // url: app.globalData.url + '/home/upload/uploadFile/session_key/' + session_key, //url在app.json中定义.仅为示例，非真实的接口地址
          url: 'localhost:3031/upload',
          filePath: tempFilePath,
          name: 'file',
          success: function (res) {
          //  app.stopOperating();
            // 下面的处理跟业务逻辑有关
            var data = JSON.parse(res.data);
            if (parseInt(data.status) === 1) {
              console.log('文件保存成功');
            } else {
              console.log("文件保存失败");
            }
          }
        })

        /**
         * 使用七牛云API
         */
        // qiniuUploader.upload(tempFilePath, (res) => {
        //   _this.setData({
        //     'imageURL': res.imageURL,
        //   });
        // }, (error) => {
        //   console.log('error: ' + error);
        // }, {
        //     region: 'EAST',
        //     key: 'customFileName.jpg', // 自定义文件 key。如果不设置，默认为使用微信小程序API的临时文件名
        //     domain: 'bzkdlkaf.bkt.clouddn.com', //domain为七牛空间（bucket)对应的域名，下载时用到。选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
        //     uploadURL: 'https://upload.qiniup.com',
        //     uptokenURL: 'UpTokenURL.com/uptoken', //从指定url通过HTTP GET获取 uptoken,返回的格式必须是json且包含uptoken字段，例如:{"uptoken": "0MLvWPnyy..."}
        // }, (res) => {
        //   console.log('上传进度', res.progress)
        //   console.log('已经上传的数据长度', res.totalBytesSent)
        //   console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        // })
      },
      complete: function () {
        wx.redirectTo({
          url: '../steptwo/steptwo',
        })
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