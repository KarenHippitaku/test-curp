module.exports = (givenPath, options) => { //let´s export the whole thing from the beginning

  'use strict';

  return new Promise((resolve) => {

		const fs = require('fs'); //The file system module
		const path = require('path');  //The path module provides utilities for working with file and directory paths *Windows-style paths* :C
		// const url = require('url');  //The url module provides utilities for URL resolution and parsing
    const chalk = require('chalk'); //The color thingy

		const cwd = process.cwd(); //Returns the directory of the process

		let directoryFL = [];  //bunch of files in some folder
		let curpsCollection = [];  //bunch of curps contained in the file
		let parsedCurps = [];  //Let´s count! One curp, two curps, thrrrrrree curps
		let validatedCurps = [];  //The bunch of curps but with status ok/fail

    const readDirectory = (givenPath) => {
      return new Promise((resolve, reject) => {
        fs.readdir(givenPath, 'utf-8', (err, files) => {
          return err ? reject(err) : resolve(files);
        });
      });
    };

    const readFile = (givenPath) => {
      return new Promise((resolve, reject) => {
        fs.readFile(givenPath, 'utf-8', (err, file) => {
          return err ? reject(err) : resolve(file);
        });
      });
    };

    const filterDirectory = (files) => {
      files.forEach((element) => {
        if (path.extname(element) === '.txt') {
          directoryFL.push(element);
        }
        return directoryFL;
      });
    };

    const getCurps = (txtFile) => {

      txtFile = txtFile.split('\n');

      txtFile.forEach(element => {
        const matchCurp = /\w*$/gi;
        // const matchCurp = /\w{18}$/gi;
        let matchedCurps = element.match(matchCurp);

        if (matchedCurps !== null) {
          let lineNumber = txtFile.indexOf(element) + 1;
          curpsCollection.push(matchedCurps, lineNumber);
        }
      });
      return curpsCollection;
    };

    const parseCurps = (curpsCollection) => {
      curpsCollection.forEach((element) => {
        let linNumber = element.lineNumber
      })
      return parsedCurps;
    }

			givenPath = path.resolve(cwd, givenPath);

			if (fs.existsSync(givenPath)) {

				if (path.extname(givenPath) === ".txt") {

					readFile(givenPath, options);

				} else if (path.extname(givenPath) === "") {

					getDirectoryFiles(givenPath);

				} else {

					console.log(chalk.red.inverse(`\n\tOH, OH! Este programa sólo lee archivos de texto tipo (*.txt)\n`));

				}

			} else {

				console.log(chalk.red.inverse(`\n\tOH NO! Tu ruta no es válida, comprueba que lleve a un archivo tipo (*.txt) o carpeta.\n`));

			}

		};

		validatePath(givenPath);

	});

};

 // do I need a funtion per option? one to validate, one to get stats (this may need http client operation)
// /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
// state options: AS BC BS CC CS CH DF CL CM DG GT GR HG JC MC MN MS NT NL OC PL QO QR SP SL SR TC TS TL VZ YN ZS
 //1. Recibe a path and options {
 // *We need an array for the files and one for the links, another for the validatied links
 // and one more for the stats links*
  //1.1 Validate given path (it can result in true or false)
  //1.2 If false, prints error and finish the program
  //1.3 If true, is it a directory or a file? {
    //2. If directory, get list of files {
    //2.1 Read list
    //2.2 Filter by "md" extension (it can result in true or false)
    //2.3 if false, finish the program
    //2.4 If true, print list of found files (give select file option, pls)
    // }
    //3. If file, read file {
    //3.1 Searches for links in every line (RegExp)
    //3.2 Adds every link to the array .push()
    //3.3 Reading Ends when the lines end
    //3.4 Prints the array
    // }
  // }
  //4. Validate options {
    //4.1 If there is no option given, just prinst the array with Links
    //4.2 When the option is --validate, for each element,  output ok(200) if true and fail(404) if false
    // 4.2.1
    // 4.2.2 re-prints the new array
    // 4.2.3 finishes
    // 4.3 When the option is --stats, parses all links after validation
    // 4.3.1 output total, unique and broken
    // }
//}
