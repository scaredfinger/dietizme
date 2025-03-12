alter table "public"."product_business_model" alter column "product_id" drop not null;
alter table "public"."product_business_model" add column "product_id" uuid;
