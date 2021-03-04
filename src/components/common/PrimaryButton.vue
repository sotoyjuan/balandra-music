<template>
      <button @click="onClick" class="button primary-button py-1 px-3 text-white font-bold text-sm uppercase rounded bg-gradient-to-tr from-red-400 to-yellow-400 hover:bg-opacity-25 focus:outline-none">
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