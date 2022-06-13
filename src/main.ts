import { createApp, DefineComponent, h } from 'vue'
import NotFound from './components/NotFound/index.vue'
import routes from './routes'

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),
  computed: {
    CurrentComponent(): DefineComponent {
      console.log(this.currentRoute)
      return routes[this.currentRoute] || NotFound
    }
  },
  render() {
    return h(this.CurrentComponent)
  }
} as any

createApp(SimpleRouter).mount('#app')