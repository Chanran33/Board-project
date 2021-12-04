import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Comment} from './Comment';

@Entity() //테이블
export class Board {
    @PrimaryGeneratedColumn()//primary 키를 자동으로 생성해주는 어노테이션
    id: number;

    @Column({length: 100})//테이블 필드를 생성, 속성은 ()안에 명시
    title: string;

    @Column("text")//text 타입
    content: string;

    @CreateDateColumn()//current_timestamp 설정
    created: Date;

    @UpdateDateColumn()//on update current_timestamp 설정
    updated: Date;

    @OneToMany(type=>Comment, comment => comment.board)
    comments: Comment[];
}