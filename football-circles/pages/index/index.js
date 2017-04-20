//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    index:0,
    navIs: true,
    pageIndex:0,
    swiperNav:["足球现场","足球生活","足球美女"],
    contentList:null
  },
  changeNav(){
    this.setData({navIs:!this.data.navIs})
  },
  handleNav(e){
    this.setData({index:e.target.dataset.index});
    this.getList()
  },
  handleItem(e){
    this.setData({index:e.detail.current});
    this.getList()
  },
  toIndex(){
    this.setData({pageIndex:0})
  },
  toFind(){
    this.setData({pageIndex:1})
  },
  toMine(){
    this.setData({pageIndex:3})
  },
    camera(e){
    this.setData({pageIndex:2})
    console.log(e)
    wx.scanCode({
      success:(res)=>{
        console.log(res);
      }
    })
  },
  toExit(){
    this.setData({pageIndex:4})
  },
   onShareAppMessage(){

  },
  onLoad(){
    var _this=this;
    wx.request({
      url: "http://localhost:1234/page"+this.data.index,
      method: 'GET',
      success: function(res){
        _this.setData({contentList:res.data.list})
      }
    })
  },

  getList(){
    wx.showLoading({
        title: '加载中',
        mask:true
    })
    var _this=this;
    wx.request({
      url: "http://localhost:1234/page"+this.data.index,
      method: 'GET',
      success: function(res){
        _this.setData({contentList:res.data.list})
      }
    })
    setTimeout(function(){
      wx.hideLoading()
    },1000)
  },
})
