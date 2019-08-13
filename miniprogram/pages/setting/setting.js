var app = getApp();
var defaultArray = app.globalData.defaultItem;
console.log(app);
console.log(defaultArray);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    result: []
  },

  onChange(event) {
    this.setData({
      result: event.detail
    });
    try {
      wx.setStorageSync('result', event.detail)
    } catch (e) { }
    //console.log(this.data.result);
  },

  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  noop() { },

  editOnClick:function(){
    wx.navigateTo({
      url: 'edit',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      var value_list = wx.getStorageSync('list')
      var value_result = wx.getStorageSync('result');
      if (value_list) {
        this.setData({
          list:value_list
        });
      }else{
        wx.setStorageSync('list', defaultArray);
        this.setData({
          list: defaultArray
        });
      }
      if (value_result){
        this.setData({
          result: value_result
        });
      } else {
        wx.setStorageSync('result', defaultArray);
        this.setData({
          list: defaultArray
        });
      }
    } catch (e) {
      console.error(e);
    }
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
    try {
      var value_list = wx.getStorageSync('list')
      var value_result = wx.getStorageSync('result');
      if (value_list) {
        this.setData({
          list: value_list
        });
      } else {
        wx.setStorageSync('list', defaultArray);
        this.setData({
          list: defaultArray
        });
      }
      if (value_result) {
        this.setData({
          result: value_result
        });
      } else {
        wx.setStorageSync('result', defaultArray);
        this.setData({
          list: defaultArray
        });
      }
    } catch (e) {
      console.error(e);
    }
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