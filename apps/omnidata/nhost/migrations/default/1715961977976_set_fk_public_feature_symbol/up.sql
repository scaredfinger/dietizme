alter table "public"."feature"
  add constraint "feature_symbol_fkey"
  foreign key ("symbol")
  references "public"."feature_symbol"
  ("id") on update restrict on delete restrict;
