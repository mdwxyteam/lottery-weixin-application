<template>
  <div>

    <div class="background-white">
      <swiper :indicator-dots="true"
              :autoplay="true"
              :interval="5000"
              :duration="900"
              :circular="true"
              :easing-function="linear"
              style="height: 360rpx;"
              class="">
        <div v-for="(item,index) in imgUrls"
             :key="index">
          <swiper-item>
            <image mode=""
                   :src="item"
                   class=" slide-image" />
          </swiper-item>
        </div>
      </swiper>
      <!-- <div class="debug"
           style=""> -->
      <div class="background-white sm-margin-left-10rpx prize-size ms-layout-start-horizontal">
        一等奖：蓝牙耳机 <text class="text-size-26 sm-margin-left-20"> * 88</text>
      </div>
      <div class="background-white sm-margin-left-10rpx prize-size ms-layout-start-horizontal">
        二等奖：蓝牙耳机 <text class="text-size-26 sm-margin-left-20"> * 88</text>
      </div>
      <div class="background-white sm-margin-left-10rpx prize-size ms-layout-start-horizontal">
        三等奖：蓝牙耳机 <text class="text-size-26 sm-margin-left-20"> * 88</text>
      </div>
      <div style="color: rgba(0, 0, 0, 0.5) !important;"
           class="background-white sm-margin-left-10rpx text-size-26 prize-size ms-layout-start-horizontal">
        2019.12.22 14:33:00 自动开奖
      </div>
      <!-- </div> -->
    </div>
    <!-- 分割 -->
    <div style="width:100%;height:100rpx;"
         class="sm-margin-bottom-20 sm-layout-center-horizontal background-white top-border">
      <div class=" text-size-26 sm-width-45-per sm-height-100-per ms-layout-start-horizontal">
        赞助商
      </div>
      <div class="lottery text-size-26 sm-width-45-per sm-height-100-per sm-layout-right-center">
        <!-- <div class="sm-margin-right-20">我要上首页</div>
        <div class="sm-margin-right-20">|</div>
        <div>分享</div> -->
        我是赞助商
      </div>
    </div>
    <!-- 福利开始 -->
    <div class="sm-margin-bottom-20 background-white sm-layout-center-vertical"
         style="width:100%;position: relative;">

    </div>

  </div>
