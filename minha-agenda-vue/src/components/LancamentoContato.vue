<template>
  <div class="lancamentoContato">
    <div class="descricaocontato">
      <span class="nome">{{ contato.nome }}</span>
      <span>{{ contato.telefone }}</span>
      <span>{{ contato.email }}</span>
      <button @click="excluirContato(contato.id)" class="botaoRemover">
        <img src="../img/lixeira1.png" alt="excluirContato" />
      </button>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "LancamentoContato",
  methods: mapActions(["excluirContato"]),

  props: {
    contato: Object,
  },
};
</script>

<style scoped>
#lancamentoContato {
  display: flex;
  width: 80%;
  margin: auto;
  border-radius: 15px;
  background-color: white;
  font-family: "padrao";
  padding: 10px;
  justify-content: center;
  margin-bottom: 10px;
}
.descricaocontato {
  text-align: right;
  padding: 10px;
  background-color: white;
  margin: 15px 10px 20px 10px;
}
.descricaocontato span {
  display: block;
  padding-top: 5px;
  padding-right: 25px;
}
.nome {
  font-size: 40px;
  font-family: "negrito";
}

.botaoRemover {
  border: none;
  outline: none;
  vertical-align: middle;
  background-color: white;
}

.botaoRemover:hover {
  cursor: pointer;
}
.botaoRemover img {
  width: 25px;
  float: left;
}
.botaoRemover img:active {
  filter: invert(100%);
}
.lancamentoContato {
  margin: auto;
  margin-bottom: 10px;
  display: table;
  width: 70%;
  border-radius: 20px;
  box-shadow: 3px 3px 3px #cccccc;
}

#primeiraLetra span {
  top: 50px;
  display: table-cell;
  vertical-align: middle;
}
</style>

