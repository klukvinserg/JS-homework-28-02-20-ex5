let num = prompt('Enter a five digit number');

while (num.length != 5 || isNaN(num)) {
   alert('Number is not correct');
   num = prompt('Enter a five digit number');
}

a = num[0];
b = num[1];
c = num[2];
d = num[3];
e = num[4];

if (a === e && b === d) {
    alert('This number is palindrome');
} else {
    alert('This number is not palindrome');
}