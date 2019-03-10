# Pig (dice game)
#### First player to score 100 or more points wins, 3/3/2019
#### By **[Manuel Sande](https://github.com/msanden)**

## Description
A player rolls a die repeatedly on each turn until they decide to "hold" or they roll a 1:
* If the player rolls a 1, they score nothing and lose their turn,
* If they roll any other number, it is added to their turn total and their turn continues,
* If they choose to "hold", their turn total is added to their score, and pass on their turn.

## Specifications
| The program:                                            |  
|:-------------------------------------------------------:|                     
| Generates a random integer between 1-6                  |
| Records nothing on a turn if ONE is rolled              |                          
| Switches player turns if ONE is rolled                  |
| Accumulates points in a turn for any other number rolled|
| Saves the turn total if player "holds"                  |
| Switches player turns on a "hold"                       |
| Declares first player to score 100 points winner        |                    

## Support and contact details
The application has no known bugs. However, contribute or report any issue you encounter [here](https://github.com/msanden/Pig-Dice-Game/issues).

### License
MIT License

Copyright (c) 2019 **Manuel Sande**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
