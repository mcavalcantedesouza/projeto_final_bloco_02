import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({length: 1000, nullable: false})
    categoria: string
    
}