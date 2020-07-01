<template>
  <default-field
    :field="field"
    :errors="errors"
  >
    <template #field>
      <vue-select
        :id="field.name"
        v-model="value"
        class="w-full form-control form-input form-input-bordered"
        :class="errorClasses"
        :placeholder="field.name"
        :options="options"
        :reduce="reduceOption"
        :label="labelKey"
        :multiple="field.multiple"
      />
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
	
	components: {
		VueSelect,
	},
	mixins: [FormField, HandlesValidationErrors],

	props: ['resourceName', 'resourceId', 'field'],

	data () {
		return {
			options: [],
			loading: false,
			labelKey: 'label',
			parentVal: null
		};
	},

	computed: {
		parentComponent() {
			if(!this.field.parent_field) {
				return false;
			}

			let targetField = this.field.parent_field;
			let currentField =  this.field.attribute;

			// If component is inside a flexible, key is prefixed with an id
			if( currentField.indexOf('__') ) {
				targetField = currentField.substr(0, currentField.indexOf('__')) + '__' + targetField; 
			}

			//  Find the component the parent value references
			return this.$parent.$children.find(component => {
				return component.field !== undefined
					&& component.field.attribute == targetField;
			})
		},
	},

	mounted () {
		if(this.parentComponent) {
			this.parentComponent.$watch('value', (value) => {
				this.parentVal = value;
				this.loadOptions();
			}, { immediate: true });
		} else {
			this.loadOptions();
		}
	},

	methods: {
		/*
		 * Set the initial, internal value for the field.
		 */
		setInitialValue() {
			let value = this.field.value ? this.field.value : null;
			if (this.field.type === 'int') {
				value = parseInt(value);
			}
			if (this.field.type === 'float') {
				value = parseFloat(value);
			}

			this.value = value;
			this.labelKey = this.field.labelKey || this.labelKey;
		},

		/**
		 * Fill the given FormData object with the field's internal value.
		 */
		fill(formData) {
			formData.append(this.field.attribute, this.value || '')
		},

		/**
		 * Update the field's internal value.
		 */
		handleChange(value) {
			this.value = value
		},

		loadOptions () {
			let params = {}
			let url = this.field.url;

			if(this.parentVal) {
				params[this.field.parent_field] = this.parentVal;
				const paramString = new URLSearchParams(params).toString();
				url = url + '?' + paramString;
			}
			
			window.Nova.request().get( url ).then(({data}) => {
				this.options = data;
				this.options.forEach(option => {
					if (this.value === option.value) {
						this.value = option.value;
					}
				})
			});
		},

		reduceOption(option) {
			const valueKey = this.field.valueKey || 'value';
			
			return option[valueKey];
		}
	},
}
</script>

<style lang="css">
	.v-select {
		padding: 0;
	}
	.vs__dropdown-toggle {
		border-color: transparent !important;
	}
</style>
