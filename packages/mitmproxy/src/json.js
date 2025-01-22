let JSON5 = require('json5')

if (JSON5.default) {
  JSON5 = JSON5.default
}

module.exports = {
  parse (str, defaultValue) {
    if (str == null || str.length < 2) {
      return defaultValue || {}
    }
    if (defaultValue != null) {
      try {
        return JSON5.parse(str)
      } catch {
        return defaultValue
      }
    } else {
      return JSON5.parse(str)
    }
  },
  stringify (obj) {
    return JSON.stringify(obj, null, '\t')
  },

  // 仅用于记录日志时使用
  stringify2 (obj) {
    try {
      return JSON.stringify(obj)
    } catch {
      try {
        return JSON5.stringify(obj)
      } catch {
        return obj
      }
    }
  },
}
