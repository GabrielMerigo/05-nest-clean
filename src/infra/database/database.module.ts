import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaAnswersAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments'
import { PrismaAnswersRepository } from './prisma/repositories/prisma-answers-repository'
import { PrismaAnswersCommentsRepository } from './prisma/repositories/prisma-answer-comments-repository'

import { PrismaQuestionsAttachmentsRepository } from './prisma/repositories/prisma-question-attachments-repository'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { PrismaQuestionsCommentsRepository } from './prisma/repositories/prisma-questions-comments'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { PrismaStudentsRepository } from './prisma/repositories/prisma-student-repository'

@Module({
  providers: [
    PrismaService,
    PrismaAnswersAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswersCommentsRepository,
    PrismaQuestionsAttachmentsRepository,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    PrismaQuestionsCommentsRepository,
  ],
  exports: [
    PrismaService,
    PrismaAnswersAttachmentsRepository,
    PrismaAnswersRepository,
    StudentsRepository,
    PrismaAnswersCommentsRepository,
    PrismaQuestionsAttachmentsRepository,
    QuestionsRepository,
    PrismaQuestionsCommentsRepository,
  ],
})
export class DatabaseModule {}
