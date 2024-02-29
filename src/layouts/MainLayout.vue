<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>
        <q-item
          :to="{name: 'purchases'}"
        >
          <q-item-section
            avatar
          >
            <q-icon name="money" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Compras</q-item-label>
            <q-item-label caption>Listagem</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          :to="{name: 'newPurchase'}"
        >
          <q-item-section
            avatar
          >
            <q-icon name="money" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastrar Compra</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          :to="{name: 'purchaseItems'}"
        >
          <q-item-section
            avatar
          >
            <q-icon name="money" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lista items</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
