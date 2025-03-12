alter table "public"."booking_product" alter column "questions" set default '{}'::json;
alter table "public"."booking_product" alter column "questions" drop not null;
alter table "public"."booking_product" add column "questions" json;
