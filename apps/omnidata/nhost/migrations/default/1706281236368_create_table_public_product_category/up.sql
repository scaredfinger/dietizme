CREATE TABLE "public"."product_category" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name_id" uuid NOT NULL, "headline_id" UUID NOT NULL, "description_id" uuid NOT NULL, "image_id" UUID NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("name_id") REFERENCES "public"."translated_text"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("headline_id") REFERENCES "public"."translated_text"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("description_id") REFERENCES "public"."translated_text"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("image_id") REFERENCES "storage"."files"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
