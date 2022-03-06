// COLLEGAMENTO VUEJS
const app = new Vue({
  el: "#root",
  data: {
    email: 10,
    emailList: [],
  },
  created() {
    for (let i = 0; i < this.email; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          if (res.data.success) {
            this.emailList.push(res.data.response);
            console.log(this.emailList);
          }
        });
    }
  },
});

console.log(app);
