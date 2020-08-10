export default {
  isClicked: (key, value, option) => {
    if (key.length === 1) {
      if (option) {
        return '#91157e'
      }
    }
    const clearKey = key.slice(1)
    if (clearKey === value) {
      return '#91157e'
    }
  },

  isTextClicked: (key, value, option) => {
    if (key.length === 1) {
      if (option) {
        return {
          color: 'white'
        }
      }
    }
    const clearKey = key.slice(1)
    if (clearKey === value) {
      return {
        color: 'white'
      }
    }
  },
  isIconClicked: (key, value, option) => {
    if (key.length === 1) {
      if (option) {
        return 'white'
      }
    }
    const clearKey = key.slice(1)
    if (clearKey === value) {
      return 'white'
    }
  }
}
