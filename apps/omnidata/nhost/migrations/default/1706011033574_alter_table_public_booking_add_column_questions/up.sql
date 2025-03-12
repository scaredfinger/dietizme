alter table "public"."booking" add column "questions" json
 not null default '{}';
