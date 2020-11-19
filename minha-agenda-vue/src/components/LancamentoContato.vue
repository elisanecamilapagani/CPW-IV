<template>
  <div class="descricaocontato">
    <span class="nome">{{ lancamento.nome }}</span>
    <span>{{ lancamento.telefone }}</span>
    <span>{{ lancamento.email }}</span>
  </div>

  
</template>

<script>

export default {
  name: "LancamentoContato",
  props: {
    lancamento: Object,
  },
};
</script>

<style scoped>
.blocoLancamento {
  text-align: right;

}
.descricaocontato {
  text-align: right;
  padding: 10px;
}
.descricaocontato span {
  display: block;
}
.nome{
  font-size: 40px;
  font-family: "negrito";
}

</style>