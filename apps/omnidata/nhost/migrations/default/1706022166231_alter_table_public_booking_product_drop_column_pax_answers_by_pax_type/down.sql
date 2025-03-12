alter table "public"."booking_product" alter column "pax_answers_by_pax_type" set default '{}'::json;
alter table "public"."booking_product" alter column "pax_answers_by_pax_type" drop not null;
alter table "public"."booking_product" add column "pax_answers_by_pax_type" json;
