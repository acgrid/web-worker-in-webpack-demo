declare module "@/workers/*" {
  class WebpackWorker extends Worker {
    constructor()
  }

  export default WebpackWorker
}