</template>
<style lang="less">
// .slide-image {
//   width: 745rpx;
//   height: 355rpx;
// }
.slide-image {
  width: 100%;
  height: 100%;
}
.background-img {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/png;base64,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");
}
.sponser-background-img {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAADICAYAAAB4WVALAAAKYklEQVR4Xu3WQRGAQBADwT0LFNrRRhUSMMEPETe9DtLZR9ZxPe/MnOMIECBAgAABAgT2F1hzLwNw/54lJECAAAECBAj8AgagZyBAgAABAgQIxAQMwFjh4hIgQIAAAQIEDEA/QIAAAQIECBCICRiAscLFJUCAAAECBAgYgH6AAAECBAgQIBATMABjhYtLgAABAgQIEDAA/QABAgQIECBAICZgAMYKF5cAAQIECBAgYAD6AQIECBAgQIBATMAAjBUuLgECBAgQIEDAAPQDBAgQIECAAIGYgAEYK1xcAgQIECBAgIAB6AcIECBAgAABAjEBAzBWuLgECBAgQIAAAQPQDxAgQIAAAQIEYgIGYKxwcQkQIECAAAECBqAfIECAAAECBAjEBAzAWOHiEiBAgAABAgQMQD9AgAABAgQIEIgJGICxwsUlQIAAAQIECBiAfoAAAQIECBAgEBMwAGOFi0uAAAECBAgQMAD9AAECBAgQIEAgJmAAxgoXlwABAgQIECBgAPoBAgQIECBAgEBMwACMFS4uAQIECBAgQMAA9AMECBAgQIAAgZiAARgrXFwCBAgQIECAgAHoBwgQIECAAAECMQEDMFa4uAQIECBAgAABA9APECBAgAABAgRiAgZgrHBxCRAgQIAAAQIGoB8gQIAAAQIECMQEDMBY4eISIECAAAECBAxAP0CAAAECBAgQiAkYgLHCxSVAgAABAgQIGIB+gAABAgQIECAQEzAAY4WLS4AAAQIECBAwAP0AAQIECBAgQCAmYADGCheXAAECBAgQIGAA+gECBAgQIECAQEzAAIwVLi4BAgQIECBAwAD0AwQIECBAgACBmIABGCtcXAIECBAgQICAAegHCBAgQIAAAQIxAQMwVri4BAgQIECAAAED0A8QIECAAAECBGICBmCscHEJECBAgAABAgagHyBAgAABAgQIxAQMwFjh4hIgQIAAAQIEDEA/QIAAAQIECBCICRiAscLFJUCAAAECBAgYgH6AAAECBAgQIBATMABjhYtLgAABAgQIEDAA/QABAgQIECBAICZgAMYKF5cAAQIECBAgYAD6AQIECBAgQIBATMAAjBUuLgECBAgQIEDAAPQDBAgQIECAAIGYgAEYK1xcAgQIECBAgIAB6AcIECBAgAABAjEBAzBWuLgECBAgQIAAAQPQDxAgQIAAAQIEYgIGYKxwcQkQIECAAAECBqAfIECAAAECBAjEBAzAWOHiEiBAgAABAgQMQD9AgAABAgQIEIgJGICxwsUlQIAAAQIECBiAfoAAAQIECBAgEBMwAGOFi0uAAAECBAgQMAD9AAECBAgQIEAgJmAAxgoXlwABAgQIECBgAPoBAgQIECBAgEBMwACMFS4uAQIECBAgQMAA9AMECBAgQIAAgZiAARgrXFwCBAgQIECAgAHoBwgQIECAAAECMQEDMFa4uAQIECBAgAABA9APECBAgAABAgRiAgZgrHBxCRAgQIAAAQIGoB8gQIAAAQIECMQEDMBY4eISIECAAAECBAxAP0CAAAECBAgQiAkYgLHCxSVAgAABAgQIGIB+gAABAgQIECAQEzAAY4WLS4AAAQIECBAwAP0AAQIECBAgQCAmYADGCheXAAECBAgQIGAA+gECBAgQIECAQEzAAIwVLi4BAgQIECBAwAD0AwQIECBAgACBmIABGCtcXAIECBAgQICAAegHCBAgQIAAAQIxAQMwVri4BAgQIECAAAED0A8QIECAAAECBGICBmCscHEJECBAgAABAgagHyBAgAABAgQIxAQMwFjh4hIgQIAAAQIEDEA/QIAAAQIECBCICRiAscLFJUCAAAECBAgYgH6AAAECBAgQIBATMABjhYtLgAABAgQIEDAA/QABAgQIECBAICZgAMYKF5cAAQIECBAgYAD6AQIECBAgQIBATMAAjBUuLgECBAgQIEDAAPQDBAgQIECAAIGYgAEYK1xcAgQIECBAgIAB6AcIECBAgAABAjEBAzBWuLgECBAgQIAAAQPQDxAgQIAAAQIEYgIGYKxwcQkQIECAAAECBqAfIECAAAECBAjEBAzAWOHiEiBAgAABAgQMQD9AgAABAgQIEIgJGICxwsUlQIAAAQIECBiAfoAAAQIECBAgEBMwAGOFi0uAAAECBAgQMAD9AAECBAgQIEAgJmAAxgoXlwABAgQIECBgAPoBAgQIECBAgEBMwACMFS4uAQIECBAgQMAA9AMECBAgQIAAgZiAARgrXFwCBAgQIECAgAHoBwgQIECAAAECMQEDMFa4uAQIECBAgAABA9APECBAgAABAgRiAgZgrHBxCRAgQIAAAQIGoB8gQIAAAQIECMQEDMBY4eISIECAAAECBAxAP0CAAAECBAgQiAkYgLHCxSVAgAABAgQIGIB+gAABAgQIECAQEzAAY4WLS4AAAQIECBAwAP0AAQIECBAgQCAmYADGCheXAAECBAgQIGAA+gECBAgQIECAQEzAAIwVLi4BAgQIECBAwAD0AwQIECBAgACBmIABGCtcXAIECBAgQICAAegHCBAgQIAAAQIxAQMwVri4BAgQIECAAAED0A8QIECAAAECBGICBmCscHEJECBAgAABAgagHyBAgAABAgQIxAQMwFjh4hIgQIAAAQIEDEA/QIAAAQIECBCICRiAscLFJUCAAAECBAgYgH6AAAECBAgQIBATMABjhYtLgAABAgQIEDAA/QABAgQIECBAICZgAMYKF5cAAQIECBAgYAD6AQIECBAgQIBATMAAjBUuLgECBAgQIEDAAPQDBAgQIECAAIGYgAEYK1xcAgQIECBAgIAB6AcIECBAgAABAjEBAzBWuLgECBAgQIAAAQPQDxAgQIAAAQIEYgIGYKxwcQkQIECAAAECBqAfIECAAAECBAjEBAzAWOHiEiBAgAABAgQMQD9AgAABAgQIEIgJGICxwsUlQIAAAQIECBiAfoAAAQIECBAgEBMwAGOFi0uAAAECBAgQMAD9AAECBAgQIEAgJmAAxgoXlwABAgQIECBgAPoBAgQIECBAgEBMwACMFS4uAQIECBAgQMAA9AMECBAgQIAAgZiAARgrXFwCBAgQIECAgAHoBwgQIECAAAECMQEDMFa4uAQIECBAgAABA9APECBAgAABAgRiAgZgrHBxCRAgQIAAAQIGoB8gQIAAAQIECMQEDMBY4eISIECAAAECBAxAP0CAAAECBAgQiAkYgLHCxSVAgAABAgQIGIB+gAABAgQIECAQEzAAY4WLS4AAAQIECBAwAP0AAQIECBAgQCAmYADGCheXAAECBAgQIGAA+gECBAgQIECAQEzAAIwVLi4BAgQIECBAwAD0AwQIECBAgACBmIABGCtcXAIECBAgQICAAegHCBAgQIAAAQIxAQMwVri4BAgQIECAAAED0A8QIECAAAECBGICBmCscHEJECBAgAABAgagHyBAgAABAgQIxAQMwFjh4hIgQIAAAQIEDEA/QIAAAQIECBCICRiAscLFJUCAAAECBAgYgH6AAAECBAgQIBATMABjhYtLgAABAgQIEFhzf5Jqn/8ocQ/FAAAAAElFTkSuQmCC");
}
.image-size {
  width: 100%;
  height: 400rpx;
}
.top-border {
  border-top: 1rpx solid rgba(0, 0, 0, 0.125);
}
page {
  background-color: #e6e5e5;
}
.lottery {
  color: #fd3737;
  font-size: 35rpx;
  font-weight: bold;
}
.sm-margin-left-10rpx {
  margin-left: 10rpx;
}
.prize-size {
  width: 95%;
  height: 60rpx;
  font-size: 30rpx;
}
.text-size-26 {
  font-size: 26rpx;
  color: rgba(0, 0, 0, 0.5) !important;
}
.sm-margin-right-20 {
  margin-right: 20rpx;
}
.sm-margin-left-20 {
  margin-left: 20rpx;
}
.sm-margin-bottom-20 {
  margin-bottom: 20rpx;
}
</style>
<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      imgUrls: [
        '../../static/images/im2.jpg',
        '../../static/images/im2.jpg'
      ],
      imgtest: '../../static/images/im2.jpg'
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
