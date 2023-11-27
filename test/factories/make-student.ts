import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Student,
  StudentsProps,
} from '@/domain/forum/enterprise/entities/student'

import { faker } from '@faker-js/faker'

export const makeStudent = (
  override: Partial<StudentsProps> = {},
  id?: UniqueEntityID
) => {
  const student = Student.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...override,
    },
    id
  )

  return student
}
