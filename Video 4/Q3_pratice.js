let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];


// delete Company from start 
companies.shift();

// Remove Uber at index 1 and Replace Ola
companies.splice(1, 1, "Ola");

// Add Amazon at the End
companies.push("Amazon");


console.log(companies);