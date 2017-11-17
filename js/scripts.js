
spirit.setup().then(() => { // load from CDN
  spirit.load('vectorscaling.json').then(groups => {
  groups.at(0).construct().play() // play first group
}) 
})
