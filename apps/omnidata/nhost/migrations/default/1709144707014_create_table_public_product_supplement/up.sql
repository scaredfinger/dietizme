CREATE TABLE "public"."product_supplement" ("product_id" uuid NOT NULL, "supplement_id" uuid NOT NULL, PRIMARY KEY ("product_id","supplement_id") , FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("supplement_id") REFERENCES "public"."supplement"("id") ON UPDATE restrict ON DELETE restrict);
