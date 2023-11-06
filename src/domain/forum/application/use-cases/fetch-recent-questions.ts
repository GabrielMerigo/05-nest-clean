import { Either, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Injectable } from '@nestjs/common'

interface FetchRecentQuestionsCaseProps {
  page: number
}

type FetchRecentQuestionsCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>
@Injectable()
export class FetchRecentQuestionsCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsCaseProps): Promise<FetchRecentQuestionsCaseResponse> {;
    const questions = await this.questionsRepository.findManyRecent({ page })

    return right({
      questions,
    })
  }
}
