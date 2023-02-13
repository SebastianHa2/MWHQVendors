if(this.fbUser.email==='dawidhaczela@gmail.com' || this.fbUser.email === 'sebastian@tangle.io'){
    $setUser('email', 'maryam@daskafashion.com')

    // $setUser('email', this.fbUser.email )
}
else{
$setUser('email', this.fbUser.email)}
// $setUser('email', 'alexandra@allweare.com')


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



