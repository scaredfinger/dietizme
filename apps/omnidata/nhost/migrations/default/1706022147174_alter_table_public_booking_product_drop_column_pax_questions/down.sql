alter table "public"."booking_product" alter column "pax_questions" set default '{}'::json;
alter table "public"."booking_product" alter column "pax_questions" drop not null;
alter table "public"."booking_product" add column "pax_questions" json;
