<script setup lang="ts">
import { ref } from 'vue';

const groups = ref([
  ['1', 'do', 'C'],
  ['2', 're', 'D'],
  ['3', 'mi', 'E'],
  ['4', 'fa', 'F'],
  ['5', 'sol', 'G'],
  ['6', 'la', 'A'],
  ['7', 'xi', 'B'],
])


const codes: number[] = []

function getRandomNumber(length: number) {
  return Math.floor(Math.random() * length)
}

function getRandomGroup() {
  let num = getRandomNumber(groups.value.length)
  if (codes.length === groups.value.length)
    codes.length = 0
  while (codes.includes(num))
    num = getRandomNumber(groups.value.length)
  codes.push(num)
  return groups.value[num]
}

function reset() {
  show.value = false
  group.value = getRandomGroup()
}

function transform() {
  for (const iterator of groups.value) {
    const name = iterator[2]
    iterator[2] = iterator[1]
    iterator[1] = name
  }
}

const target = ref(1)

const group = ref(getRandomGroup())

const show = ref(false)
</script>

<template>
  <div class="text-center pt-5 text-size-xl font-bold"> Memory alphabet </div>
  <div class="flex-1 flex flex-col pt-10">
    <div class="text-center my-5 py-2 text-size-2xl font-bold" :class="[target !== index && !show && 'opacity-0']"
      v-for="(item, index) in group" :key="item">
      {{ item }}
    </div>
    <div class="flex justify-center gap-5 pt-10">
      <button class="w-20" @click="show = !show">{{ show ? 'hide' : 'show' }}</button>
      <button class="w-20" @click="reset">next</button>
      <button class="w-20" @click="transform">transform</button>
    </div>
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
