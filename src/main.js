import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'



import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'



/* add icons to the library */
library.add(faHeart, faCartArrowDown, faFacebookF)




createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
