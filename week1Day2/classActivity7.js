function reverseAString(a){

let b = a.split("")

let c = b.length-1

let g = ""

for (let i = c; i>=0; i--){

g = g+b[i]

}
return g
}

function isPalindrome(a){

    let w = reverseAString(a)

if(a===w){

    console.log("Yes it is Palindrome")
}
else{

    console.log("No it is not a Palindrome")
}

}


isPalindrome("madamk")


