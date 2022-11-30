const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [],
            counter: 10,
            temporaryEmails: [],
        }
    },

    methods: {
        fetchEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                this.temporaryEmails.push(response.data.response);
                this.counter--;

                if(this.counter === 0){
                    this.emails = this.temporaryEmails;
                }
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