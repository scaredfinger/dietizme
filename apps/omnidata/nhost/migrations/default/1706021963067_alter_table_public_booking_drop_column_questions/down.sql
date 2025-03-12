alter table "public"."booking" alter column "questions" set default '{}'::json;
alter table "public"."booking" alter column "questions" drop not null;
alter table "public"."booking" add column "questions" json;
