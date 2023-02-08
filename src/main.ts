import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faRightToBracket,
    faUser,
    faPhone
} from '@fortawesome/free-solid-svg-icons'

library.add({
    faRightToBracket,
    faUser,
    faPhone
})

const app = createApp(App)

app
    .use(router)
    .use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
