// src/account.entity.ts
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('account')
export class Account {
    @PrimaryColumn()
    account_cd: string;

    @Column()
    account_nm: string;

    @Column()
    updated_by: string;

    @UpdateDateColumn()
    updated_dt: Date;
}
