import { CreateExportCSV } from "../index";

type DataType = {
  year: number;
  name: string;
  role?: string;
};

const data: DataType[] = [
  {
    year: 15,
    name: "Rodrigo",
  },
  {
    year: 18,
    name: "Maria",
  },
  {
    year: 1,
    name: "Emi",
    role: "ADMIN",
  },
  {
    year: 1,
    name: "Emi",
  },
  {
    year: 3,
    name: "Ale",
  },
];

it("Create csv file", () => {
  const getInfo = new CreateExportCSV<DataType>(data, "tmp/test");
  expect(getInfo.getString).toBe(
    `year,name,role,15,Rodrigo,,18,Maria,,1,Emi,ADMIN,1,Emi,,3,Ale,,`
  );
});
