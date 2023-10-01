<template>
  <q-page class="row items-center justify-evenly">
    <example-component v-if="false"
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    <div class="row">
      <br>
      <q-input outlined bottom-slots v-model="percentual" label="Quanto é">
        <template v-slot:append>
          %
        </template>
      </q-input>
      <q-input outlined bottom-slots v-model="valueInput" label="de">
        <template v-slot:after>
          <q-btn round dense flat icon="send" @click="calculate1()" />
        </template>
      </q-input>
      <br>
      <h4>{{result}}</h4>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/ExampleComponent.vue'
import { ref } from 'vue'
const percentual = ref('')
const valueInput = ref('')
const result = ref('')
const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
])
function calculate1 () {
  result.value = (percentual.value / 100) * valueInput.value
}
const meta = ref<Meta>({
  totalCount: 1200
})
</script>
