<script setup lang="ts">
import { ref } from 'vue'
import { api } from 'boot/axios'

const purchase = ref({
  store: 'Sacolão (Rede Qualy)',
  purchased_at: '',
  amount: '',
  tax: '',
  nfce_key_access: '',
  content: '',
  content_write: ''
})

const sendData = () => {
  // console.log(purchase.value.content)
  purchase.value.content_write = purchase.value.content.replace(/\n/g, '\r\n')
  api.post('/purchase', purchase.value).then((response) => {
    console.log(response)
    purchase.value.content = response.status
  })
}
</script>

<template>
  <div class="q-pa-sm text-h4">Cadastro de Purchase</div>
  <div class="q-pa-md">
    <q-form @submit="sendData" method="post">
      <q-input outlined square label="Local" type="text" v-model="purchase.store" name="store"/>
      <br>
      <q-input outlined square label="Quando" type="datetime-local" v-model="purchase.purchased_at" name="purchased_at"/>
      <br>
      <pre>{{purchase.purchased_at}}</pre>
      <q-input outlined square label="Valor" type="number" name="amount" v-model="purchase.amount" step="0.01"/>
      <br>
      <q-input outlined square label="Imposto" type="number" v-model="purchase.tax" name="tax" step="0.01"/>
      <br>
      <q-input outlined square label="Chave nfce" type="text" v-model="purchase.nfce_key_access" name="nfce_key_access" id="nfce_key_access"/>
      <br><br>
      <q-input outlined square
        type="textarea"
        name="content"
        v-model="purchase.content"
        rows="20"
        cols="90"
        placeholder="Comment text."/>
      <div class="text-center q-mt-md">
        <q-btn type="submit" label="Salvar"/>
      </div>
    </q-form>
  </div>
</template>

<style scoped>

</style>
