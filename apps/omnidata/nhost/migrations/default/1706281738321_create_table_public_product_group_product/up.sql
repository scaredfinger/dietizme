CREATE TABLE "public"."product_group_product" ("group_id" uuid NOT NULL, "product_id" UUID NOT NULL, "position" integer NOT NULL, PRIMARY KEY ("group_id","product_id") , FOREIGN KEY ("group_id") REFERENCES "public"."product_group"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON UPDATE restrict ON DELETE restrict);
