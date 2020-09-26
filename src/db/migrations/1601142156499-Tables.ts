import { MigrationInterface, QueryRunner } from 'typeorm'

export class Tables1601142156499 implements MigrationInterface {
    name = 'Tables1601142156499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "skill" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))')
        await queryRunner.query('CREATE TABLE "service" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "estimate_price" integer NOT NULL, "estimated_time" character varying NOT NULL, "active_service" boolean NOT NULL, "final_time" character varying NOT NULL, "final_value" integer NOT NULL, "service_description" character varying NOT NULL, "customer_evaluation" integer NOT NULL, "affiliate_evaluation" integer NOT NULL, "clientId" uuid, "affiliateId" uuid, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))')
        await queryRunner.query('CREATE TABLE "affiliate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "last_name" character varying NOT NULL, "first_name" character varying NOT NULL, "full_name" character varying NOT NULL, "phone" character varying NOT NULL, "password" character varying NOT NULL, "password_confirm" character varying NOT NULL, "cpf" character varying NOT NULL, CONSTRAINT "PK_1ce9ae335b25b11224e2756cfdc" PRIMARY KEY ("id"))')
        await queryRunner.query('CREATE TABLE "credit_card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "numberCard" character varying NOT NULL, "expirationDate" character varying NOT NULL, "name" character varying NOT NULL, "cvcCode" integer NOT NULL, "id_client" uuid, "id_affiliate" uuid, CONSTRAINT "PK_97c08b6c8d5c1df81bf1a96c43e" PRIMARY KEY ("id"))')
        await queryRunner.query('CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "last_name" character varying NOT NULL, "first_name" character varying NOT NULL, "full_name" character varying NOT NULL, "phone" character varying NOT NULL, "password" character varying NOT NULL, "password_confirm" character varying NOT NULL, "cpf" character varying NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))')
        await queryRunner.query('CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "street" character varying NOT NULL, "city" character varying NOT NULL, "number" integer NOT NULL, "zipCode" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "id_client" uuid, "id_affiliate" uuid, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))')
        await queryRunner.query('CREATE TABLE "affiliate_skills" ("skillId" uuid NOT NULL, "affiliateId" uuid NOT NULL, CONSTRAINT "PK_25a6c26f5655cf613861b572ef1" PRIMARY KEY ("skillId", "affiliateId"))')
        await queryRunner.query('CREATE INDEX "IDX_30bd08785933004f848f613ee3" ON "affiliate_skills" ("skillId") ')
        await queryRunner.query('CREATE INDEX "IDX_7cb934d91505437e7897f267bc" ON "affiliate_skills" ("affiliateId") ')
        await queryRunner.query('ALTER TABLE "service" ADD CONSTRAINT "FK_295b692ed9121ff68a5e08d9fc5" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
        await queryRunner.query('ALTER TABLE "service" ADD CONSTRAINT "FK_7663eebf87eb1690919d40a8118" FOREIGN KEY ("affiliateId") REFERENCES "affiliate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
        await queryRunner.query('ALTER TABLE "credit_card" ADD CONSTRAINT "FK_4618aab7cfdd088685ae6e88dc4" FOREIGN KEY ("id_client") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
        await queryRunner.query('ALTER TABLE "credit_card" ADD CONSTRAINT "FK_b12f0e610b0ea54502f01226a5b" FOREIGN KEY ("id_affiliate") REFERENCES "affiliate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
        await queryRunner.query('ALTER TABLE "address" ADD CONSTRAINT "FK_65cc34025781bfea4ad9dddd395" FOREIGN KEY ("id_client") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
        await queryRunner.query('ALTER TABLE "address" ADD CONSTRAINT "FK_5bb966f6ab91fbfab9a7eeac279" FOREIGN KEY ("id_affiliate") REFERENCES "affiliate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
        await queryRunner.query('ALTER TABLE "affiliate_skills" ADD CONSTRAINT "FK_30bd08785933004f848f613ee35" FOREIGN KEY ("skillId") REFERENCES "skill"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
        await queryRunner.query('ALTER TABLE "affiliate_skills" ADD CONSTRAINT "FK_7cb934d91505437e7897f267bca" FOREIGN KEY ("affiliateId") REFERENCES "affiliate"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
        await queryRunner.query('ALTER TABLE "affiliate_skills" ADD  "time_skill" character varying NOT NULL ')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "affiliate_skills" DROP CONSTRAINT "FK_7cb934d91505437e7897f267bca"')
        await queryRunner.query('ALTER TABLE "affiliate_skills" DROP CONSTRAINT "FK_30bd08785933004f848f613ee35"')
        await queryRunner.query('ALTER TABLE "address" DROP CONSTRAINT "FK_5bb966f6ab91fbfab9a7eeac279"')
        await queryRunner.query('ALTER TABLE "address" DROP CONSTRAINT "FK_65cc34025781bfea4ad9dddd395"')
        await queryRunner.query('ALTER TABLE "credit_card" DROP CONSTRAINT "FK_b12f0e610b0ea54502f01226a5b"')
        await queryRunner.query('ALTER TABLE "credit_card" DROP CONSTRAINT "FK_4618aab7cfdd088685ae6e88dc4"')
        await queryRunner.query('ALTER TABLE "service" DROP CONSTRAINT "FK_7663eebf87eb1690919d40a8118"')
        await queryRunner.query('ALTER TABLE "service" DROP CONSTRAINT "FK_295b692ed9121ff68a5e08d9fc5"')
        await queryRunner.query('DROP INDEX "IDX_7cb934d91505437e7897f267bc"')
        await queryRunner.query('DROP INDEX "IDX_30bd08785933004f848f613ee3"')
        await queryRunner.query('DROP TABLE "affiliate_skills"')
        await queryRunner.query('DROP TABLE "address"')
        await queryRunner.query('DROP TABLE "client"')
        await queryRunner.query('DROP TABLE "credit_card"')
        await queryRunner.query('DROP TABLE "affiliate"')
        await queryRunner.query('DROP TABLE "service"')
        await queryRunner.query('DROP TABLE "skill"')
    }
}
