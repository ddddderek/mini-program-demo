import { classicBeh } from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    pauseSrc:'./images/player@pause.png',
    playgSrc:'./images/player@play.png'
  },

  detached:function(e){
    mMgr.stop()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(){
      if(!this.data.playing){
        mMgr.src = this.properties.src
        this.setData({
          playing: true
        })
      }else{
        this.setData({
          playing: false
        })
        mMgr.pause()
      }
    }
  }
})
