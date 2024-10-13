import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import utilities from './modules/common/plugins/utilities'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faPlay, faStop, faPause, faChevronCircleLeft);


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(utilities, {})

app.mount('#app')
