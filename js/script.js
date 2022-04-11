// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function Converts Fehrenheit to Celsius.
 */
function calculate() {
  // input
  const fehrenheit = parseInt(document.getElementById('fehrenheit').value)


  // process
  const celsius = (fehrenheit - 32) * 5/9 


  // output
  document.getElementById('area').innerHTML = 'The Celsius temperature is: ' +  celsius.toFixed(2) + ' °C'
}
