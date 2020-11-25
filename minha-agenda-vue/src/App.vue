
<template>
  <div>
    <Header />


    <div id="container">
      <PainelLacamentoContato />
      <PainelContatoSalvo />
    </div>
  </div>
</template>

<script>
import PainelContatoSalvo from "./components/PainelContatoSalvo.vue";
import PainelLacamentoContato from "./components/PainelLacamentoContato.vue";
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: { Header, PainelLacamentoContato, PainelContatoSalvo},
};
</script>

<style>
@font-face {
  font-family: "padrao";
  src: url("./fonts/KumbhSans-Bold.ttf");
}

@font-face {
  font-family: "negrito";
  src: url("./fonts/KumbhSans-Regular.ttf");
}
:root {
  --cor-destaque: #8257e5;
  --color-button: #916bea;
  --color-trasicao: #6842c2;
  --color-destaque-do-input: #9871f5;
  --color-input: #f8f8fc;
   --color-border: #e6e6f0;
}

* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  background-color: white;
}

#container {
  display: flex;
  padding: 20px;
}
</style>
