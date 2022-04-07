import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-ajax-field', IndexField)
  app.component('detail-ajax-field', DetailField)
  app.component('form-ajax-field', FormField)
})
