import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VolunteerService } from "./volunteer.service";
import { VolunteerControllerBase } from "./base/volunteer.controller.base";

@swagger.ApiTags("volunteers")
@common.Controller("volunteers")
export class VolunteerController extends VolunteerControllerBase {
  constructor(
    protected readonly service: VolunteerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
