alter table "public"."booking" add column "booking_answers_by_id" json
 not null default '{}';
