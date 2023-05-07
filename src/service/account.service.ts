import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Account} from '../dto/account.dto';
import HoldingDTO from "../dto/holding.dto";

@Injectable()
export default class AccountService {
    private acctRepo: Repository<Account>;
    constructor(@InjectRepository(Account) accountRepository: Repository<Account>) {
        this.acctRepo = accountRepository;
    }

    public async findAll(): Promise<Account[]> {
        return this.acctRepo.find();
    }

    public async findHoldingsByAccountCd(accountCd: string): Promise<HoldingDTO[]> {
        const query = `
      SELECT acc.account_cd, acc.account_nm, h.stock_cd, h.exchange, h.unit, h.book_cost
      FROM account acc
      INNER JOIN holding h ON h.account_cd = acc.account_cd
      WHERE acc.account_cd = $1
    `;
        return await this.acctRepo.query(query, [ accountCd ]);
    }
}
