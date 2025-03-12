CREATE EXTENSION IF NOT EXISTS pgcrypto;
alter table "public"."product_business_model" add column "id" uuid
 not null default gen_random_uuid();
