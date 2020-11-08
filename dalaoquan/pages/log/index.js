// pages/log/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        userName:"",
        userImgUrl:"",
        gender:0
    },
    userInfo:{
        userName:"",
        userImgUrl:"",
        gender:0
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    bindGetUserInfo(e) {
        console.log(e.detail.userInfo);
        this.setData({
            userName : e.detail.userInfo.nickName,
            userImgUrl : e.detail.userInfo.avatarUrl,
            gender:e.detail.userInfo.gender
        })
       wx.setStorageSync('userInfo', this.userInfo);
        wx.switchTab({
          url: '../../pages/home/index',
        })
    },
})