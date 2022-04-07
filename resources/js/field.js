import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app) => {
	app.component('IndexAjaxField', IndexField)
	app.component('DetailAjaxField', DetailField)
	app.component('FormAjaxField', FormField)
})
