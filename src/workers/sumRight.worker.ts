self.onmessage = ({ data: String }) => {
  self.postMessage(`${data} is right`)
}