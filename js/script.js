// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function findFactorial() {
  	// initialize the counter
	let counter = 0
	
	// initialize the final sentence display
	let factorial = ""
	
	// get how many times to repeat
	let factorial = document.getElementById('factorial').value
	
	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)	

	// use a do..while loop to create the final sentence display
	do {
		// build the string of sentences
		factorial = factorial * userNum + "<br>"
		
		//increment the counter
		counter = counter * userNum
	} while (counter < userNum)

  	// return the string of sentences back to html
  	document.getElementById('display-results').innerHTML = factorial
}
