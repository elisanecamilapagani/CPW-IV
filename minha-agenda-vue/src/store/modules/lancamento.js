const moduloLancamentos = {
    state: {
        contatos: [
            {
               id: Math.random().toString(36).substr(2,5),
               nome: "Raquel",
               telefone: "67 99999-9999",
               email: "raquel@gmail.com"
            },

            {
                id: Math.random().toString(36).substr(2,5),
                nome: "Eloisa",
                telefone: "67 99999-9999",
                email: "elo@gmail.com"
             },

             {
                id: Math.random().toString(36).substr(2,5),
                nome: "Cristiane",
                telefone: "67 99999-9999",
                email: "cris@gmail.com"
             },
        ],
    },
    getters: { 
        todosLancamentosContato: state => state.contatos,
    },
    actions: {
        salvarContato: ( {commit}, contato) =>{
            commit("adicionarContato", contato);
        },
        excluirContato: ({commit}, id ) =>{
            commit("removerContatos", id);
        }
    },
    mutations: { 
        adicionarContato: (state,contato) => 
        state.contatos.unshift(contato), 


        removerContatos: (state,id) =>
        state.contatos= 
        state.contatos.filter(contato =>contato.id !==id)
    }, 
  
};

export default moduloLancamentos;