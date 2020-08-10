export default (errors, name) => {
  for (let i = 0; i < errors.length; i++) {
    const currError = errors[i]
    if (currError.path === name) {
      return currError.message
    }
  }
  return false
}
