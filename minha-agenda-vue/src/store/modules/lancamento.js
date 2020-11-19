const moduloLancamentos = {
    state: {
        lancamentos: [
            {
               id: Math.random().toString(36).substr(2,5),
               nome: "raquel",
               telefone: "67 99999-9999",
               email: "raquel@gmail.com"
            },

            {
                id: Math.random().toString(36).substr(2,5),
                nome: "eloisa",
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
        todosLancamentosContato: state => state.lancamentos,
    },
    actions: {
        salvarContato: ( { commit}, contato) =>{
            commit(" adicionarContato", contato);
        }
    },
    mutations: {
    adicionarContato: ( state, lancamentos) => 
         state.lancamentos.unshitf(lancamentos)
    },
};

export default moduloLancamentos;