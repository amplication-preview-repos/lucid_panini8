/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Member as PrismaMember,
  Donation as PrismaDonation,
} from "@prisma/client";

export class MemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MemberCountArgs, "select">): Promise<number> {
    return this.prisma.member.count(args);
  }

  async members(args: Prisma.MemberFindManyArgs): Promise<PrismaMember[]> {
    return this.prisma.member.findMany(args);
  }
  async member(
    args: Prisma.MemberFindUniqueArgs
  ): Promise<PrismaMember | null> {
    return this.prisma.member.findUnique(args);
  }
  async createMember(args: Prisma.MemberCreateArgs): Promise<PrismaMember> {
    return this.prisma.member.create(args);
  }
  async updateMember(args: Prisma.MemberUpdateArgs): Promise<PrismaMember> {
    return this.prisma.member.update(args);
  }
  async deleteMember(args: Prisma.MemberDeleteArgs): Promise<PrismaMember> {
    return this.prisma.member.delete(args);
  }

  async findDonations(
    parentId: string,
    args: Prisma.DonationFindManyArgs
  ): Promise<PrismaDonation[]> {
    return this.prisma.member
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .donations(args);
  }
}
