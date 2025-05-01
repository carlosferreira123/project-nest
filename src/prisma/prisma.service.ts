import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";

@Injectable()
export class PrismaService 
extends PrismaClient 
implements OnModuleInit, OnModuleDestroy {

  constructor() {
    super({
      log: ['warn', 'error']
    })
  }

  onModuleDestroy() {
   return this.$connect()
  }

  onModuleInit() {
    return this.$disconnect
  }
}