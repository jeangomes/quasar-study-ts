<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from 'boot/axios'
import { currencyFormat } from 'src/services/util'

const props = defineProps({
  foo: { type: String, required: true },
  purchase_id: Number
})

// const loading = ref(false)
const rows = ref([])
const columns = ref([
  {
    name: 'product_name',
    align: 'left',
    label: 'Nome',
    field: 'product_name',
    sortable: false
  },
  {
    name: 'product_code',
    align: 'center',
    label: 'Code',
    field: 'product_code',
    sortable: false
  },
  {
    name: 'quantity',
    align: 'center',
    label: 'Quantidade',
    field: 'quantity',
    sortable: false
  },
  {
    name: 'unit_measure',
    align: 'center',
    label: 'Unidade',
    field: 'unit_measure',
    sortable: false
  },
  {
    name: 'unit_price',
    align: 'center',
    label: 'Valor unitário',
    field: 'unit_price',
    format: (val: never) => currencyFormat(val)
  },
  {
    name: 'total_price',
    align: 'center',
    label: 'Valor total',
    field: 'total_price',
    format: (val: never) => currencyFormat(val)
  }
])
onMounted(() => {
  api.get('/purchase/' + props.purchase_id).then((response) => {
    rows.value = response.data.purchase.items
  })
})
</script>

<template>
  <q-table
    title="Items"
    :rows="rows"
    :columns="columns"
    row-key="name"
  />
</template>

<style scoped>

</style>
