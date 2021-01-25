<template>
  <div>
    <h3>
      Create Dictionary
    </h3>

    <form
      @submit.prevent="submitForm"
      class="new-dictionary-form"
    >
      <div class="new-dictionary-rules">
        <div
          v-if="hasErrors"
          class="text-negative"
        >
          <small>
            {{ errorMessage }}
          </small>
        </div>

        <div
          v-for="(rule, i) in newDictionary.rules"
          :key="i"
        >
          <div>
            <input
              type="text"
              name="from"
              placeholder="from"
              v-model="rule.from"
            >

            <input
              type="text"
              name="to"
              placeholder="to"
              v-model="rule.to"
            >

            <template v-if="i !== 0">
              <button
                type="button"
                class="remove-btn"
                @click="removeRule(i)"
              >
                remove
              </button>
            </template>
          </div>
        </div>

        <button
          type="button"
          @click="addRule"
        >
          Add
        </button>
      </div>

      <div class="text-right">
        <button type="submit">
          Create Dictionary
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

const emptyRule = {
  from: '',
  to: ''
}

export default {
  data () {
    return {
      newDictionary: {
        id: Date.now(),
        rules: [
          {
            ...emptyRule
          }
        ]
      },
      hasErrors: false,
      errorMessage: ''
    }
  },
  methods: {
    ...mapMutations(['createDictionary']),

    addRule () {
      this.resetValidation()
      this.newDictionary.rules.push({ ...emptyRule })
    },
    removeRule (idx) {
      this.resetValidation()
      this.newDictionary.rules.splice(idx, 1)
    },
    submitForm () {
      this.resetValidation()
      this.validateForm()

      if (this.hasErrors) {
        return
      }

      this.createDictionary(this.newDictionary)
      this.$router.replace('/')
    },
    resetValidation () {
      this.hasErrors = false
      this.errorMessage = ''
    },
    setError (message) {
      this.hasErrors = true
      this.errorMessage = message
    },
    validateForm () {
      if (this.newDictionary.rules.some(r => r.from === '')) {
        this.setError('Empty rules are now allowed')
        return
      }

      const froms = this.newDictionary.rules.map(r => r.from)

      if (new Set(froms).size !== froms.length) {
        this.setError('Duplicates are not allowed')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.new-dictionary-form {
  max-width: 480px;

  input {
    padding: 3px;
    margin: 3px 3px 3px 0;
  }
}

.new-dictionary-rules {
  padding: 20px;
  border: 1px solid var(--color-light);
  background-color: #fafafa;
  margin-bottom: 20px;
}

.remove-btn {
  border: none;
  background-color: transparent;
}
</style>
