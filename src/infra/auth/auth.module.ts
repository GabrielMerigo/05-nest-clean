import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { APP_GUARD } from '@nestjs/core'

import { JwtStrategy } from './jwt.strategy'
import { JwtAuthGuard } from './jwt-auth.guard'
import { env } from '../env'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      global: true,
      useFactory() {
        const privateKey = env.JWT_PRIVATE_KEY
        const publicKey = env.JWT_PUBLIC_KEY

        return {
          signOptions: { algorithm: 'RS256' },
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
        }
      },
    }),
  ],
  providers: [
    JwtStrategy,
    {
      useClass: JwtAuthGuard,
      provide: APP_GUARD,
    },
  ],
})
export class AuthModule {}
