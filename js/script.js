const {createApp} = Vue;

createApp({
    data(){
        return{

        }
    },

    methods: {
        fetchEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(response){
                console.log(response.data.response)
            })
        }
    },

    mounted(){
        this.fetchEmails();
    }
}).mount("#app");