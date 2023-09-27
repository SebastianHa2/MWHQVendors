return function(VueSelect){

      console.log('vue', VueSelect)

      return VueSelect.search.length > 2 && VueSelect.open
}