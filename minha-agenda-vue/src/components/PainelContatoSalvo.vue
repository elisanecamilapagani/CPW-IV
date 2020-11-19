<template>
  <div class="blocoLancamento">
    <button class="botaoRemover">
      <img src="../img/lixeira1.png" alt="remover Contatos" />
    </button>

    <div id="areaLancamentos">
      <LancamentoContato
      v-for="lancamento in todosLancamentosContato"
      v-bind:key=" lancamento.id"
       :lancamento= "lancamento"
      />
    </div>
  </div>
</template>

<script>
import  {mapGetters} from 'vuex'
import LancamentoContato from "./LancamentoContato.vue";
export default {
  name: "PainelContatoSalvo",
  data: () => {
    return {
      LancamentoContato: [],
    };
  },
  components: {
    LancamentoContato,
  },
  computed: mapGetters([ "todosLancamentosContato"] ),
  
};
</script>

<style scoped>
.blocoLancamento {
  width: 60%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
}
.botaoRemover {
  border: none;
  outline: none;
  background-color: white;
  vertical-align: middle;
}

.botaoRemover:hover {
  cursor: pointer;
}
.botaoRemover img {
  width: 40px;
  float: left;
}
.botaoRemover img:active {
  filter: invert(100%);
}
</style>