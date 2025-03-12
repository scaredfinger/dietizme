alter table "public"."supplement"
  add constraint "supplement_type_fkey"
  foreign key ("type")
  references "public"."supplement_type"
  ("id") on update restrict on delete restrict;
