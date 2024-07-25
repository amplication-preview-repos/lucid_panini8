import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VolunteerModuleBase } from "./base/volunteer.module.base";
import { VolunteerService } from "./volunteer.service";
import { VolunteerController } from "./volunteer.controller";
import { VolunteerResolver } from "./volunteer.resolver";

@Module({
  imports: [VolunteerModuleBase, forwardRef(() => AuthModule)],
  controllers: [VolunteerController],
  providers: [VolunteerService, VolunteerResolver],
  exports: [VolunteerService],
})
export class VolunteerModule {}
