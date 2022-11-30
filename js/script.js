const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [],
        }
    },

    methods: {
        fetchEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                //console.log(response.data.response);
                this.emails.push(response.data.response);
            })
        },

        generateEmailsArray(){
            for (let i = 0; i < 10; i++) {
                this.fetchEmails();
            }
        }
    },

    mounted(){
        this.generateEmailsArray()
    }
}).mount("#app");