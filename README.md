# Electronic Configuration Converter

# Installation

```
$ npm install electronic-config --save
```

# Library usage

```
var electronicConfig = require('electronic-config');

// Bromine
electronicConfig('[Ar] 3d10 4s2 4p5'); // [ 2, 8, 18, 7 ]

// Barium
electronicConfig('[Xe] 6s2'); // [ 2, 8, 18, 18, 8, 2 ]

// Nickel - long notation
electronicConfig('1s2 2s2 2p6 3s2 3p6 3d8 4s2'); // [ 2, 8, 16, 2 ]

// Nitrogen - direct notation
electronicConfig('[N]');
[ 2, 5 ]
```

# CLI Usage

```
// Bromine
$ electronic-config "[Ar] 3d10 4s2 4p5"
>> 2-8-18-7

// Barium
$ electronic-config "[Xe] 6s2"
>> 2-8-18-18-8-2

// Nickel - long notation
$ electronic-config "1s2 2s2 2p6 3s2 3p6 3d8 4s2"
>> 2-8-16-2

// Nitrogen - direct notation
$ electronic-config "[N]"
>> 2-5
```
