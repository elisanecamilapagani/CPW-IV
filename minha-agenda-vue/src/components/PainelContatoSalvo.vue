<template>
  <div id="areaLancamentos">
    <LancamentoContato
      v-for="contato in todosLancamentosContato"
      v-bind:key="contato.id"
      :contato="contato"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LancamentoContato from "./LancamentoContato.vue";
export default {
  name: "PainelContatoSalvo",
  data: () => {
    return {};
  },
  computed: mapGetters(["todosLancamentosContato"]),
  components: {
    LancamentoContato,
  },
  props: {
    contato: Object,
  },
};
</script>

<style scoped>
#areaLancamentos {
  width: 50%;
  padding: px;
  background-color: rgb(240, 235, 235);
  border-radius: 20px;
}
</style>