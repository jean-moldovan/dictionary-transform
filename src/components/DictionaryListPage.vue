<template>
  <div class="dictionary-list-page">
    <h3>Dictionaries</h3>

    <button
      class="dictionary-create-btn"
      @click="$router.push('/new')"
    >
      Create
    </button>

    <dictionary-list
      v-if="dictionaries.length"
      :dictionaries="dictionaries"
    >
      <template
        v-slot="{ row }"
      >
        <div class="text-right">
          <button
            @click="removeDictionary(row.id)"
            class="dictionary-remove-btn"
          >
            remove
          </button>
        </div>
      </template>
    </dictionary-list>

    <div v-else>
      No items to display. Please create one.
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import DictionaryList from './DictionaryList.vue'

export default {
  components: {
    DictionaryList
  },
  computed: {
    ...mapState(['dictionaries'])
  },
  methods: {
    ...mapMutations(['removeDictionary'])
  }
}
</script>

<style lang="scss" scoped>
.dictionary-list-page {
  padding: 20px;
}

.dictionary-create-btn {
  margin-bottom: 20px;
}

.dictionary-remove-btn {
  border: none;
  font-weight: bold;;
}
</style>
