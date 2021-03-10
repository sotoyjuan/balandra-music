<template>
      <button @click="onClick" class="button secondary-button py-1 px-3 text-white font-bold text-sm uppercase rounded bg-gradient-to-tr from-indigo-300 to-purple-400 hover:bg-opacity-25 focus:outline-none">
      <slot></slot>
    </button>

</template>
<script>
export default {
  props: {
    onClick: {
      type: Function,
    }
  }
}
</script>