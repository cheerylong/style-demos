import { DefineComponent } from 'vue'
import ball from './components/ball/ball.vue'

export default {
  '/': ball,
} as {
  [key: string]: DefineComponent
}