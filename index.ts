import * as fs from "fs";
import path from "path";



/**
 * Create CSV by object or JSON file
 *
 * @param arg - Data of object for generate CSV
 * @param filename - Name to export file (include name folder)
 */
export class CreateExportCSV<T extends {}> {
  constructor(public arg: T[], public filename: string) {
    this.csvFactory(this.arg, this.filename);
  }

  public getString: string = "";

  private csvFactory(arg: T[], nameFile: string) {
    let titlesCsv: any[] = [];
    let valuesCsv: any[] = [];
    arg.map((a) => {
      titlesCsv.push(Object.keys(a));
    });
    const title = [...new Set(titlesCsv.flat())];
    const values = arg.map((a) => Object.values(a));

    for (let i = 0; i < values.length; i++) {
      let initArray = [];
      for (let j = 0; j < title.length; j++) {
        if (arg[i][title[j] as keyof T] !== undefined) {
          initArray.push(
            `${arg[i][title[j] as keyof T]}`
          );
        } else {
          initArray.push("");
        }
      }
      valuesCsv = [...valuesCsv, initArray.join(",") + ","];
    }

    const data: string = [title.join(",") + ",", ...valuesCsv].join("\n");

    this.getString = data.split("\n").join("");

    fs.writeFile(
      path.resolve(process.cwd() + `/${nameFile}.csv`),
      data,
      async (err) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("CSV created! 😎🤟");
      }
    );
  }
}