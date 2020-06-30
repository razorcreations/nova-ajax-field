window.Nova.booting((Vue) => {
	Vue.component('IndexAjaxField', require('./components/IndexField'))
	Vue.component('DetailAjaxField', require('./components/DetailField'))
	Vue.component('FormAjaxField', require('./components/FormField'))
})
