//Page Object
import {
  request
} from "../../request/index.js"
Page({
  data: {
    swiperList: [],
    catesList: []
  },
  //options(Object)
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // })

    // request({
    //     url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
    //   })
    //   .then(result => {
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //   })

    this.getSwiperList();
    this.getcatesList();

  },
  //获取轮播数组
  getSwiperList() {
    request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
      })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })

  },

  getcatesList() {
    request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"
      })
      .then(result => {
        this.setData({
          catesList: result.data.message
        })
      })

  }

});