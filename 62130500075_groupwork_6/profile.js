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
        checkForm() {
            this.errors = validate({ firstname: this.firstname }, constraints)
            if (!this.firstname) {
                this.errors.push('First name required.')
            }
            if (!this.lastname) {
                this.errors.push('last name required.')
            }
            if (!this.age) {
                this.errors.push('age name required.')
            }
            if (!this.errors) {
                alert("Registered successfully.")
            }
        }

    }
});

app.mount('#app')
