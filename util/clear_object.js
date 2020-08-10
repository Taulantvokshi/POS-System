export default object => {
  if (!Object.keys(object).length) return {}
  const newObject = {}
  for (let key in object) {
    const value = object[key]
    if (value) {
      newObject[key] = value
    }
  }
  return newObject
}
