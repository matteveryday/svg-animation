
spirit.setup().then(() => { // load from CDN
  // your code here..
  // for example spirit.create({...})  
  
  spirit.load('animation-one.json').then(groups => {
  groups.at(0).construct().play() // play first group
})
  
})

