
declare class CreateExportCSV<T extends {}> {
  public getString: string;
  private csvFactory(arg: T[], nameFile: string): void;
}
