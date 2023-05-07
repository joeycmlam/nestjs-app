create table account (
    account_cd  varchar(20) unique not null,
    account_nm  varchar(100)    not null,
    updated_by  varchar(20) not null,
    updated_dt  timestamp   not null
);

alter table account add constraint account_pk primary key (account_cd);

