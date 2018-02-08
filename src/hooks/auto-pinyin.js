const pinyin = require('pinyin')

module.exports = function (options = {}) {
  return async context => {
    const { data } = context
    if (!data.pinyinName) {
      let pinyinName = pinyin(data.chineseName)
      pinyinName = pinyinName.join('')
      pinyinName = pinyinName.charAt(0).toUpperCase() + pinyinName.slice(1)
      data.pinyinName = pinyinName
    }

    return context
  }
}
