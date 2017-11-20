spirit.setup().then(() => { // load from CDN
  // your code here..
  // for example spirit.create({...})  
    
    spirit.load('../json/animation-test.json').then(groups => {
      groups.each((group) => {
        group.construct().play() 
      })
    })

})

