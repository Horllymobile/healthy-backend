import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HealthCenterModule } from './health-center/health-center.module';

@Module({
  imports: [AuthModule, UserModule, HealthCenterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
