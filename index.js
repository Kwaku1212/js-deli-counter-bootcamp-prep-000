
function takeANumber(katzDeliLine, name){
  var katzDeli = []
  for(var i = 0; i < katzDeliLine.length; i++){
    var results = (`Welcome, ${name}. You are number ${katzDeliLine[i]} in line.`)
    katzDeli.push(results)
  }
  return katzDeli
}