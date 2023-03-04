<script lang="ts" setup>
import { ref } from 'vue';
import { shuffle } from '../../utils'
import { places, colors } from './config'
import type { Place } from './config'
const target = ref<Place>(places[0])
const gamuts = ref<string[]>(shuffle(target.value.gamut))
  random()
function toggle(index: number) {
  target.value = places[index]
  show.value = true
  random()
}

function color(alphabet: string) {
  return colors.find(c => { return alphabet.includes(c[0]) })?.[1]
}

function random() {
  gamuts.value = shuffle(target.value.gamut).filter(v=> !v.includes('#'))
}

const show = ref(true)

</script>

<template>
  <div class="text-center pt-5 text-size-xl font-bold"> Memory alphabet </div>
  <div class="mx-auto flex mt-10 mx-2 max-w-180 gap-1 justify-center">
    <template v-for="place in places" :key="place.node">
      <button class="flex-1 text-center text-size-xs" @click="toggle(place.node - 1)">
        {{ place.type + '-' + place.node }}
      </button>
    </template>
  </div>
  <div class="rounded p-5 flex justify-center">
    <img v-if="show" @click="show = false" class="max-w-180 max-h-100 w-full rounded" :src="target.image" />
    <button v-else @click="show = true">Show Fingering</button>
  </div>
  <div class="mx-auto grid max-w-250 grid-cols-8 text-size-sm rounded overflow-hidden bg-gray-2">
    <div class="h-13 flex justify-center items-center" v-for="alphabet in gamuts"
      :style="{ color: color(alphabet) }">{{ alphabet }}</div>
  </div>
  <div class="flex justify-center mt-8">
    <button @click="random">Random</button>
  </div>
</template>

<style lang="scss" scoped></style>
