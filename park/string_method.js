var sentence = "Hi, my name is Sam!";
var first = sentence.substring(0,3);
var second = sentence.substring(4,19);
var third_end = sentence.substring(15,19);
var third = first.concat(" ", third_end);
var forth = sentence.substring(sentence.indexOf("name"), sentence.indexOf("name") + 4);
var fifth = sentence.substring(sentence.indexOf("Sam"), sentence.indexOf("Sam") + 3);
var str1 = 'JavaScript Program to illustrate split() function'
var split1 = str1.split(" ");
var str2 = '10,20,30,40,50'
var split2 = str2.split(",");