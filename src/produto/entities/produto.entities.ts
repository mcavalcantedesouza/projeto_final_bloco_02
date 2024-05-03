import { Categoria } from "src/categoria/entities/categoria.entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255, nullable: false})
    nome: string

    @Column({ type: 'float', precision: 6, scale: 2, nullable: false })
    preco: number

    @Column({length: 1000, nullable: false})
    foto: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}