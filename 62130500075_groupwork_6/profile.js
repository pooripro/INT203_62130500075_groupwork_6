const constraints = {
    firstname: {
        presence: true,
    },

    lastname: {
        presence: true,
    },

    age: {
        presence: true,
    }
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            age: null,
            url: './images/me.jpg',
            errors: null,
        }
    },
    methods: {
        checkForm(e) {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                age: this.age
            },
                constraints)

            if(this.errors){
                e.preventDeault();
            }
            
            if (!this.errors) {
                alert("Registered successfully.")
            }
        }

    }
});

app.mount('#app')
