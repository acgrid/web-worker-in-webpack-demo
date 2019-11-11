self.onmessage = msg => {
  console.log('From Window', msg)
  self.postMessage({ foo: 'bar' })
}
