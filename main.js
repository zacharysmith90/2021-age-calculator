function age_calculator(member, name, age) {
	return `My ${member}, ${name}, is ${age} years old (${age*12} months.)`
}

console.log(age_calculator("mother", "Doryce", 60))

console.log(age_calculator("sister", "Rebecca", 29))

console.log(age_calculator("brother-in-law", "Miguel", 28))