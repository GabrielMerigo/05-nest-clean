export abstract class HashComparer {
  abstract compare(plainPassword: string, dbPassword: string): Promise<boolean>;
}