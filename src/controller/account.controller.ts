import {Controller, Get, Param} from '@nestjs/common';
import { Account } from '../dto/account.dto';
import AccountService from "../service/account.service";
import HoldingDTO from "../dto/holding.dto";

@Controller('accounts')
export default class AccountController {
    private readonly acctService: AccountService;
    constructor(accountService: AccountService) {
        this.acctService = accountService;
    }

    @Get()
    async getAccounts(): Promise<Account[]> {
        return this.acctService.findAll();
    }

    @Get(':account_cd/holdings')
    async getHoldingsByAccountCd(@Param('account_cd') accountCd: string): Promise<HoldingDTO[]> {
        return await this.acctService.findHoldingsByAccountCd(accountCd);
    }
}
