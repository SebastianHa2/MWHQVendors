if(this.fbUser.email==='dawidhaczela@gmail.com' || this.fbUser.email === 'sebastian@tangle.io'){
    $setUser('email', 'hetal.dave@insidejigsaw.com')

    // $setUser('email', this.fbUser.email )
}
else{
$setUser('email', this.fbUser.email)}
// $setUser('email', 'alexandra@allweare.com')

window.excelToJsDate =      function(date) {
        let dated = new Date(Math.round((date - 25569)*86400*1000));

        return moment(dated).format('MM/DD/YYYY')
    }


// window.blobToBase64 = async function(blob, payload) {
//   const reader = new FileReader();
//   reader.readAsDataURL(blob);
//   return new Promise(resolve => {
//     reader.onloadend = () => {

//       resolve(reader.result);
//     };
//   });
// };

// window.sendEmailToVendor = async function(payload) {
//   let d = await $vm.$wfGetData('-NNME5iKY51p9R5FWjFq', payload)

//   console.log(d)
// }



