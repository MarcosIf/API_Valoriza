import { QueryRunner, Table } from "typeorm";

const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Hello1649285901645 {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "name",
                        type: "varchar"
                         
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name:"admin",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )

        
    }

    async down(queryRunner) {
    }

}
