import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entities";
import { IsNotEmpty } from "class-validator";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    categoria: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
    
}