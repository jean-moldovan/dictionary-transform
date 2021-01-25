<template>
  <div>
    <table
      v-for="dictionary in dictionaries"
      :key="dictionary.id"
      class="dictionary-table"
    >
      <thead>
        <tr>
          <th>
            From
          </th>
          <th>
            To
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="rule in dictionary.rules"
          :key="rule.from.toLowerCase()"
        >
          <td>
            {{ rule.from }}
          </td>
          <td>
            {{ rule.to }}
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <slot :row="dictionary" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dictionaries: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.dictionary-table {
  width: 300px;
  border-collapse: collapse;
  margin-bottom: 20px;

  th {
    text-align: left;
    width: 50%;
  }

  th, td {
    padding: 5px 10px;
    border: 1px solid var(--color-light);
  }
}
</style>
