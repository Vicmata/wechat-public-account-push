/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '早上好',
    desc: `
      **{{date.DATA}}**

      天气：{{weather.DATA}}
      
      气温:{{min_temperature.DATA}} ~ {{max_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}    {{wind_scale.DATA}}

      ---

      今日热搜榜：

      {{tian_api_network_hot.DATA}}
      
      ---

      假期提醒：
      
      {{holidaytts.DATA}}
      
      ---

      温馨提示：
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}

    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG