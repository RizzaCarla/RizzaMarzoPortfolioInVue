import { md3 } from "vuetify/blueprints";
import router from '@/plugins/router';
import { createApp } from 'vue';
import { createPinia } from "pinia";
import App from '@/App.vue';
import '@/style.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { aliases, md } from "vuetify/iconsets/md";

// Vuetify
import "vuetify/styles";
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia();
const app = createApp(App)

const vuetify = createVuetify({
  blueprint: md3,
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
});

app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
