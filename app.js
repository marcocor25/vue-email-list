// COLLEGAMENTO VUEJS
const app = new Vue({
    el: '#root',
    data: {

    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (res) {
            console.log(res);
        })
    },
});

console.log(app);