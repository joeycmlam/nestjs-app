import { Entity, Column, PrimaryColumn, UpdateDateColumn } from 'typeorm';

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
