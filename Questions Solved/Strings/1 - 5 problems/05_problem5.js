let st = "I am Learning JavaScript";
/* The Core Difference b/w Methods */

console.log(st.length);

console.log(st.slice(4,10));
// Slice string from starting index to end index
// But allows Negative Slicing
//Returns empty string if starting index is greater than last Index

console.log(st.substring(9, 15));
// Slice string from starting index to end index
// Does Not Support Negative Slicing
//

console.log(st.substr(10, 14));
//