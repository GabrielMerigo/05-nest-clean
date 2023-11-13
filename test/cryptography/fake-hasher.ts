import { HashComparer } from "@/domain/forum/application/cryptography/hash-comparer"
import { HashGenerator } from "@/domain/forum/application/cryptography/hash-generator"

export class FakeHasher implements HashGenerator, HashComparer {
  async hash(plain: string): Promise<string> {
    return plain.concat('-hashed');
  }

  async compare(plainPassword: string, dbPassword: string): Promise<boolean> {
    return plainPassword.concat('-hashed') === dbPassword
  } 
}