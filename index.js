function theBeatlesPlay(musicians, instruments) {
  var arr = []

   for (var i = 0; i < musicians.length; i++ ) {
      arr.push('${musicians[i]} plays ${instruments[i]}')
    }

  return arr
}


function johnLennonFacts(facts) {
  const newFacts = []

  let i = 0
  while (i < facts.length) {
    newFacts.push('${facts[i]}!!!')
    i++
  }

  return newFacts
}


// function iLoveTheBeatles(num) {
//   const num = []
//
//   do {
//     num.push('I love the Beatles!')
//     num++
//   }
//
//     return num
//   }

  function iLoveTheBeatles (number) {
    var array = []

    do {
      array.push('I love the Beatles!')
      number++
    } while (number < 15)

    return array
  }
