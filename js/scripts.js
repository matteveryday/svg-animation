spirit.setup().then(() => { // load from CDN
  // your code here..
  // for example spirit.create({...})  
  
  spirit.load('../json/animation-test.json').then(groups => {
    groups.at(0).construct().play() // play first group
  })
  spirit.create({"version_app":"0.11.12","version_extension":"1.2.11","version_runtime":"2.0.6","groups":[{"name":"animation-test","timeScale":1,"timelines":[{"type":"dom","props":{"scaleX":{"0s":"1","0.5s":"1.8","1s":"1","1.7546542553191489s":"1"},"scaleY":{"0s":"1","0.5s":"2.2","1s":"1","1.7546542553191489s":"1"}},"label":"rectangle-small","path":"div[1]/div[1]/div[2]/div[1]/*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='rect'][2]"}]},{"name":"animation-three","timeScale":1,"timelines":[{"type":"dom","props":{"opacity":{"0s":"0","0.07180851063829788s":"1","1.5019946808510636s":"1"},"y":{"0s":"30px","0.07047872340425532s":"0px"}},"label":"svg/g/g/g/rect","path":"*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='rect'][1]"},{"type":"dom","props":{"opacity":{"0s":"0","0.25s":"0","0.3191489361702128s":"1","1.5019946808510636s":"1"},"y":{"0.24867021276595744s":"30px","0.3191489361702128s":"0px"}},"label":"svg/g/g/g/rect[2]","path":"*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='rect'][2]"},{"type":"dom","props":{"opacity":{"0s":"0","0.5013297872340425s":"0","0.5771276595744681s":"1","1.5019946808510636s":"1"},"y":{"0.500886524822695s":"30px","0.575354609929078s":"0px"}},"label":"svg/g/g/g/rect[3]","path":"*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='rect'][3]"},{"type":"dom","props":{"opacity":{"0s":"0","0.5s":"0","0.574468085106383s":"1","1.5019946808510636s":"1"},"y":{"0.49933510638297873s":"30","0.5751329787234043s":"0"}},"label":"svg/g/g/g/g/rect","path":"*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='rect'][1]"},{"type":"dom","props":{"opacity":{"0s":"0","0.5s":"0","0.5757978723404256s":"1","1.5019946808510636s":"1"},"y":{"0.49933510638297873s":"30px","0.5751329787234043s":"0px"}},"label":"svg/g/g/g/g/path","path":"*[local-name()='svg'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='g'][1]/*[local-name()='path'][1]"}]}]}).then(groups => {
  groups.at(0).construct().play() // play first group
})
  
})

