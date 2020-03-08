class Formatter {
  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(string){
    let wordArray = string.split(" ")
    const capitalizedArray = wordArray.map(function(word) { 
      if (!word.match(/^(the|a|an|but|of|and|for|at|by|from)$/)){
        return Formatter.capitalize(word)
        console.log(word)
      }
      else {return word}
    })
    console.log(capitalizedArray)
    return Formatter.capitalize(capitalizedArray.join(" "))
  }

}