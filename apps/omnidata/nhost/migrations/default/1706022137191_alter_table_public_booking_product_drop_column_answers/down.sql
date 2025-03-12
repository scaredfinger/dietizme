alter table "public"."booking_product" alter column "answers" set default '{}'::json;
alter table "public"."booking_product" alter column "answers" drop not null;
alter table "public"."booking_product" add column "answers" json;
