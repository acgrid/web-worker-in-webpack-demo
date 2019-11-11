self.onmessage = msg => {
  console.log('From Window', msg, msg.data)
  self.postMessage({ foo: 'bar' })
}
