<template>
    <button @click="onClick">MyButton</button>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Prop, Emit } from 'vue-property-decorator';
  @Component
  export default class MyButton extends Vue {
    @Prop()
    public greet?: string;

    @Emit()
    public click() {}

    public onClick(){
      alert(this.greet);
      this.click();
    }
  }
</script>

<style scoped>

</style>