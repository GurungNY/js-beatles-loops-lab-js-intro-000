function theBeatlesPlay(musicians, instruments) {
  const arr = []

   for (const i = 0; i < musicians.length; i++ ) {
     if
      arr.push('${musicians[i]} plays ${instruments[i]}')
    }

  return arr
}


function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push('${facts[i]}!!!')
    i++
  }

  return shoutedFacts
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
