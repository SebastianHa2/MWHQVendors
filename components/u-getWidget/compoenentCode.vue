<template>
  <div>
    <b-button @click="getWidgetPDF">Get widget</b-button>
  </div>
</template>

<script>
module.exports = {
  props: {},
  data() {
    return {
    }
  },
  methods:{
  getWidget(){
    this.$bus.$emit('getWidgetAsBase64', '-NLvNVP5YZUOttTkXkng', (data)=>{console.log(data)})
  },
  getWidgetPDF() {
      let dataVendorPDF
      console.log('ok')
      
      //this.$bus.$emit('getWidgetAsPDF', '-NLvNVP5YZUOttTkXkng', (data) => {
      this.$bus.$emit('getWidgetAsPDF', '-NNXhe0mn9LuQj7ixUcg', (data) => {
       dataVendorPDF=data
     
      console.log(data)

      this.blobToBase64(data, async function(base64) {

        console.log('base 64 is, ', base64)
        console.log('about to send email')
        let payload = {
          email:'sebastian@tangle.io',
          total: 200,
          month:'December',
          base64data: base64
        }

        //let d = await $wfGetData('-NNME5iKY51p9R5FWjFq', payload)
        window.sendEmailToVendor(payload)
        //console.log(d)

        
      })

      
        
      })
        setTimeout(() => {
  

}, 10000);
    // this.$bus.$emit('downloadWidgetAsPDF', '-NLvNVP5YZUOttTkXkng')
    },

    blobToBase64(blob, callback) {
        var reader = new FileReader();
        reader.onload = function() {
            var dataUrl = reader.result;
            var base64 = dataUrl.split(',')[1];
            callback(base64);
        };
        reader.readAsDataURL(blob);
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
}
</script>

<style>
</style>
