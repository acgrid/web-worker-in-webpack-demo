import sum from 'loadsh/sum'

self.onmessage = ({ data }) => {
  self.postMessage(sum(data))
}
