# node-generate-csv

[![npm version](https://img.shields.io/npm/v/json.sortify.svg)](https://www.npmjs.com/package/node-generate-csv)

This package intelligently orders the export to CSV

## Install as an NPM module

```bash
$ npm install node-generate-csv
```

### Usage

```TypeScript
import { CreateExportCSV } from 'node-generate-csv'
```

or

```JavaScript
const { CreateExportCSV } = require('node-generate-csv');
```

## How to use

### Basic

```TypeScript

interface DataType {
    year: number;
    name: string;
    hasADog?: boolean;
    hasACat?:boolean
}

const data: DataType[] = [
    {
        year: 25,
        name: "Ana"
    },
    {
        year: 50,
        name: "Thomas"
    },
    {
        year: 18,
        name: "Louise"
    },
    {
        year: 20,
        name: "Alex"
    },
    {
        year: 46,
        name: "Mark",
        hasADog: true, //Optional parameter
    },
    {
        year: 38,
        name: "Mariia",
        hasACat: false, //Optional parameter
    }
 ]

new CreateExportCSV<DataType>(data, 'tmp/testfile') //If you add a folder, you must separate it with "/" and you will find it
```

### Output
```Text
year,name,hasADog,hasACat
25,Ana,,,
50,Thomas,,,
18,Louise,,,
20,Alex,,,
46,Mark,true,,
38,Maria,,false
```


