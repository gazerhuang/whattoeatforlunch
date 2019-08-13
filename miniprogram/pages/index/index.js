import Toast from 'vant-weapp/toast/toast';
var array = [{
  "name": "食堂A",
  "img": "../../images/st.jpg"
}, {
  "name": "食堂B",
  "img": "../../images/st2.jpg"
}, {
  "name": "臊子面",
  "img": "../../images/szm.png"
}, {
  "name": "西小西",
  "img": "../../images/nrm.jpg"
}, {
  "name": "大鼓米线",
  "img": "../../images/dgmx.jpg"
}, {
  "name": "麻辣烫",
  "img": "../../images/mlt.jpg"
}, {
  "name": "谷田稻香",
  "img": "../../images/gtdx.jpg"
}, {
  "name": "麦当劳",
  "img": "../../images/mdl.jpg"
}, {
  "name": "便利店",
  "img": "../../images/qj.jpg"
}]
var count = 0;
const app = getApp();
const defaultArray = app.globalData.defaultItem;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: '../../images/img1.jpg',
    text: '中午吃什么好呢？',
    isHidden:true
  },

  btnClick: function() {
    if(count>2){
      Toast('就吃这个，不许改了');
      this.setData({
        isHidden:false
      });
      return;
    }
    try {
      var value = wx.getStorageSync('result')
      if (value) {
        console.log(value);
      } else {
        wx.setStorageSync('result', defaultArray);
        value = defaultArray;
      }
    } catch (e) {
      console.error(e);
    }
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        this.setData({
          text: array[i].name,
          image: array[i].img
        });
      }, (i + 1) * 100);
    };

    setTimeout(() => {
      let j = randomNum(0, value.length - 1);
      
      if (value[j] == '绝食') {
        this.setData({
          text: "家境贫寒，绝食",
          image: '../../images/js.jpg'
        });
      } else if (value.length == 0){
        this.setData({
          text:"选项都没有，那就绝食吧",
          image: '../../images/js.jpg'
        });
      }else{
        this.setData({
          text: value[j],
          image: '../../images/eat_this.png'
        });
      }
    }, (array.length + 1) * 100);

    count++;
  },

  btn2Click:function(){
    count = 0;
    this.setData({
      isHidden:true
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}