const app = Vue.createApp({
    data() {
        return {
            logo: 'ROKKETT',
            imagenlogo: 'https://png.pngtree.com/png-clipart/20230102/original/pngtree-cartoon-illustration-red-rocket-png-image_8856222.png',
            idAlf: "",
            nombre: '',
            apellido: '',
            error: " "
        };
    },
  
    methods: {
      submitForm() {
        error = "Ingrese su nombre";
      }
    },

    computed: {
      generarId(){
        if ({
          nombre: !String.Empty,
          apellido: !String.Empty
        })
        this.idAlf = this.nombre + this.apellido + Math.random().toString(36);
      }
    }
});