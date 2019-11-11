self.onmessage = msg => {
  console.log(msg)
  self.postMessage({ foo: 'bar' })
}
