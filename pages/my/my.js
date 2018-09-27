// pages/my/my.js
import {
  BookModel
} from '../../models/book.js'

import {
   ClassicModel
} from '../../models/classic.js'

const bookModel = new BookModel
const classicModel = new ClassicModel

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized:false,
    userInfo:null,
    bookCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //用户是否授权
    this.userAuthorized()
    this.getMyBookCount()
  },

  getMyBookCount(){
    bookModel.getMyBoolCount()
      .then(res=>{
        this.setData({
          bookCount:res.count
        })
      })
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

  onJumpToAbout(e){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },

  onStudy(e){
    wx.navigateTo({
      url: '/pages/course/course',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})