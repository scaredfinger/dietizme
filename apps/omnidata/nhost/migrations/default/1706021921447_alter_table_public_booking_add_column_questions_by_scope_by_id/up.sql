alter table "public"."booking" add column "questions_by_scope_by_id" json
 not null default '{}';
