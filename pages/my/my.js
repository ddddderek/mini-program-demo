// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized:false,
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //用户是否授权
    this.userAuthorized()
  },

  userAuthorized(){
    wx.getSetting({
      success:data=>{
        if (data.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:data=>{
              this.setData({
                authorized:true,
                userInfo:data.userInfo
              })
            }
          })
        }else{
          this.setData({
            authorized: false
          })
        }
      }
    })
  },

  onGetUserInfo(e){
    const userInfo = e.detail.userInfo

    if(userInfo){
      this.setData({
        userInfo,
        authorized: true
      })
    } 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})