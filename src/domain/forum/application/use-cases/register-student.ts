import { Injectable } from '@nestjs/common'

import { Either, left, right } from '@/core/either'
import { StudentsRepository } from '../repositories/students-repository'
import { HashGenerator } from '../cryptography/hash-generator'
import { StudentAlreadyExistsError } from './errors/student-already-exists-error'
import { Student } from '../../enterprise/entities/student'

interface RegisterStudentUseCaseProps {
  name: string
  email: string
  password: string
}

type RegisterStudentUseCaseResponse = Either<
  StudentAlreadyExistsError,
  {
    student: Student
  }
>

@Injectable()
export class RegisterStudentUseCase {
  constructor(
    private studentRepository: StudentsRepository,
    private hashGenerator: HashGenerator
  ) {}

  async execute({
    name,
    email,
    password,
  }: RegisterStudentUseCaseProps): Promise<RegisterStudentUseCaseResponse> {

    const studentWithSameEmail = await this.studentRepository.findByEmail(email)

    if (studentWithSameEmail) {
      return left(new StudentAlreadyExistsError())
    }

    const hashedPassword = await this.hashGenerator.hash(password);
    const student = Student.create({
      name,
      email,
      password: hashedPassword,
    })

    await this.studentRepository.create(student);

    return right({
      student
    })
  }
}
