var doc = "Hey, hey hey there man!";
var punctuation = "./?!@#$%^&*()-_,'\"][=<>+:;`~{|}";

// filtered out spaces and punctuation, now array of str words
var filteredDoc = doc.split("")
    .filter((n) => punctuation.indexOf(n) === -1)
    .join("").split(" ").sort();

// filteredDoc.sort();
console.log(filteredDoc);

// loop through to see how many there was
// filteredDoc.map(word => )

var indices = [];
var idx = filteredDoc.indexOf(filteredDoc[0]);
console.log(filteredDoc[0]);
while (idx != -1) {
    indices.push([filteredDoc[0], idx]);
    idx = filteredDoc.indexOf(filteredDoc[0], idx + 1);
}
var count = indices.length;
console.log(count);
var wordCount = [filteredDoc[0], count];
console.log(wordCount);