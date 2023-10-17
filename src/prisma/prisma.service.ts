import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor () {
    super({
      log: ['error', 'info']
    })
  }

  // Chama esse método quando o módulo que usa esse prismaService iniciar
  onModuleInit() {
    return this.$connect();
  }

  // Chama esse método quando o módulo que usa esse prismaService for destruído
  onModuleDestroy() {
    return this.$disconnect();
  }
}