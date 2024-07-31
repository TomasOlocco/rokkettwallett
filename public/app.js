const app = Vue.createApp({
    data() {
        return {
            logo: 'ROKKETT',
            imagenlogo: 'https://png.pngtree.com/png-clipart/20230102/original/pngtree-cartoon-illustration-red-rocket-png-image_8856222.png',
            idAlf: '',
            nombre: "",
            apellido: "",
            errorVacio: "",
            error: "Algo ocurrió mal"
        };
    },
  
    methods:
    {
      axiosBD(){
        const apiClient = axios.create({
          baseURL:  'https://laboratorio-36cf.restdb.io/rest/ ',
          headers: { 'x-apikey': '64a5ccf686d8c5d256ed8fce'}
        })
        return apiClient;
      },
      mostrarTransacciones(){
        const apiClient = thus.axiosBD();
        apiClient.get('')
        .then(res => {
        if(res.data.length > 0){
          this.transacciones = res.data;
        }
        else{
          console.log("No hay transacciones")
        }
      })
      .catch(error =>{
        console.error(error);
      });
    },
      submitForm() {
        this.errorVacio = "Ingrese su nombre";
        return this.errorVacio;
      }
    },

    computed: {
      generarId(){
        if ({
          nombre: !String.Empty,
          apellido: !String.Empty
        })
        this.idAlf = this.nombre + this.apellido + Math.random().toString(36).substring(2,9);
        else{
          this.errorVacio = "Ingrese su nombre";
        }
      }
      
  }
});