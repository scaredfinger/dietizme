BEGIN TRANSACTION;
ALTER TABLE "public"."product_business_model" DROP CONSTRAINT "product_business_model_pkey";

ALTER TABLE "public"."product_business_model"
    ADD CONSTRAINT "product_business_model_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;
