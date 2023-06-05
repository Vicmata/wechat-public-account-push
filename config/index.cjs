/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: 'push-deer',

  // 使用微信测试号：公众号APP_ID
  // APP_ID: 'wxeacdb9fd4231d009',
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8382ad4e10eeffd1f9497987f5bb8e3c',

  PROVINCE: '山东',
  CITY: '泰安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '我',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'oTXM0526-6Kk78UWMgFHEPPjFINU',
      id: 'PDU23167TxFRsFoRK9iW6wAmqjjzMNtFrU4aUIe7u',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001'
    }, {
      name: '媳妇',
      id: 'PDU23170TK9jUpQXGqhcSl8Xf5vnEnnMWZf4AZyMZ',
      useTemplateId: '0001'
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'meA8rKw58zi786JXPvnnvgs3bddmUglzxWd00a7c34s',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '30988ec54ec91aa278773b54ce5bc195',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 0,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 15,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
    province: '山东',
    // 所在城市或县区
    city: '泰安',
  },

}

module.exports = USER_CONFIG

