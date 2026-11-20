//String assignment 01
let s = "Hello World"

let i = s.split(" ")

console.log(i)

let l = i[0].length

console.log(l)

//String assignment 02

let k = " fly me to the moon "

let g = k.trim()

let y = g.split(" ")

console.log(y)

let o = y.length-1

console.log(y[o].length)

////String assignment 03 - is Anagram:

function isAnagram(a,b){

let c = a.trim().toLowerCase()
let d = b.trim().toLowerCase()

let q = c.split("").sort().join()
let w = d.split("").sort().join()

console.log(q)
console.log(w)

if (q==w){
    console.log(true)
}
else{
    console.log(false)
}

}
isAnagram("listen", "silent")

