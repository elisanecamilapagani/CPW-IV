<template>
  <div id="PainelLancamento">
    <div id="formularioContatos">
      <form @submit="salvar">
        <div class="input-block">
          <label for="nome" >Nome</label>
          <input type="text" name="nome" id="nome"
           required v-model="nome"/>
        </div>
        <div class="input-block">
          <label for="nome">Telefone</label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            required
            v-model="telefone"
          />
        </div>

        <div class="input-block">
          <label for="nome">E-mail</label>
          <input type="text" name="email" id="email"  v-model="email"/>
        </div>
        <button>Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Lancamento from '../models/Lancamento';
export default {
    name: "PainelLacamentoContato",
    data: ( )=> {
      return {
        nome: "",
        telefone:"mask",
        email: " ",
      };
    },
 
    methods: {
      ...mapActions([ "salvarContato"]),
    Salvar(event) {
      event.preventDefault( );
     const lancamento = new Lancamento( this.nome, this.telefone, this.email);
     this.salvarContato(lancamento);
    
      
    },
  },
    
}
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
  position: relative; /*isso serve para que o position absolut funciona*/
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
  outline: 0; /* tira cor padrao da selecao quando vc aperta */
  padding: 10px; /* deixa a borda arredondada*/
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