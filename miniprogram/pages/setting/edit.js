import Dialog from 'vant-weapp/dialog/dialog';

const app = getApp();
const defaultArray = app.globalData.defaultItem;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    newItem: ''
  },

  delItem: function(event) {
    let id = event.target.dataset.id;
    let new_list = this.data.list;
    new_list.splice(id, 1);
    wx.setStorageSync('list', new_list);
    wx.setStorageSync('result', new_list);
    this.setData({
      list: new_list
    });
  },

  addItem: function(event) {
    console.log(this.data.newItem);
    if (this.data.newItem.match(/^\s*$/)){
      return;
    }
    var value_list = wx.getStorageSync('list');
    let new_list = value_list.concat(this.data.newItem);
    wx.setStorageSync('list', new_list);
    wx.setStorageSync('result', new_list);
    this.setData({
      list: new_list,
      newItem: ''
    });
  },

  onChange: function(event) {
    console.log(event);
    this.setData({
      newItem: event.detail
    });
  },

  resetData: function() {
    Dialog.confirm({
      title: '警告',
      message: '重置数据会清除所有自定义添加的选项，并恢复预设值，确认重置吗？'
    }).then(() => {
      try {
        wx.setStorageSync('list', defaultArray);
        wx.setStorageSync('result', defaultArray);
        this.setData({
          list: defaultArray
        });
      } catch (e) {
        console.error(e);
      }
    }).catch(() => {
      // on cancel
    });
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    try {
      var value_list = wx.getStorageSync('list')
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

    } catch (e) {
      console.error(e);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})