# _Pig Latin Translator_

#### By _**Nick Sullivan**_

#### _A program too receive text and translate it into Pig Latin_

## Technologies Used

* __

## Description

__

### Expected Outputs
* _pig latin => igpay atinlay_
* _another wonderful world => anotherway onderfulway orldway_
* _cats are great => atscay areway eatgray_
* _queen => eenquay_

## Setup Instructions

* _Open your terminal and navigate to the folder you'd like to download the files into._
* _Run the command below_
> git clone https://github.com/nicholassull/portfolio-landing
* _Open index.html_


## Known Bugs

* _No known bugs at this time._

## Tests Performed
```
Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"
```
```
Describe: pigLatin()
Test: It will recognize vowels and return true
Code: pigLatin("away")
Expected Output: true
```
```
Describe: pigLatin()
Test: It will recognize the vowels on index(0).
Code: pigLatin("away")
Expected Output: "a"
```
```
Describe: pigLatin()
Test: It will add "way" when first index is [aeiou] 
Code: pigLatin("away")
Expected Output: awayway
```
Describe: pigLatin()
Test: It will notify the first two letter "qu" and then sliced , then added "ay"
Code: pigLatin(quit")
Expected Output: itquay

Describe: pigLatin()
Test: It will look for vowel, look the index and use it for the substring to cut the word then add "ay." 
Code: pigLatin(latin")
Expected Output:atinlay 

 

## License

Copyright (c) _10/27/2021_ _by Nick Sullivan_


_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._