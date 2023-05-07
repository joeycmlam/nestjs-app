import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../dto/account.dto';

@Injectable()
export default class AccountService {
    private acctRepo: Repository<Account>;
    constructor(@InjectRepository(Account) accountRepository: Repository<Account>) {
        this.acctRepo = accountRepository;
    }

    public async findAll(): Promise<Account[]> {
        return this.acctRepo.find();
    }
}
