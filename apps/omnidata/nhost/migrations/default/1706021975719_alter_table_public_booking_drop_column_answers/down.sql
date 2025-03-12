alter table "public"."booking" alter column "answers" set default '{}'::json;
alter table "public"."booking" alter column "answers" drop not null;
alter table "public"."booking" add column "answers" json;
