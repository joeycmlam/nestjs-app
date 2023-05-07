import { Controller, Get } from '@nestjs/common';
import { Account } from '../dto/account.dto';
import AccountService from "../service/account.service";

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

}
