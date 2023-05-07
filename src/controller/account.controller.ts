import { Controller, Get } from '@nestjs/common';
import { Account } from '../entity/account.entity';
import AccountService from "../service/account.service";

@Controller('accounts')
export class AccountController {
    private readonly acctService: AccountService;
    constructor(accountService: AccountService) {
        this.acctService = accountService;
    }

    @Get()
    async getAccounts(): Promise<Account[]> {
        return this.acctService.findAll();
    }
}
