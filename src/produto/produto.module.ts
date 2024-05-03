import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entities";
import { ProdutoService } from "./services/produto.service";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { ProdutoController } from "./controllers/produto.controller";
import { CategoriaModule } from "src/categoria/categoria.module";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule {}