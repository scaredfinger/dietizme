alter table "public"."booking_product" add column "pax_answers_by_pax_type" json
 not null default '{}';
