<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from 'boot/axios'
import { currencyFormat, dateTimeFormat } from 'src/services/util'
import PurchaseDetail from 'components/PurchaseDetail.vue'

const loading = ref(false)
const rows = ref([])
const columns = ref([
  {
    name: 'purchased_at',
    align: 'center',
    label: 'Data',
    field: 'purchased_at',
    format: val => dateTimeFormat(val)
  },
  {
    name: 'store',
    align: 'center',
    label: 'Local',
    field: 'store',
    sortable: false
  },
  {
    name: 'amount',
    align: 'center',
    label: 'Valor Total',
    field: 'amount',
    format: (val: never) => currencyFormat(val)
  },
  {
    name: 'tax',
    align: 'center',
    label: 'Imposto',
    field: 'tax',
    sortable: false
  },
  {
    name: 'items_count',
    align: 'center',
    label: 'Total de items',
    field: 'items_count',
    sortable: false
  }
])
onMounted(() => {
  api.get('/purchase').then((response) => {
    rows.value = response.data.purchases
  })
})
</script>

<template>
  <div class="q-pa-sm text-h4">Lista de compras</div>
  <div class="q-pa-md">
    <q-table
      dense
      table-header-class="bg-primary text-white text-h5"
      :rows="rows"
      :columns="columns"
      row-key="id"
      separator="cell"
      :loading="loading"
      :rows-per-page-options="[20]"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="orange-10"/>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <purchase-detail v-if="props.expand" foo="789" :purchase_id="props.row.id"/>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped>

</style>
