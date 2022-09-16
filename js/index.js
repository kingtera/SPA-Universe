import { Routes } from './routes.js'

const route = new Routes()
route.addRoute("/", "/pages/home.html")
route.addRoute("/universe", "/pages/universe.html")
route.addRoute("/exploration", "/pages/exploration.html")

route.handle()

window.onpopstate = () => route.handle()
window.route = () => route.route()