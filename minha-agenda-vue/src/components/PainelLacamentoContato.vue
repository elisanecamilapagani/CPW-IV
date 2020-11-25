<template>
  <div id="PainelLancamento">
    <div id="formularioContatos">
      <form @submit="salvar">
        <div class="input-block">
          <label for="nome">Nome</label>
          <input type="text" name="nome" id="nome" v-model="nome" required />
        </div>

        <div class="input-block">
          <label for="nome">Telefone</label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            v-model="telefone"
            required
          />
        </div>
        <div class="input-block">
          <label for="nome">E-mail</label>
          <input type="text" name="email" id="email" v-model="email" />
        </div>
        <button>Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Lancamento from "../models/Lancamento";

export default {
  name: "PainelLacamentoContato",
  data: () => {
    return {
      nome: " ",
      telefone: " ",
      email: " ",
    };
  },
  methods: {
    ...mapActions(["salvarContato"]),
    salvar(event) {
      event.preventDefault();
      const contato = new Lancamento(this.nome, this.telefone, this.email);
      this.salvarContato(contato);
    },
  },
};
</script>

<style scoped>
#PainelLancamento {
  width: 40%;
  padding: 20px;
  font-family: "negrito";
  font-size: 20px;
}
#formularioContatos {
  background-color: white;
  border-radius: 20px;
  padding: 20px;

}
.input-block {
  position: relative;
}

#nome,
#telefone,
#email {
  display: block;
  margin-bottom: 10px;
  width: 50%;
  height: 15px;
  font-size: 100%;
  margin-top: 10px;
  border-radius: 10px;
  background: var(--color-input);
  border: 1px solid var(--color-border);
  outline: 0;
  padding: 10px;
}

.input-block:focus-within::after {
  width: calc(50% - 4%);
  height: 2px;
  content: "";
  background: var(--color-destaque-do-input);
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
}

button {
  background-color: var(--color-button);
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 20px 10px 10px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
  cursor: pointer;
  transition: 0.3;
    
}
button:hover {
  color: var(--color-trasicao);
}
</style>