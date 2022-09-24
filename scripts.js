listaTarefas = []

const TodoList = {

    data() {
        return {
            listaTarefas: window.listaTarefas,
            newTarefa: {
                done: false
            }
        }
    },
    methods: {
        addtarefa(){
            if(this.newTarefa.text){
                this.listaTarefas.push(this.newTarefa)
                //limpar o input
                this.newTarefa = {
                    done: false
                };

                
                //Armazenar no localStorage
                localStorage.setItem(" tarefas ", JSON.stringify(this.listaTarefas));
            }else{
                alert("[ERRO] Campo vazio!")
            }
            
        },
        clearTarefa(){
            this.listaTarefas = []
        },
        storeListaTarefas (){
            
            localStorage.setItem(" tarefas ", JSON.stringify(this.listaTarefas));
        }
        
    },
    mounted() {
        this.listaTarefas = localStorage.getItem(" tarefas ") ? JSON.parse(localStorage.getItem(" tarefas ")) : this.listaTarefas = []
    },
}







Vue.createApp(TodoList).mount('#app');