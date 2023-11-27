import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'

export class BcryptHasher implements HashGenerator, HashComparer {
  hash(plain: string): Promise<string> {
    return this.hash(plain)
  }

  compare(plainPassword: string, dbPassword: string): Promise<boolean> {
    return this.compare(plainPassword, dbPassword)
  }
}
