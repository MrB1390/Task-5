# Task-5

# Resume Data Processing

## Overview

This JavaScript code processes a resume object by converting it to a JSON string and then extracting and displaying information using different looping methods. The code utilizes `for` loop, `for...in` loop, `for...of` loop, and `forEach` method to iterate through the resume data and print key-value pairs.

## File Structure

1. `index.html` - The main HTML file
2. `script.js`: The main JavaScript file containing the code.

## Code Explanation

The code starts by defining a `resume` object with information about a person. It then converts this object to a JSON string using `JSON.stringify()` and proceeds to extract the data in various ways.

- **For Loop:**

  - Iterates through the values of the `resume` object using an index and prints key-value pairs.

- **For...in Loop:**

  - Iterates through the keys of the `resume` object using the `for...in` loop and prints key-value pairs.

- **For...of Loop:**

  - Iterates through an array of keys and prints key-value pairs using the keys to access the corresponding values in the `resume` object.

- **For Each Method:**

  - Uses `Object.entries()` to get an array of key-value pairs, and then applies the `forEach` method to print each pair.

How to Run
----------

1.  Ensure you have a web browser installed on your system.
2.  Open the `index.html` file in a web browser.

## Notes

- Modify the content of the `resume` object as needed for different scenarios.
- Explore and adapt the code for additional functionalities or customization.

Feel free to experiment with the code and tailor it to suit your specific use case.
