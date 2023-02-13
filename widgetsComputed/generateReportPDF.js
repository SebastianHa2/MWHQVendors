return async function(){
      let dataVendorPDF
const result= await this.$bus.$emit('getWidgetAsPDF', '-NLvNVP5YZUOttTkXkng', (data) => {
  
let link = URL.createObjectURL(data)
     window.open(link)
      })
// Convert HTML content to PDF

  // Expected output: "resolved"



     setTimeout(() => {
//   $setUser('dataVendorPDF', dataVendorPDF);
// console.log(dataVendorPDF)
// $setUser('dataPdf', dataVendorPDF)
// console.log($getUser('dataPdf'))
}, 10000);

}